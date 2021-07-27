import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent implements OnInit {
  @Input() customers = []
  constructor() { }

  ngOnInit(): void {
  }

}
