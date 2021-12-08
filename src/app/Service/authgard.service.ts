import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthgardService {

  constructor(private router:Router) { }
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(localStorage.getItem('currentUser')){
      return true;
    }

    this.router.navigate(['signin']);
    return false;

  }
}
