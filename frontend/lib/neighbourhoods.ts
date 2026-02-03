export interface Neighbourhood {
  name: string;
  lat: number;
  lng: number;
}

export const NEIGHBOURHOODS = {
  primary: [
    { name: "Downtown Core", lat: 43.6532, lng: -79.3832 },
    { name: "Queen West / Ossington", lat: 43.6426, lng: -79.4200 },
    { name: "Entertainment District", lat: 43.6465, lng: -79.3903 },
    { name: "Yorkville", lat: 43.6709, lng: -79.3930 },
    { name: "Kensington Market", lat: 43.6545, lng: -79.4003 },
  ] as Neighbourhood[],
  secondary: [
    { name: "King West", lat: 43.6441, lng: -79.4018 },
    { name: "Leslieville", lat: 43.6629, lng: -79.3285 },
    { name: "St. Lawrence", lat: 43.6490, lng: -79.3710 },
    { name: "Distillery District", lat: 43.6503, lng: -79.3596 },
    { name: "Harbourfront", lat: 43.6387, lng: -79.3819 },
  ] as Neighbourhood[],
};
