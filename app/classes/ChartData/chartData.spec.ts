import {ChartData} from './../ChartData/chartData';

describe('class: ChartData', () => {
    it('ChartData has xValues', () => {
        let chartData: ChartData  = {xValues: [{xValue: 'xValue_data_test'}], yValues: [{yValue: 'yValue_data_test'}] };
        expect(chartData.xValues).toBeDefined();
    });
    it('ChartData has yValues', () => {
        let chartData: ChartData  = {xValues: [{xValue: 'xValue_data_test'}], yValues: [{yValue: 'yValue_data_test'}] };
        expect(chartData.yValues).toBeDefined();
    });
});
