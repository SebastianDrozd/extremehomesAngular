import { Component, OnInit } from '@angular/core';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-estimatestable',
  templateUrl: './estimatestable.component.html',
  styleUrls: ['./estimatestable.component.css']
})
export class EstimatestableComponent implements OnInit {

  constructor(private estimateService : EstimatesService) { }
  estimates = []
  searchString ;
  ngOnInit(): void {
    this.estimateService.getAllEstimates().subscribe(data => this.estimates = data)
  }
  filterTable($event){
    var estimatesCopy = this.estimates;
    var searchString = $event.target.value
    console.log("search string", searchString)
    this.estimates = estimatesCopy.filter(estimate => estimate.customer.firstName !== null && estimate.customer.firstName.includes(searchString))
  }
}
