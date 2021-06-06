import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  email:string = '';
  password:string = '';
  checkBoxValue : boolean = false;


  constructor(private addItemsBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  addItemsGroup = this.addItemsBuilder.group(
    {
      itemName : new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),          
      ])),
      itemType : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),        
    ])),
    itemCompany : new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),        
  ])),
  itemPrice : new FormControl(Validators.compose([
    Validators.required,            
])),
      
    }
);

handleOnSubmit(){
  console.log(this.addItemsGroup.value);
}

handleReset(){
  this.addItemsGroup.reset();
}

handleChangedValues(){
  this.addItemsGroup.valueChanges.subscribe(value => console.log(value));
}

get getFormControls(){
  return this.addItemsGroup.controls;
}
}