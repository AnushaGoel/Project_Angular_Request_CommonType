import { Injectable } from '@angular/core';
import {Form} from '@angular/forms';
import { RequestComponent } from './request/request.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private _http: HttpClient) { }
  request :Request [] = [];
  baseUrl="https://localhost:7044/api/Requests";
  //GetComments
      GetRequests() 
            {
        return this._http.get<Request[]>(this.baseUrl);
  
    }

}
