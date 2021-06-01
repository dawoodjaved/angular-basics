import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../shared/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private loginBuilder : FormBuilder,
    private router: Router, 
    private userservice: UserService) { }

  ngOnInit(): void {
  }

  loginFormGroup = this.loginBuilder.group(
    {
      email : new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),          
      ])),
      password : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),        
    ])),
      checkBox: new FormControl(false,Validators.compose([
        Validators.required,        
    ])),
      
    }
  );

  
  handleOnSubmit(obj:any){
    let emailValue:string = obj.email.value;
    let passwordValue:string = obj.password.value;
    
    this.userservice.login(emailValue,passwordValue).subscribe( data => { 
      console.log("Is Login Success: " + data); 

      if(data) this.router.navigate(['/add-items']); 
      
    });
      
  }

  handleReset(){
    this.loginFormGroup.reset();
  }

  handleSetValues(){
    const itemsObject = {
      'email': 'developmeninehearts@gmail.com',
      'password' : '12345',
      'checkBox' : true,
    }

    this.loginFormGroup.setValue(itemsObject);
  }

  handleChangedValues(){
    this.loginFormGroup.valueChanges.subscribe(value => console.log(value));
  }

  get getFormControls(){
    return this.loginFormGroup.controls;
  }
}
