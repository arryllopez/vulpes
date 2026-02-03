/**
 * Run this script ONCE to generate the isochrone cache file.
 *
 * Usage: npx tsx scripts/generateIsochroneCache.ts
 *
 * Make sure NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is set in .env.local
 */

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

if (!MAPBOX_TOKEN) {
  console.error('Error: NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN not found in .env.local');
  process.exit(1);
}

const NEIGHBOURHOODS = [
  // Primary
  { name: "Downtown Core", lat: 43.6532, lng: -79.3832 },
  { name: "Queen West / Ossington", lat: 43.6426, lng: -79.4200 },
  { name: "Entertainment District", lat: 43.6465, lng: -79.3903 },
  { name: "Yorkville", lat: 43.6709, lng: -79.3930 },
  { name: "Kensington Market", lat: 43.6545, lng: -79.4003 },
  // Secondary
  { name: "King West", lat: 43.6441, lng: -79.4018 },
  { name: "Leslieville", lat: 43.6629, lng: -79.3285 },
  { name: "St. Lawrence", lat: 43.6490, lng: -79.3710 },
  { name: "Distillery District", lat: 43.6503, lng: -79.3596 },
  { name: "Harbourfront", lat: 43.6387, lng: -79.3819 },
];

async function fetchIsochrone(name: string, lat: number, lng: number) {
  const url = `https://api.mapbox.com/isochrone/v1/mapbox/walking/${lng},${lat}?contours_minutes=5,10,15&contours_colors=6366f1,a855f7,ec4899&polygons=true&access_token=${MAPBOX_TOKEN}`;

  console.log(`Fetching isochrone for ${name}...`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch isochrone for ${name}: ${response.statusText}`);
  }

  return response.json();
}

async function main() {
  console.log('Generating isochrone cache...\n');

  const cache: Record<string, unknown> = {};

  for (const neighbourhood of NEIGHBOURHOODS) {
    try {
      const data = await fetchIsochrone(neighbourhood.name, neighbourhood.lat, neighbourhood.lng);
      cache[neighbourhood.name] = data;
      console.log(`✓ ${neighbourhood.name}`);

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`✗ ${neighbourhood.name}: ${error}`);
    }
  }

  // Write cache file
  const outputPath = path.join(__dirname, '../lib/isochroneCache.json');
  fs.writeFileSync(outputPath, JSON.stringify(cache, null, 2));

  console.log(`\n✓ Cache saved to lib/isochroneCache.json`);
  console.log(`  Total neighbourhoods cached: ${Object.keys(cache).length}`);
}

main().catch(console.error);
