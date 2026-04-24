export interface Location {
  slug: string;
  name: string;
  state: string;
}

export const locations: Location[] = [
  { slug: 'delhi', name: 'Delhi', state: 'Delhi' },
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra' },
  { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka' },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana' },
  { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu' },
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal' },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra' },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat' },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan' },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh' },
  { slug: 'noida', name: 'Noida', state: 'Uttar Pradesh' },
  { slug: 'gurgaon', name: 'Gurgaon', state: 'Haryana' },
  { slug: 'chandigarh', name: 'Chandigarh', state: 'Punjab' },
  { slug: 'indore', name: 'Indore', state: 'Madhya Pradesh' },
  { slug: 'surat', name: 'Surat', state: 'Gujarat' },
  { slug: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh' },
  { slug: 'nagpur', name: 'Nagpur', state: 'Maharashtra' },
  { slug: 'kochi', name: 'Kochi', state: 'Kerala' },
  { slug: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu' },
  { slug: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { slug: 'patna', name: 'Patna', state: 'Bihar' },
  { slug: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh' },
  { slug: 'agra', name: 'Agra', state: 'Uttar Pradesh' },
  { slug: 'kanpur', name: 'Kanpur', state: 'Uttar Pradesh' },
  { slug: 'nashik', name: 'Nashik', state: 'Maharashtra' },
  { slug: 'rajkot', name: 'Rajkot', state: 'Gujarat' },
  { slug: 'faridabad', name: 'Faridabad', state: 'Haryana' },
  { slug: 'meerut', name: 'Meerut', state: 'Uttar Pradesh' },
  { slug: 'amritsar', name: 'Amritsar', state: 'Punjab' },
  { slug: 'vadodara', name: 'Vadodara', state: 'Gujarat' },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function interpolate(template: string, city: string): string {
  return template.replace(/\{city\}/g, city);
}
