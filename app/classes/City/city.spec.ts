import { CityData } from './city';
import {ChartData} from './../ChartData/chartData';

describe('class: CityData', () => {
    it('CityData has name', () => {
        let city: CityData = {name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new ChartData() };
        expect(city.name).toEqual('cityTest');
    });
    it('CityData has weather', () => {
        let city: CityData = {name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new ChartData() };
        expect(city.weatherImg).not.toBeNull();
    });
    it('CityData has weatherImg', () => {
        let city: CityData = {name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new ChartData() };
        expect(city.weatherImg).toEqual('sunny');
    });
    it('CityData has charData', () => {
        let city: CityData = {name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new ChartData() };
        expect(city.chartData).not.toBeNull();
    });
});
