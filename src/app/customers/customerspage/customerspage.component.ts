import { Component, OnInit } from '@angular/core';
import { EstimatesService } from 'src/app/estimates/services/estimates.service';

@Component({
  selector: 'app-customerspage',
  templateUrl: './customerspage.component.html',
  styleUrls: ['./customerspage.component.css']
})
export class CustomerspageComponent implements OnInit {
  customers = []
  constructor(private estimateService : EstimatesService) { }

  ngOnInit(): void {
    this.estimateService.getCustomers().subscribe(data => this.customers = data)
  }

}
