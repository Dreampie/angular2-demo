import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from "./hero/hero.component";
import {HeroService} from "./hero/hero.service";

@Component({
  selector: 'app',
  styles: [require('!raw!less!./app.component.less')],
  template: require('!raw!./app.component.html'),
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService],
})
@RouteConfig([
  {path: '/heroes/:id', name: 'Heroes', component: HeroComponent}
])
export class AppComponent {
}