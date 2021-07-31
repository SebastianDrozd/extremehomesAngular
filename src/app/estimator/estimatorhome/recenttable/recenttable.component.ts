import { Component, OnInit } from '@angular/core';
import { EstimatesService } from 'src/app/estimates/services/estimates.service';

@Component({
  selector: 'app-recenttable',
  templateUrl: './recenttable.component.html',
  styleUrls: ['./recenttable.component.css']
})
export class RecenttableComponent implements OnInit {

  searchString = "";
  constructor(private estimateService : EstimatesService) { }

  estimates = []
  ngOnInit(): void {
    this.estimateService.getAllEstimates().subscribe(data => this.estimates = data)
  }

}
