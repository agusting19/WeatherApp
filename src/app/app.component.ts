import { Component, OnInit } from '@angular/core';
import { Series, WeatherData } from './models/weather.module';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  wheatherData?: Series[];
  minTemp?: number;
  maxTemp?: number;
  humidity?: string;
  wind?: number;

  ngOnInit(): void {
    this.weatherService.getWeatherData('-60,693', '-32,959').subscribe({
      next: (response) => {
        this.wheatherData = response.dataseries;
        let [min, max] = this.getTemperatures(this.wheatherData);
        this.minTemp = min;
        this.maxTemp = max;
        this.humidity = this.wheatherData[0].rh2m;
        this.wind = this.wheatherData[0].wind10m.speed;
      },
    });
  }

  getTemperatures(data: Series[]) {
    let min = data[0].temp2m;
    let max = data[0].temp2m;

    for (let i = 1; i < 8; i++) {
      if (data[i].temp2m > max) {
        max = data[i].temp2m;
      }

      if (data[i].temp2m < min) {
        min = data[i].temp2m;
      }
    }

    return [min, max];
  }
}
