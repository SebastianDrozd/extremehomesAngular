import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimateshome',
  templateUrl: './estimateshome.component.html',
  styleUrls: ['./estimateshome.component.css']
})
export class EstimateshomeComponent implements OnInit {

  constructor() { }
  saleData = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ]
  ngOnInit(): void {
  }

}
