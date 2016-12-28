//'use strict';
//
//import { provide, Component } from '@angular/core';
//
//import {
//    describe,
//    expect,
//    it,
//    inject,
//    beforeEachProviders,
//    beforeEach,
//    injectAsync,
//} from '@angular/core/testing';
//
//
////import { RootRouter } from '@angular/src/router/router-deprecated';
//
//
////import { ROUTER_PRIMARY_COMPONENT } from '@angular/router-deprecated';
//
////import { ROUTER_PROVIDERS } from '@angular/router';
////
////import {Component} from '@angular/core';
//import {RouteConfig, RouteRegistry,ROUTER_PRIMARY_COMPONENT} from '@angular/router-deprecated';
//import { Router } from '@angular/router-deprecated';
//import { Inject, Injector } from '@angular/core';
//import {HTTP_PROVIDERS, Http}   from '@angular/http';
//import {RootRouter} from '@angular/src/router/router';
//
//
////import {MockApplicationRef} from '@angular/core/testing';
//import {DashboardComponent} from './dashboard.component';
//import {AppComponent} from './../App/app.component';
//
//describe('Component: Dashboard', () => {
//
//    let component:any;
//    let router: Router;
//
//    beforeEachProviders(() => [
//        Http,
//        HTTP_PROVIDERS,
//        RouteRegistry,
//        provide(ROUTER_PRIMARY_COMPONENT, {useValue: DashboardComponent}),
//    ]);
//
//
//    //
//    //var router2;
//
//
//    //beforeEachProviders(() => [
//    //    RouteRegistry,
//    //    Location,
//    //    provide(Router, {useClass: RootRouter}),
//    //    provide(ROUTER_PRIMARY_COMPONENT, {useValue: DashboardComponent})
//    //]);
//
//    beforeEach(() => {
//        router = new Router(RouteRegistry(new AppComponent()), false, false, false);
//        component = new DashboardComponent(router);
//    });
//
//    it('should have title property', function () {
//        expect(component.title).toBe('Weather App');
//    });
//
//    it('should go to /place?place=Madrid', function () {
//        console.log(component);
//        router.navigate(['PlaceDetail', { place: 'Madrid' }]).then(
//            () => expect(location.path()).toBe('/place'),
//            () => expect(true).toBe(false)
//        )
//    })
//});
//
//
////describe('Greeter: component', () => {
////    let tcb;
////
////    //setup
////    beforeEachProviders(() => [
////        TestComponentBuilder,
////        DashboardComponent
////    ]);
////
////    beforeEach(inject([TestComponentBuilder], _tcb => {
////        tcb = _tcb
////    }));
////
////    //specs
////    it('should render `Hello World!`', done => {
////        tcb.createAsync(DashboardComponent).then(fixture => {
////            let greeter = fixture.componentInstance,
////                element = fixture.nativeElement;
////            greeter.name = 'World';
////            fixture.detectChanges(); //trigger change detection
////            expect(element.querySelector('h1').innerText).toBe('Hello World!');
////            done();
////        })
////            .catch(e => done.fail(e));
////    });
////})
//
//
////describe('Component: Dashboard', () => {
////
////
////    var location, router;
////    var component;
////
////
////    //beforeEach(function() {
////    //    this.component = new DashboardComponent();
////    //});
////
////
////
////    //beforeEachProviders(() => [
////    //    //Router,
////    //
////    //    ROUTER_PRIMARY_COMPONENT,
////    //    DashboardComponent
////    //]);
////
////    beforeEachProviders(() => [
////        RouteRegistry,
////        provide(Location, {useClass: SpyLocation}),
////        provide(ROUTER_PRIMARY_COMPONENT, {useValue: DashboardComponent}),
////        provide(Router, {useClass: RootRouter})
////    ]);
////
////
////    //beforeEachProviders(() => [
////    //    ROUTER_PROVIDERS,
////    //    provide(APP_BASE_HREF, {useValue: '/'}),
////    //    provide(ROUTER_PRIMARY_COMPONENT, {useValue: DashboardComponent}),
////    //    provide(ApplicationRef, {useClass: MockApplicationRef})
////    //]);
////
////
////    //beforeEachProviders(() => [
////    //    RouteRegistry,
////    //    //provide(Location, {useClass: SpyLocation}),
////    //    provide(Router, {useClass: RootRouter}),
////    //    //provide(ROUTER_PRIMARY_COMPONENT, {useValue: DashboardComponent})
////    //]);
////
////    beforeEach(inject([DashboardComponent], (d) => {
////
////        component = d;
////
////    }));
////
////    it('should have title property', function() {
////        console.log("ENTRAMOS");
////        expect(1).toBe(1);
////        //expect(component.title).toBe('Weather App');
////    });
////
////});
////
////
////
//////import { DashboardComponent } from './dashboard.component';
//////import { Router } from '@angular/router-deprecated';
//////import {it,inject,beforeEachProviders,beforeEach,TestComponentBuilder} from '@angular/core/testing';
//////
//////import { RouteRegistry,SpyLocation,ROUTER_DIRECTIVES } from '@angular/router-deprecated';
//////
//////
//////describe('Component: Dashboard', () => {
//////
//////    let tcb;
//////
//////    beforeEachProviders(() => [
//////        ROUTER_DIRECTIVES,
//////        TestComponentBuilder,
//////        DashboardComponent
//////    ]);
//////
//////    beforeEach(inject([TestComponentBuilder], _tcb => {
//////        tcb = _tcb
//////    }));
//////
//////    it('should render `Hello World!`', done => {
//////        tcb.createAsync(DashboardComponent).then(fixture => {
//////            let greeter = fixture.componentInstance,
//////                element = fixture.nativeElement;
//////            greeter.name = 'World';
//////            fixture.detectChanges(); //trigger change detection
//////            expect(element.querySelector('h1').innerText).toBe('Hello World!');
//////            done();
//////        })
//////            .catch(e => done.fail(e));
//////    });
////
////    //let service:any;
////    //
////    //beforeEachProviders(() => [
////    //    Router,
////    //    RouteRegistry,
////    //    provide(Location, {useClass: SpyLocation}),
////    //    //provide(ROUTER_PRIMARY_COMPONENT, {useValue: App}),
////    //    //provide(Router, {useClass: RootRouter})
////    //    DashboardComponent
////    //]);
////    //
////    //beforeEach(inject([DashboardComponent], (s:any) => {
////    //    service = s;
////    //}));
////
////    it('dash', () => {
////        expect(1).toBe(1);
////        //return service.getCityWeather('Madrid').then(
////        //    (weather:any) => {
////        //        //console.log(weather);
////        //        expect(weather.name).toEqual('Madrid');
////        //    }
////        //)
////    });
////}); 
//# sourceMappingURL=dashboard.component.spec.js.map