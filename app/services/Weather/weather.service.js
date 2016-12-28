"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.apiKey = '673f75acd8356405d41d7e11f312d0d3';
        this.weatherApi = 'http://api.openweathermap.org/data/2.5'; // URL to web api
    }
    WeatherService.prototype.getCityWeather = function (city) {
        var url = this.weatherApi + "/weather?q=" + city + "&APPID=" + this.apiKey;
        return this.http.get(url).toPromise().then(function (response) { return response.json(); }, function (err) { return err; });
    };
    WeatherService.prototype.getCityForecast = function (city) {
        var url = this.weatherApi + "/forecast/daily?q=" + city + "&cnt=7&APPID=" + this.apiKey;
        return this.http.get(url).toPromise().then(function (response) { return { city: response.json().city.name, list: response.json().list }; }, function (err) { return err; });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map