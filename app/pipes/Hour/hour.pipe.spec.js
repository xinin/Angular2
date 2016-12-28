"use strict";
var hour_pipe_1 = require('./hour.pipe');
describe('Pipe: Hour', function () {
    var pipe;
    beforeEach(function () {
        pipe = new hour_pipe_1.Hour();
    });
    it('transforms 1466843092040 to "16:27"', function () {
        expect(pipe.transform(1466843092040)).toEqual('16:27');
    });
});
//# sourceMappingURL=hour.pipe.spec.js.map