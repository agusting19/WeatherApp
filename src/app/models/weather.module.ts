export interface WeatherData {
  product: string;
  init: string;
  dataseries: Series[];
}

export interface Series {
  timepoint: number;
  cloudcover: number;
  lifted_index: number;
  prec_type: string;
  prec_amount: number;
  temp2m: number;
  rh2m: string;
  wind10m: Wind10m;
  weather: string;
}

export interface Wind10m {
  direction: string;
  speed: number;
}
