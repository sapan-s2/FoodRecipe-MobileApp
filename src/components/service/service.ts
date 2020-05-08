import { Component } from '@angular/core';

/**
 * Generated class for the ServiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'service',
  templateUrl: 'service.html'
})
export class ServiceComponent {

  text: string;

  constructor() {
    console.log('Hello ServiceComponent Component');
    this.text = 'Hello World';
  }

}
