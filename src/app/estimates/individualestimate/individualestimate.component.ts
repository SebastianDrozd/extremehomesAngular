import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimatesService } from '../services/estimates.service';

@Component({
  selector: 'app-individualestimate',
  templateUrl: './individualestimate.component.html',
  styleUrls: ['./individualestimate.component.css'],
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
        animate(1000)
      ])
    ])
  ]
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
  wantEditCustomer = false;
  wantEditWork = false;
  wantEditTask = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      console.log(params.get('id'))
      this.id = params.get('id')
    });
    this.estimateService.getEstimateById(this.id).subscribe(data => {this.estimate = data; console.log(this.estimate)
    this.customer = this.estimate.customer;
    this.pictures = this.estimate.images;
    this.hasMaterials = this.estimate.materials.length > 0;
    this.hasPictures = this.estimate.images.length > 0;
    })
  }

  saveEstimate(){
    
  }

  editCustomer(){
    this.wantEditCustomer = true;
  }
  editWork(){
    this.wantEditWork = true;
  }
  editTask(){
    this.wantEditTask = true;
  }

  saveWork(){
    this.wantEditWork = false;
  }

  saveTask(){
    this.wantEditTask = false;
  }

  saveCustomer(){
    this.wantEditCustomer = false;
  }


}
function scale(arg0: number): string | number {
  throw new Error('Function not implemented.');
}

