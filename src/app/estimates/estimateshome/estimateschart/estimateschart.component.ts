import { Component, OnInit } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
@Component({
  selector: 'app-estimateschart',
  templateUrl: './estimateschart.component.html',
  styleUrls: ['./estimateschart.component.css']
})
export class EstimateschartComponent implements OnInit {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
