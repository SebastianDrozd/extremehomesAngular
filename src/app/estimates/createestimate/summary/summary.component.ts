import { Component, OnInit } from '@angular/core';
import { EstimatesService } from '../../services/estimates.service';
import Swal from 'sweetalert2'
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ]),
    trigger('fade2', [
      transition('void => *', [
        style({opacity: 1}),
        animate(7000)
      ])
    ])
  ]
})
export class SummaryComponent implements OnInit {

  constructor(private estimateService : EstimatesService, private router: Router,private route: ActivatedRoute) { }
  wantEditWork = false;
  wantEditTasks = false;
  wantEditMaterials = false;
  wantEditPictures = false
  wantEditCustomer = false;
  custEdited = false;
  workEdited = false;
  customer;
  work;
  pictures=[]
  url;
  path = ""
  materialss;
  responseUrl = ""
  hasPictures = false;
  hasMaterials = false;
  ngOnInit(): void {
   this.customer= JSON.parse(localStorage.getItem("customer"))
   this.estimateService.setCustomer(this.customer)
   console.log(this.customer)
   console.log("reader exectuing...")
   //this.url = this.estimateService.getPictures()
   this.work = JSON.parse(localStorage.getItem("work"))
   this.estimateService.setWork(this.work)
   console.log("work",this.work)
   this.pictures =  JSON.parse(localStorage.getItem("pictures"))
   this.estimateService.setPictures(this.pictures)
   console.log("Summary service",this.pictures)
   this.materialss = JSON.parse(localStorage.getItem("materials"))
   this.estimateService.setMaterials(this.materialss)
   console.log("summary Service materials",this.materialss)
   console.log(localStorage)
   if(this.pictures.length > 0){
     this.hasPictures = true;
   }
   if(this.materialss.materials.length > 0){
    this.hasMaterials = true;
  }

  
  }

  saveEstimate(){
    this.estimateService.saveEstimate().subscribe(data => {Swal.fire({
      title: 'Success',
      text: 'Estimate Saved!',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    //@ts-ignore
    this.responseUrl= data.id
    console.log("id",this.responseUrl)
  })
  }

  saveEditWork(){
    this.estimateService.setWork(this.customer);
    this.wantEditWork = !this.wantEditWork
    this.workEdited = true;
    this.estimateService.setWork(this.work)
    localStorage.setItem("work",JSON.stringify(this.work))
  }
  saveEditCustomer(){
    this.estimateService.setCustomer(this.customer);
    localStorage.setItem("customer",JSON.stringify(this.customer))
    console.log(this.customer)
    this.wantEditCustomer = !this.wantEditCustomer
    this.custEdited = true;
  }

  wantsEditCustomer(){
    this.wantEditCustomer = !this.wantEditCustomer
  }
  wantsEditWork(){
    this.wantEditWork = !this.wantEditWork
  }

  handleFirstName(event){
    this.customer.firstName = event.target.value;
    console.log("FirstName = ", this.customer.firstName)
  }

  handleLastName(event){
    this.customer.lastName = event.target.value;
    console.log("LastName = ", this.customer.lastname)
  }
  handleStreetAddress(event){
    this.customer.address.streetAddress = event.target.value;
    console.log("FirstName = ", this.customer.address.streetAddress)
  }
  handleCity(event){
    this.customer.address.city = event.target.value;
    console.log("FirstName = ", this.customer.address.city)
  }
  handleState(event){
    this.customer.address.state = event.target.value;
    console.log("FirstName = ", this.customer.address.state)
  }
  handlePhone(event){
    this.customer.phone = event.target.value;
    console.log("FirstName = ", this.customer.phone)
  }
  handleEmail(event){
    this.customer.email = event.target.value;
    console.log("FirstName = ", this.customer.email)
  }
  handleNotes(event){
    this.customer.notes = event.target.value;
    console.log("FirstName = ", this.customer.notes)
  }

  handleWorkType(event){
    this.work.workType = event.target.value;
    console.log("WorkType", this.work.workType)
  }
  handleCondition(event){
    this.work.condition = event.target.value;
    console.log("condition", this.work.condition)
  }
  handleDifficulty(event){
    this.work.difficulty = event.target.value;
    console.log("difficulty", this.work.difficulty)
  }
  handleHours(event){
    this.work.hours = event.target.value;
    console.log("hours", this.work.hours)
  }
  handleDescription(event){
    this.work.workDescription = event.target.value;
    console.log("workDescription", this.work.workDescription)
  }
  editTask(){
    this.router.navigate(['../work'], {relativeTo: this.route})
  }

  addTasks(){
    this.router.navigate(['../work'], {relativeTo: this.route})
  }

  editMaterial(){
    this.router.navigate(['../additional-info'], {relativeTo: this.route})
  }


}
