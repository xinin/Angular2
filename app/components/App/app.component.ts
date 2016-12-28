import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './../Dashboard/dashboard.component';
import { PlaceDetailComponent } from './../PlaceDetail/place-detail.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/components/App/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,

    ]
})
@RouteConfig([
    { path: '/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
    { path: '/place',    name: 'PlaceDetail', component: PlaceDetailComponent },
    { path: '/**',    redirectTo:['Dashboard'] },
])



export class AppComponent {
    title = 'Weather App';
}
