"use strict";
var app_component_1 = require('./app.component');
describe('Component: App', function () {
    beforeEach(function () {
        this.component = new app_component_1.AppComponent();
    });
    it('should have title property', function () {
        expect(this.component.title).toBe('Weather App');
    });
});
//# sourceMappingURL=app.component.spec.js.map