import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }
  clientDetails():Observable<any>{
   return this.http.get("http://192.168.1.254:3000/api/client/status");
  }
}
