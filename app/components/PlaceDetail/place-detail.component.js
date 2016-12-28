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
var router_1 = require('@angular/router');
var weather_service_1 = require('./../../services/Weather/weather.service');
var temperature_pipe_1 = require('./../../pipes/Temperature/temperature.pipe');
var city_1 = require('./../../classes/City/city');
var chartData_1 = require('./../../classes/ChartData/chartData');
var PlaceDetailComponent = (function () {
    function PlaceDetailComponent(weatherService, routeParams, router) {
        this.weatherService = weatherService;
        this.routeParams = routeParams;
        this.router = router;
        this.weather = false;
        this.new_city = '';
        this.cities = [];
    }
    PlaceDetailComponent.prototype.ngOnInit = function () {
        if (this.routeParams['place'] !== null) {
            this.addCity(this.routeParams['place']);
        }
        else {
            this.router.navigate(['Dashboard']);
        }
    };
    PlaceDetailComponent.prototype.addCity = function (city) {
        var $this = this;
        if (city) {
            this.weatherService.getCityWeather(city).then(function (weather) {
                var cityData = new city_1.CityData();
                cityData.name = weather.name;
                cityData.weather = weather;
                cityData.weatherImg = $this.weatherImg(weather.weather[0].description);
                $this.weatherService.getCityForecast(city).then(function (forecast) {
                    var chartData = new chartData_1.ChartData();
                    chartData.yValues = { name: forecast.city, data: [], color: $this.newRandomColor() };
                    chartData.xValues = [];
                    forecast.list.forEach(function (day) {
                        chartData.xValues.push($this.parseDate(day.dt));
                        chartData.yValues.data.push({ y: parseInt(new temperature_pipe_1.Temperature().transform(day.temp.day)),
                            weather: $this.weatherImg(day.weather[0].description) });
                    });
                    cityData.chartData = chartData;
                    $this.cities.push(cityData);
                    $this.renderChart();
                    $this.new_city = '';
                }, function (err) { return $this.error = err; });
            }, function (err) { return $this.error = err; });
        }
    };
    PlaceDetailComponent.prototype.removeCity = function (index) {
        this.cities.splice(index, 1);
        if (this.cities.length === 0) {
            this.router.navigate(['Dashboard']);
        }
        else {
            this.renderChart();
        }
    };
    PlaceDetailComponent.prototype.parseDate = function (value) {
        var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var date = new Date(parseInt(value) * 1000);
        var day = date.getDate();
        var dayName = weekDays[date.getDay()];
        return dayName + ' ' + day;
    };
    PlaceDetailComponent.prototype.newRandomColor = function () {
        var color = [];
        color.push((Math.random() * 255).toFixed());
        color.push((Math.random() * 255).toFixed());
        color.push((Math.random() * 255).toFixed());
        color.push((Math.random()).toFixed(2));
        var colorResult = 'rgba(' + color.join(',') + ')';
        return colorResult;
    };
    PlaceDetailComponent.prototype.weatherImg = function (weather) {
        switch (weather) {
            case 'clear sky':
                return 'clear_sky';
            case 'few clouds':
                return 'few_clouds';
            case 'scattered clouds':
                return 'scattered_clouds';
            case 'broken clouds':
                return 'broken_clouds';
            case 'shower rain':
                return 'shower_rain';
            case 'rain':
                return 'rain';
            case 'light rain':
                return 'rain';
            case 'thunderstorm':
                return 'thunderstorm';
            case 'snow':
                return 'snow';
            case 'mist':
                return 'snow';
            default:
                return 'clear_sky';
        }
    };
    PlaceDetailComponent.prototype.renderChart = function () {
        var series = [];
        this.cities.forEach(function (city) {
            series.push(city.chartData.yValues);
        });
        jQuery('#chart').highcharts({
            title: {
                text: 'Daily forecast',
                x: -20,
                style: {
                    color: '#3b3b3b'
                }
            },
            chart: {
                backgroundColor: null
            },
            subtitle: {
                text: '7 days',
                x: -20,
                style: {
                    color: '#3b3b3b'
                }
            },
            xAxis: {
                categories: this.cities[0].chartData.xValues,
                labels: {
                    style: {
                        color: '#3b3b3b'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)',
                    style: {
                        color: '#3b3b3b'
                    }
                },
                labels: {
                    style: {
                        color: '#3b3b3b'
                    }
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<b>{series.name}</b><br />',
                formatter: function () {
                    return 'The temperature for <b>' + this.x + ' in ' + this.series.name + '</b> is <b>' + this.y +
                        '°C</b>  <img src="/assets/images/weather/' + this.point.weather + '.png" height="25px" width="25px">';
                }
            },
            labels: {
                style: {
                    color: '#3b3b3b'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: series
        });
    };
    PlaceDetailComponent = __decorate([
        core_1.Component({
            selector: 'place-detail',
            templateUrl: 'place-detail.component.html',
            styleUrls: ['place-detail.component.css'],
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService, Object, router_1.Router])
    ], PlaceDetailComponent);
    return PlaceDetailComponent;
}());
exports.PlaceDetailComponent = PlaceDetailComponent;
//# sourceMappingURL=place-detail.component.js.map