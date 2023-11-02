import { Component } from '@angular/core';
import { Person } from './article/anil';

@Component({
  selector: 'app-root',
  template: `<app-article></app-article>
  <button (click)="showGreeting()"> show showGreeting</button>

  `

})
export class AppComponent {
  title = 'NgRx-Store-Example';

  person:Person=new Person('ketan',30)

  showGreeting(){
    this.person.greet()

  }
}
