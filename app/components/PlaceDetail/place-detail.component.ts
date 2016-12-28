import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { WeatherService } from './../../services/Weather/weather.service';
import {Temperature} from './../../pipes/Temperature/temperature.pipe';
import {Hour} from './../../pipes/Hour/hour.pipe';
import {CityData} from './../../classes/City/city';
import {ChartData} from './../../classes/ChartData/chartData';


declare var jQuery:any;

@Component({
    selector: 'place-detail',
    templateUrl: 'app/components/PlaceDetail/place-detail.component.html',
    styleUrls: ['app/components/PlaceDetail/place-detail.component.css'],
    pipes: [Temperature, Hour],
    providers: [WeatherService]
})
export class PlaceDetailComponent implements OnInit {
    weather:any =false;
    error: any;
    cities : CityData[];
    new_city:string = '';

    constructor(private weatherService: WeatherService, private routeParams: RouteParams,private router: Router) {
        this.cities = [];
    }

    ngOnInit() {
        if (this.routeParams.get('place') !== null) {
            this.addCity(this.routeParams.get('place'));
        } else {
            this.router.navigate(['Dashboard']);
        }
    }



    addCity(city:string){
        let $this = this;
        if(city){
            this.weatherService.getCityWeather(city).then(
                (weather:any) => {
                    let cityData = new CityData();
                    cityData.name = weather.name;
                    cityData.weather = weather;
                    cityData.weatherImg = $this.weatherImg(weather.weather[0].description);
                    $this.weatherService.getCityForecast(city).then(
                        (forecast:any) => {
                            let chartData = new ChartData();
                            chartData.yValues = {name:forecast.city,data:[],color:$this.newRandomColor()};
                            chartData.xValues = [];
                            forecast.list.forEach((day:any)=>{
                                chartData.xValues.push($this.parseDate(day.dt));
                                chartData.yValues.data.push({y:parseInt(new Temperature().transform(day.temp.day)), weather:$this.weatherImg(day.weather[0].description)})
                            });
                            cityData.chartData=chartData;
                            $this.cities.push(cityData);
                            $this.renderChart();
                            $this.new_city='';
                        },
                        err => $this.error = err
                    );
                },
                err => $this.error=err
            );
        }
    }

    removeCity(index:number){
        this.cities.splice(index,1);
        if(this.cities.length === 0){
            this.router.navigate(['Dashboard']);
        } else{
            this.renderChart();
        }
    }

    parseDate(value:string){
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let date = new Date(parseInt(value)*1000);
        let day = date.getDate();
        let dayName = weekDays[date.getDay()];
        return dayName+" "+day;
    }

    newRandomColor() {
        let color:string[] = [];
        color.push((Math.random() * 255).toFixed());
        color.push((Math.random() * 255).toFixed());
        color.push((Math.random() * 255).toFixed());
        color.push((Math.random()).toFixed(2));
        let colorResult = 'rgba(' + color.join(',') + ')';
        return colorResult;
    }

    weatherImg(weather:string){
        switch(weather){
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
            default :
                return 'clear_sky';
        }
    }

    renderChart() {
        let series: any[] = [];

        this.cities.forEach((city)=>{
            series.push(city.chartData.yValues);
        });

        jQuery('#chart').highcharts({
            title: {
                text: 'Daily forecast',
                x: -20,
                style:{
                    color: '#3b3b3b'
                }
            },
            chart: {
              backgroundColor: null
            },
            subtitle: {
                text: '7 days',
                x: -20,
                style:{
                    color:'#3b3b3b'
                }
            },
            xAxis: {
                categories: this.cities[0].chartData.xValues,
                labels: {
                    style:{
                        color:'#3b3b3b'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)',
                    style:{
                        color:'#3b3b3b'
                    }
                },
                labels: {
                    style:{
                        color:'#3b3b3b'
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
                formatter: function() {
                    return 'The temperature for <b>' + this.x + ' in '+this.series.name+'</b> is <b>' + this.y + '°C</b>  <img src="/assets/images/weather/'+this.point.weather+'.png" height="25px" width="25px">';
                }
            },
            labels:{
                style:{
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
    }

}
