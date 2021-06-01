import { Component, OnInit } from '@angular/core';
import {UserService} from './shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title:string = 'angular-basics';

  constructor(private userservice:UserService,private router:Router) {}

  ngOnInit(): void {    
    this.userservice.logout();
      this.router.navigate(['']);
  }
  
}
