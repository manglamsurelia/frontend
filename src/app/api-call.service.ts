import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  get(url: string):Observable<any>{
    return this.http.get(url);
  }

  post(url: string, body: any):Observable<any>{
    return this.http.post(url,body);
  }

  put(url: string, body: any):Observable<any>{
    return this.http.put(url,JSON.stringify(body));
  }

  delete(url: string):Observable<any>{
    return this.http.delete(url);
  }

  patch(url: string, body: any):Observable<any>{
    return this.http.patch(url,JSON.stringify(body));
  }

}