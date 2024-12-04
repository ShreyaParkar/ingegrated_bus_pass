import { NextResponse } from 'next/server';

export async function GET() {
  // Simulated bus location data
  const busLocation = {
    latitude: 37.7749,  // Example coordinates (San Francisco)
    longitude: -122.4194
  };

  return NextResponse.json(busLocation);
}
