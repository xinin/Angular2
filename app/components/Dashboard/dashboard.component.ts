'use strict';

import { Component, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router-deprecated';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/Dashboard/dashboard.component.html',
    styleUrls: ['app/components/Dashboard/dashboard.component.css']
})

export class DashboardComponent {
    public title: string;
    public router: Router;

    @Input() place: string;


    constructor(@Inject(Router) router:Router)
    {
        this.title = "Weather App";
        this.router = router;
    }

    goToDetail() {
        let link = ['PlaceDetail', { place: this.place }];
        this.router.navigate(link);
    }
}


