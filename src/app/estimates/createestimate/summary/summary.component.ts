import { Component, OnInit } from '@angular/core';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private estimateService : EstimatesService) { }
  customer;
  work;
  pictures;
  url;
  path = ""
  ngOnInit(): void {
   this.customer= this.estimateService.getCustomer()
   console.log("reader exectuing...")
   this.url = this.estimateService.getPictures()
   this.work = this.estimateService.getWork();
   console.log(this.url)
  }

  saveEstimate(){
    this.estimateService.saveEstimate().subscribe(data => console.log(data))
  }


}
