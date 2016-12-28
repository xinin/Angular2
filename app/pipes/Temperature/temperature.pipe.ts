import {Pipe} from '@angular/core';

@Pipe({
    name: 'temperature'
})
export class Temperature {
    transform(value:number) {
        return (value - 273.15).toFixed();
    }
}