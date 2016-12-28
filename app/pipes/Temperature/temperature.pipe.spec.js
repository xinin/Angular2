"use strict";
var temperature_pipe_1 = require('./temperature.pipe');
describe('Pipe: Temperature', function () {
    var pipe;
    beforeEach(function () {
        pipe = new temperature_pipe_1.Temperature();
    });
    it('transforms 273.15 to "0"', function () {
        expect(pipe.transform(273.15)).toEqual('0');
    });
    it('transforms 300 to "27"', function () {
        expect(pipe.transform(300)).toEqual('27');
    });
});
//# sourceMappingURL=temperature.pipe.spec.js.map