/*import { WeatherService } from './weather.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {it,inject,beforeEachProviders,beforeEach} from '@angular/core/testing';

describe('Service: WeatherService', () => {
    let service:any;

    beforeEachProviders(() => [
        HTTP_PROVIDERS,
        WeatherService
    ]);

    beforeEach(inject([WeatherService], (s:any) => {
        service = s;
    }));

    it('return the weather of Madrid', () => {
        return service.getCityWeather('Madrid').then(
            (weather:any) => {
                //console.log(weather);
                expect(weather.name).toEqual('Madrid');
            }
        )
    });

    it('return a week forecast of Madrid', () => {
        return service.getCityForecast('Madrid').then(
            (forecast:any) => {
                //console.log(forecast);
                expect(forecast.city).toEqual('Madrid');
                expect(forecast.list.length).toEqual(7);
            }
        )
    });

});*/ 
//# sourceMappingURL=weather.service.spec.js.map