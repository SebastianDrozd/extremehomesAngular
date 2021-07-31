import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimatesService } from '../services/estimates.service';

@Component({
  selector: 'app-individualestimate',
  templateUrl: './individualestimate.component.html',
  styleUrls: ['./individualestimate.component.css']
})
export class IndividualestimateComponent implements OnInit {

  constructor(private estimateService : EstimatesService, private route : ActivatedRoute) { }
  customer;
  work;
  pictures=[]
  url;
  path = ""
  materialss;
  responseUrl = ""
  hasPictures = false;
  hasMaterials = false;
  id;
  estimate;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      console.log(params.get('id'))
      this.id = params.get('id')
    });
    this.estimateService.getEstimateById(this.id).subscribe(data => {this.estimate = data; console.log(this.estimate)
    this.customer = this.estimate.customer;
    this.pictures = this.estimate.images;
    })
  }

  saveEstimate(){
    
  }


}
