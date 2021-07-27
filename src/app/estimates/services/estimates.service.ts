import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstimatesService {
  estimate = {}
  customer = {}
  work = {}
  materials = {}
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

   setPictures(pictures){
     this.pictures = pictures

   }

   getPictures(){
     return this.pictures
   }

   saveEstimate(){
     console.log("about to save customer", this.customer)
     return this.http.post("https://localhost:5001/api/Estimates",{customer : this.customer, workType : "gay", workDescription : "homo"})
   }
}
