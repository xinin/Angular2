import {AppComponent} from './app.component';

describe('Component: App', () => {

    beforeEach(function() {
        this.component = new AppComponent();
    });

    it('should have title property', function() {
        expect(this.component.title).toBe('Weather App');
    });

});