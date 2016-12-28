import {Pipe} from '@angular/core';

@Pipe({
    name: 'hour'
})
export class Hour {

    transform(value:number) {
        let date = new Date(value*1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        return hours + ':' + minutes.substr(-2);
    }
}

