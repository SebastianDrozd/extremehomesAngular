import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extremehomes';

  wantSideBar = false;

  displayWantsSidebar(boolean){
    console.log(boolean)
    this.wantSideBar = boolean;
  }
}
