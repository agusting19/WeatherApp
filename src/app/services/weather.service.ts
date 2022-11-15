import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.module';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(longitude: string, latitude: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://www.7timer.info/bin/api.pl', {
      params: new HttpParams()
        .set('lon', longitude)
        .set('lat', latitude)
        .set('product', 'civil')
        .set('output', 'json'),
    });
  }
}
