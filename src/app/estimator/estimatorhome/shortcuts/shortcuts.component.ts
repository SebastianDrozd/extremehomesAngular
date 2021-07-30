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
  constructor() { }

  ngOnInit(): void {
  }

}
