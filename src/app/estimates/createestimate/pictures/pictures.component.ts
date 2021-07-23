import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor() { }
  wantsPictures = false;
  ngOnInit(): void {
  }

  addPictures(){
    this.wantsPictures= true;
  }
}
