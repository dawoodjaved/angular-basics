import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree{
      return this.checkUserAuth();
  }
  
  checkUserAuth():boolean| UrlTree{
    let value = localStorage.getItem('checkUser');

    if(value != null && value == "true"){
        return true;
    }
    else{
        return this.router.parseUrl('/users/login');
    }
    
    return false;
  }
  
}
