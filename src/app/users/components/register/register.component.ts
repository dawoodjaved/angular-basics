import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  registerFormGroup = this.registerBuilder.group(
    {
      firstName : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),          
      ])),
      lastName : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),          
      ])),
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

  handleOnSubmit(){
    console.log(this.registerFormGroup.value);
  }

  handleReset(){
    this.registerFormGroup.reset();
  }

  
  get getFormControls(){
    return this.registerFormGroup.controls;
  }
}
