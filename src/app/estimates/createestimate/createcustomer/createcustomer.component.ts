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
  selectedOption = ""
  printedOption = ""
  state = ""
   count = 0;
   options=[
    { name: "Alabama", value: "Alabama" },
    { name: "Alaska", value: "Alaska" },
    { name: "Arizona", value: "Arizona" },
    { name: "Arkansas", value: "Arkansas" },
    { name: "California", value: "California" },
    { name: "Colorado", value: "Colorado" },
    { name: "Connecticut", value: "Connecticut" },
    { name: "Delaware", value: "Delaware" },
    { name: "District Of Columbia", value: "District Of Columbia" },
    { name: "Florida", value: "Florida" },
    { name: "Georgia", value: "Georgia" },
    { name: "Hawaii", value: "Hawaii" },
    { name: "Idaho", value: "Idaho" },
    { name: "Illinois", value: "Illinois" },
    { name: "Indiana", value: "Indiana" },
    { name: "Iowa", value: "Iowa" },
    { name: "Kansas", value: "Kansas" },
    { name: "Kentucky", value: "Kentucky" },
    { name: "Louisiana", value: "Louisiana" },
    { name: "Maine", value: "Maine" },
    { name: "Maryland", value: "Maryland" }

   ]
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
    this.estimateService.setCustomer({firstName : customer.firstName,lastName: customer.lasttName, address:{streetAddress: customer.address, city : customer.city, state : this.state, zipcode : customer.zipcode }, phone : customer.phone, email : customer.email,notes: customer.notes})
    this.router.navigate(['work'], {relativeTo: this.route})
  }

  onChange($event){
   this.state =  $event.target.options[$event.target.options.selectedIndex].text
   console.log("state", this.state)
  }

}
