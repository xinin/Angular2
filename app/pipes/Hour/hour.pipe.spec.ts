import { Hour } from './hour.pipe';
describe('Pipe: Hour', () => {
    let pipe: Hour;
    beforeEach(() => {
        pipe = new Hour();
    });
    it('transforms 1466843092040 to "16:27"', () => {
        expect(pipe.transform(1466843092040)).toEqual('16:27');
    });
});