"use strict";
var chartData_1 = require('./../ChartData/chartData');
describe('class: CityData', function () {
    it('CityData has name', function () {
        var city = { name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new chartData_1.ChartData() };
        expect(city.name).toEqual('cityTest');
    });
    it('CityData has weather', function () {
        var city = { name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new chartData_1.ChartData() };
        expect(city.weatherImg).not.toBeNull();
    });
    it('CityData has weatherImg', function () {
        var city = { name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new chartData_1.ChartData() };
        expect(city.weatherImg).toEqual('sunny');
    });
    it('CityData has charData', function () {
        var city = { name: 'cityTest', weather: {}, weatherImg: 'sunny', chartData: new chartData_1.ChartData() };
        expect(city.chartData).not.toBeNull();
    });
});
//# sourceMappingURL=city.spec.js.map