import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    private apiKey = '673f75acd8356405d41d7e11f312d0d3';
    private weatherApi = 'http://api.openweathermap.org/data/2.5';  // URL to web api
    constructor(private http: Http) { }

    getCityWeather(city:string){
        let url = `${this.weatherApi}/weather?q=${city}&APPID=${this.apiKey}`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        )
    }

    getCityForecast(city:string){
        let url = `${this.weatherApi}/forecast/daily?q=${city}&cnt=7&APPID=${this.apiKey}`;
        return this.http.get(url).toPromise().then(
                response => { return {city: response.json().city.name, list: response.json().list}},
                err => err
        )
    }
}
