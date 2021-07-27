import { Component, OnInit } from '@angular/core';
import { EstimatesService } from 'src/app/estimates/services/estimates.service';

@Component({
  selector: 'app-estimatorhome',
  templateUrl: './estimatorhome.component.html',
  styleUrls: ['./estimatorhome.component.css']
})
export class EstimatorhomeComponent implements OnInit {

  constructor(private estimateService : EstimatesService) { }
  customers = []
  ngOnInit(): void {
    this.estimateService.getCustomers().subscribe(data => {this.customers = data; console.log(this.customers)})
  }

}
