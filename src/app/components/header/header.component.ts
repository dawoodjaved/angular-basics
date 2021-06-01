import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,OnInit {

  @Input() clr:string = 'green';  
  authToken:boolean = false;
  constructor(private userservice: UserService,private router: Router) { 
    this.router.events.subscribe((value) => {
      this.authToken = this.userservice.isLogedInOrNot;
    });
  }

  
  
  ngOnInit(): void {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  logout(){

    this.userservice.logout();
  }

}
