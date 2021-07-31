import { Component, OnInit } from '@angular/core';
import { EstimatesService } from '../../services/estimates.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private estimateService : EstimatesService) { }
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


}
