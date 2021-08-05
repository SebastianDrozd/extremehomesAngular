import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(private http: HttpClient) { }


  setDude(){
    console.log("hih")
  }

  getArray(){
   console.log("yo")
  }
}
