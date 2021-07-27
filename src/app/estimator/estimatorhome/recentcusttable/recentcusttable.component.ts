import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentcusttable',
  templateUrl: './recentcusttable.component.html',
  styleUrls: ['./recentcusttable.component.css']
})
export class RecentcusttableComponent implements OnInit {
  @Input() customers = []
  constructor() { }

  ngOnInit(): void {
  }

}
