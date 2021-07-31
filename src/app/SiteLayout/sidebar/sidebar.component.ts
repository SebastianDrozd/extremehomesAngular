import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fade1', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500)
      ])
    ]),
    trigger('fade2', [
      transition('void => *', [
        style({opacity: 0}),
        animate(800)
      ])
    ]),
    trigger('fade3', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1100)
      ])
    ]),
    trigger('fade4', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1400)
      ])
    ]),
    trigger('fade5', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1700)
      ])
    ]),
    trigger('fade6', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ])
    ]),
  ]
})
export class SidebarComponent implements OnInit {
  @Input() wantSideBar : boolean
  constructor() { }

  ngOnInit(): void {
  }

}
