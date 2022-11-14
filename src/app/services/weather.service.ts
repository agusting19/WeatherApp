import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.module';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(longitude: string, latitude: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('lon', longitude)
        .set('lat', latitude)
        .set('product', 'civil')
        .set('output', 'json'),
    });
  }
}
