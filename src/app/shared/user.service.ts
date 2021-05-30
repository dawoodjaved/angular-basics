import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  isLogedInOrNot:boolean = false;

  login(userName:string,password:string):boolean{
    this.isLogedInOrNot = userName==="Dawood Javeed" && password === "12345";
    
    localStorage.setItem('checkUser',this.isLogedInOrNot? 'true' : 'false');

    return this.isLogedInOrNot;
  }

  logout(){
    this.isLogedInOrNot = false;
    localStorage.removeItem('checkUser');
  }

}
