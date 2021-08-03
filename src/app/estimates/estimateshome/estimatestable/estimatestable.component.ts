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
  pageInfo ;
  currentPageEstimates ;
  totalEstimates = 0;
  pageSize = 0;
  totalButtons = 0;
  fakeArray = []
  ngOnInit(): void {
   // this.estimateService.getAllEstimates().subscribe(data => this.estimates = data)
    this.estimateService.getAllEstimatesResponse(1).subscribe(response =>{this.pageInfo =response.headers.getAll('x-pagination');console.log("page-info",this.pageInfo)
    this.pageInfo = JSON.parse(this.pageInfo)
    this.totalEstimates = this.pageInfo.TotalCount;
    this.pageSize = this.pageInfo.PageSize;
    console.log("parsed",this.pageInfo)
    this.currentPageEstimates = response.body;
    console.log("page size",this.pageSize)
    this.totalButtons = Math.floor(this.totalEstimates /this.pageSize);
    this.fakeArray = [this.totalButtons];
    for(var i = 0 ; i < this.totalButtons;i++){
        this.fakeArray[i] = i +1;
    }
    console.log("fake", this.fakeArray)
  })
  }
  filterTable($event){
    var estimatesCopy = this.estimates;
    var searchString = $event.target.value
    console.log("search string", searchString)
    this.estimates = estimatesCopy.filter(estimate => estimate.customer.firstName !== null && estimate.customer.firstName.includes(searchString))
  }

  grabPageData(number){
    return this.estimateService.getAllEstimatesResponse(number).subscribe(resp => this.currentPageEstimates = resp.body)
  }
}
