import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEstimate } from './IEstimate';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstimatesService {
  estimate = {}
  customer = {}
  work;
  materials;
  pictures;
  count = 0;

  constructor(private http: HttpClient) {
   }

   saveCustomer(customer){
     return this.http.post("https://localhost:5001/api/Customers",customer);
   }

   getCount(){
    
    return this.count
   }

   setCount(word){
     console.log("SetCount :", word)
      this.count = word;
   }

   getCustomers(){
     return this.http.get<any>("https://localhost:5001/api/Customers")
   }

   setCustomer(customer){
      this.customer = customer
      console.log("customer", this.customer)
   }

   getCustomer(){
     return this.customer
   }

   setWork(work){
      this.work = work;
      console.log("work", this.work)
   }

   getWork(){
     return this.work
   }

   setMaterials(material){
     this.materials = material;
     console.log("material", this.materials)
   }

   getMaterials(){
     return this.materials
   }

   setPictures(pictures){
     this.pictures = pictures

   }

   getPictures(){
     return this.pictures
   }

   saveEstimate(){
     console.log("sending this bad boy off!!", {customer : this.customer, workType : this.work.workType,difficulty: this.work.difficulty,condition: this.work.condition,hours: this.work.hours, workDescription : this.work.workDescription, tasks: this.work.tasks, materials : this.materials.materials, materialOverview: this.materials.overView, pictures : this.pictures })
     return this.http.post("https://localhost:5001/api/Estimates",{customer : this.customer, workType : this.work.workType,difficulty: this.work.difficulty,condition: this.work.condition,hours: this.work.hours, workDescription : this.work.workDescription, tasks: this.work.tasks, materials : this.materials.materials, materialOverview: this.materials.overView,images : this.pictures , dateCreated : new Date() })
   }

   getAllEstimates(){
      return this.http.get<any>("https://localhost:5001/api/Estimates")
   }

   getAllEstimatesResponse(number): Observable<HttpResponse<IEstimate>> {

    const headers= new HttpHeaders()
  .set('Access-Control-Expose-Headers','x-pagination')
  .set('Access-Control-Allow-Origin', '*');

    return this.http.get<IEstimate>(
      `https://localhost:5001/api/Estimates?PageNumber=${number}&PageSize=10`,  { observe: 'response',headers: headers });
  }

   getEstimateById(id){
     return this.http.get<any>("https://localhost:5001/api/Estimates/" + id)
   }
}
