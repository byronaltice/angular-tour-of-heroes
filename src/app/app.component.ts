import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  ngOnInit() {
    window.location.href='https://angular.io/tutorial/toh-pt6#add-a-new-hero';
    throw new Error("https://angular.io/tutorial/toh-pt6#add-a-new-hero") 
  }
}
