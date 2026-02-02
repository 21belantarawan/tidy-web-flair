import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Kelurahan di Kecamatan Sawahan dengan koordinat bounding box
const KELURAHAN_BOUNDS: Record<string, { name: string; bounds: { north: number; south: number; east: number; west: number } }> = {
  petemon: {
    name: "Petemon",
    bounds: { north: -7.255, south: -7.265, east: 112.725, west: 112.715 }
  },
  sawahan: {
    name: "Sawahan",
    bounds: { north: -7.260, south: -7.270, east: 112.730, west: 112.720 }
  },
  kupang_krajan: {
    name: "Kupang Krajan",
    bounds: { north: -7.265, south: -7.275, east: 112.735, west: 112.725 }
  },
  banyu_urip: {
    name: "Banyu Urip",
    bounds: { north: -7.270, south: -7.280, east: 112.740, west: 112.730 }
  },
  putat_jaya: {
    name: "Putat Jaya",
    bounds: { north: -7.275, south: -7.285, east: 112.745, west: 112.735 }
  },
  pakis: {
    name: "Pakis",
    bounds: { north: -7.280, south: -7.290, east: 112.750, west: 112.740 }
  },
};

interface ReverseGeocodeRequest {
  latitude: number;
  longitude: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY');
    if (!GOOGLE_MAPS_API_KEY) {
      console.error('GOOGLE_MAPS_API_KEY is not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Google Maps API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { latitude, longitude } = await req.json() as ReverseGeocodeRequest;
    
    console.log(`Reverse geocoding for coordinates: ${latitude}, ${longitude}`);

    if (!latitude || !longitude) {
      return new Response(
        JSON.stringify({ success: false, error: 'Latitude and longitude are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Call Google Maps Geocoding API
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=id&key=${GOOGLE_MAPS_API_KEY}`;
    
    const response = await fetch(geocodeUrl);
    const data = await response.json();

    console.log('Google Maps API response status:', data.status);

    if (data.status !== 'OK') {
      console.error('Google Maps API error:', data.status, data.error_message);
      return new Response(
        JSON.stringify({ success: false, error: `Geocoding failed: ${data.status}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract address components
    const result = data.results[0];
    const formattedAddress = result?.formatted_address || '';
    
    // Try to detect kelurahan from address components
    let detectedKelurahan: string | null = null;
    let kelurahanName = '';

    const addressComponents = result?.address_components || [];
    
    // Look for kelurahan in address components
    for (const component of addressComponents) {
      const types = component.types || [];
      const longName = (component.long_name || '').toLowerCase();
      
      // Check if this component matches any of our kelurahan
      for (const [key, kelurahan] of Object.entries(KELURAHAN_BOUNDS)) {
        if (longName.includes(kelurahan.name.toLowerCase()) || 
            kelurahan.name.toLowerCase().includes(longName)) {
          detectedKelurahan = key;
          kelurahanName = kelurahan.name;
          break;
        }
      }
      
      if (detectedKelurahan) break;
    }

    // If not found in components, try to find in formatted address
    if (!detectedKelurahan) {
      const addressLower = formattedAddress.toLowerCase();
      for (const [key, kelurahan] of Object.entries(KELURAHAN_BOUNDS)) {
        if (addressLower.includes(kelurahan.name.toLowerCase())) {
          detectedKelurahan = key;
          kelurahanName = kelurahan.name;
          break;
        }
      }
    }

    // If still not found, check bounds (fallback)
    if (!detectedKelurahan) {
      for (const [key, kelurahan] of Object.entries(KELURAHAN_BOUNDS)) {
        const { bounds } = kelurahan;
        if (latitude >= bounds.south && latitude <= bounds.north &&
            longitude >= bounds.west && longitude <= bounds.east) {
          detectedKelurahan = key;
          kelurahanName = kelurahan.name;
          break;
        }
      }
    }

    console.log('Detected kelurahan:', detectedKelurahan, kelurahanName);

    return new Response(
      JSON.stringify({
        success: true,
        address: formattedAddress,
        kelurahan: detectedKelurahan,
        kelurahanName: kelurahanName,
        coordinates: { latitude, longitude }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in reverse-geocode function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
