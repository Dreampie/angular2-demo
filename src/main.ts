import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';

// Add these symbols to override the `LocationStrategy`
import {provide}  from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}) // .../#/crisis-center/
]);