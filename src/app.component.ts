import {Component} from "angular2/core";

@Component({
  selector: 'app',
  template: '<h1>My First Angular 2 App{{name}}</h1>'
})
export class AppComponent {
  name:string = "Demo"
}






