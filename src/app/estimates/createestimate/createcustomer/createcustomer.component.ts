import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';
import Swal from 'sweetalert2'
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', [
        style({ transform: 'translateY(0)' }),
        animate(100, style({transform: 'translateY(50%)'}))
      ])
    ])
  ]
})
export class CreatecustomerComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }
  customers=[]
  selectedOption = ""
  printedOption = ""
  state = ""
  focus = false;
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
   customerFiltered = []
   customer={firstName : "",
              lastName: "",
               address:{
                 streetAddress: "", 
                 city : "",
                 state : ""
               },
             phone : "", 
             email : "",
             notes: ""}
  ngOnInit(): void {
    console.log(localStorage)
    if(localStorage.length > 0){
      this.customer = JSON.parse(localStorage.getItem("customer"));
      console.log(this.customer)
      this.selectedOption = this.customer.address.state
      console.log(this.selectedOption)
    }
    
  this.estimateService.getCustomers().subscribe(data => {this.customers = data;console.log(this.customers)});
    ///////////////////////////////////////////
    window.addEventListener("scroll", function() {
      const distance = window.scrollY
      //@ts-ignore
      document.querySelector("#myForm").style.transform = `translateY(${distance *
        1}px)`
      document.querySelector(
        ".container"
        //@ts-ignore
      ).style.transform = `translateY(${distance * 0.3}px)`
      setTimeout(() => {
        document.querySelector("#myForm").classList.add("animate-me")
      }, 400)
    })







    ///////
  
  }
  filterCustomer($event){
    console.log($event.target.value)
      this.customerFiltered = this.customers
      this.customerFiltered.filter(customer => {customer.firstName !== null &&customer.firstName.includes($event.target.value)})
      console.log("filterd",this.customerFiltered)
  }

  setFocus(){

  }

  continue(customer){
    console.log(customer)
    if(customer.save == true){
      console.log("Entering true block")
      this.estimateService.saveCustomer(this.customer).subscribe(data => {Swal.fire({
        title: 'Success',
        text: 'Customer Saved!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })})
     
    }
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.estimateService.setCustomer(this.customer)
    localStorage.setItem("customer",JSON.stringify(this.customer))
    this.router.navigate(['work'], {relativeTo: this.route})
  }

  onChange($event){
   this.state =  $event.target.options[$event.target.options.selectedIndex].text
   console.log("state", this.state)
   this.customer.address.state = this.state
  }

}
function translateY(arg0: number): string | number {
  throw new Error('Function not implemented.');
}

