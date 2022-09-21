import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsaveService {

  private baseUrl: string = "http://localhost:8080/formsave"

  constructor( private http:HttpClient ) { }
 
  formsave(data:any){
    return this.http.post(`${this.baseUrl}`,data)
  }

}
