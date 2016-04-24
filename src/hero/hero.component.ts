import {Component, OnInit}   from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero, HeroService}   from './hero.service';

@Component({
  selector: 'hero',
  styles: [require('!raw!less!./hero.component.less')],
  template: require('!raw!./hero.component.html')
})
export class HeroComponent implements OnInit {
  hero:Hero;
  heroes:Hero[];

  constructor(private _router:Router, private _routeParams:RouteParams, private _service:HeroService) {
  }

  ngOnInit() {
    let id = this._routeParams.get('id');
    if (id) {
      this._service.findById(id).then(hero => this.hero = hero);
    } else {
      this._service.findBy(null).then(heroes => this.heroes = heroes)
    }
  }

  onSelect(hero: Hero) {
    this._router.navigate( ['Heroes', { id: hero.id }] );
  }
}