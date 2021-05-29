import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  email:string = '';
  password:string = '';
  checkBoxValue : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  addItems(allFormValues:NgForm){
    console.log(allFormValues.value);
  }


  values:object = {
    email : "developmentliesinhearts@gmail.com",
    password : "12345",
    checkBoxValue: true,
  }
  resetItemsValues(allFormValues:NgForm){
    allFormValues.reset();
  }

  setItemsValues(allFormValues:NgForm){
    allFormValues.setValue(this.values);
  }

}
