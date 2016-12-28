import { Temperature } from './temperature.pipe';
describe('Pipe: Temperature', () => {
    let pipe: Temperature;
    beforeEach(() => {
        pipe = new Temperature();
    });
    it('transforms 273.15 to "0"', () => {
        expect(pipe.transform(273.15)).toEqual('0');
    });
    it('transforms 300 to "27"', () => {
        expect(pipe.transform(300)).toEqual('27');
    });
});