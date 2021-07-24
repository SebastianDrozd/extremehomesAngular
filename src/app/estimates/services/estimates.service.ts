import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstimatesService {

  count = 0;

  constructor(private http: HttpClient) {
   }

   saveCustomer(customer){
     return this.http.post("https://localhost:5001/api/Customers",customer);
   }

   getCount(){
     console.log("Get count :" ,this.count)
    return this.count
   }

   setCount(word){
     console.log("SetCount :", word)
      this.count = word;
   }
}
