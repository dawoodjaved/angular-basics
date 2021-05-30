import { Component, OnInit,Input } from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() clr:string = 'green';
  @Input() text:string = 'submit';
  constructor(private userservice: UserService) { }

  authToken:boolean = false;
 
  
  ngOnInit(): void {    
    this.authToken = localStorage.getItem('checkUser') === 'true' ? true : false;
    console.log('we get this as ',this.authToken);
  }

  logout(){
    this.userservice.logout();
  }

}
