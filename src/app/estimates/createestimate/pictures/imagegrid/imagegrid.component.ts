import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagegrid',
  templateUrl: './imagegrid.component.html',
  styleUrls: ['./imagegrid.component.css']
})
export class ImagegridComponent implements OnInit {
  @Input() images 
  constructor() { }

  ngOnInit(): void {
    console.log(this.images)
  }

}
