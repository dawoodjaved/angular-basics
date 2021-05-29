import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-basics',
  templateUrl: './reactive-forms-basics.component.html',
  styleUrls: ['./reactive-forms-basics.component.css']
})
export class ReactiveFormsBasicsComponent implements OnInit {

  constructor(private reactiveFormBuilder : FormBuilder) { }

  ngOnInit(): void {
  }


  

  reactiveFormGroup = this.reactiveFormBuilder.group(
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

  handleOnSubmit(){
    console.log(this.reactiveFormGroup.value);
  }

  handleReset(){
    this.reactiveFormGroup.reset();
  }

  handleSetValues(){
    const itemsObject = {
      'email': 'developmeninehearts@gmail.com',
      'password' : '12345',
      'checkBox' : true,
    }

    this.reactiveFormGroup.setValue(itemsObject);
  }

  handleChangedValues(){
    this.reactiveFormGroup.valueChanges.subscribe(value => console.log(value));
  }

  get getFormControlItems(){
    return this.reactiveFormGroup.controls;
  }
}
