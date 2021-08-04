import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ]),
    trigger('fade2', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ])
    ]),
    trigger('fade3', [
      transition('void => *', [
        style({opacity: 0}),
        animate(3000)
      ])
    ]),
    trigger('fade4', [
      transition('void => *', [
        style({opacity: 0}),
        animate(4000)
      ])
    ])

  ]
})
export class ShortcutsComponent implements OnInit {
  @Input() customers = []
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 1
        },
        {
          "name": "2011",
          "value": 2
        },
        {
          "name": "2012",
          "value": 3
        }
        ,
        {
          "name": "2013",
          "value": 2
        },
        {
          "name": "2014",
          "value": 4
        }
      ],
      
    },
    
  ]
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor() { }

  ngOnInit(): void {
  }

}
