import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private router:Router) { }

  isLogedInOrNot:boolean = false;

  login(userName:string,password:string):Observable<boolean>{
    this.isLogedInOrNot = userName==="Dawood Javeed" && password === "12345";
    
    localStorage.setItem('checkUser',this.isLogedInOrNot? 'true' : 'false');

    return of(this.isLogedInOrNot).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
  }

  
  logout(){
    this.isLogedInOrNot = false;
    localStorage.removeItem('checkUser');
    return this.router.navigateByUrl('/users/login');     
  }

}
