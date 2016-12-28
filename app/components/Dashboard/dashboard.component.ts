import { Component, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
    public title: string;
    public router: Router;

    @Input() place: string;

    constructor(@Inject(Router) router: Router) {
        this.title = 'Weather App';
        this.router = router;
    }

    goToDetail() {
        let link = ['PlaceDetail', { place: this.place }];
        this.router.navigate(link);
    }
}


