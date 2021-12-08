import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  constructor(private http:HttpClient) { }
    loginUser(data:any){
      let params = new HttpParams();
      console.log("login service")
      // Begin assigning parameters
      params = params.append('email', data.email);
      params = params.append('password', data.password)
      return  this.http.get(environment.baseurl+'/user/login',{params:data})
  }
  public get loggedIn():boolean{
    return (localStorage.getItem('currentUser')!==null);
  }
}
