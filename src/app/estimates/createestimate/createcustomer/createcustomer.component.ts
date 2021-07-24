import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }
   count = 0;
  ngOnInit(): void {
  }

  continue(customer){
    console.log(customer)
    if(customer.save == true){
      console.log("Entering true block")
      this.estimateService.saveCustomer({firstName : customer.firstName,lastName: customer.lasttName, address:{streetAddress: customer.address, city : customer.city, state : customer.state, zipcode : customer.zipcode }, phone : customer.phone, email : customer.email,notes: customer.notes}).subscribe(data => {Swal.fire({
        title: 'Success',
        text: 'Customer Saved!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })})
     
    }
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.router.navigate(['work'], {relativeTo: this.route})
  }

}
