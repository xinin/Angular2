"use strict";
describe('class: ChartData', function () {
    it('ChartData has xValues', function () {
        var chartData = { xValues: [{ xValue: 'xValue_data_test' }], yValues: [{ yValue: 'yValue_data_test' }] };
        expect(chartData.xValues).toBeDefined();
    });
    it('ChartData has yValues', function () {
        var chartData = { xValues: [{ xValue: 'xValue_data_test' }], yValues: [{ yValue: 'yValue_data_test' }] };
        expect(chartData.yValues).toBeDefined();
    });
});
//# sourceMappingURL=chartData.spec.js.map