import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor() { }
  wantSideBar = false;
  ngOnInit(): void {
  }
  openSideBar(){
    this.wantSideBar = !this.wantSideBar
    this.valueChange.emit(this.wantSideBar);
  }

}
