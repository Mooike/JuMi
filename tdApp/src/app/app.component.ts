import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tdApp';
  public clickedEvent: Event;

  childEventClicked(li: Event) {
    this.clickedEvent = li;
    console.log("aus app unten");
    console.log(this.clickedEvent);
  }
}
