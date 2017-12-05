import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
const uuidv1 = require('uuid/v1');

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  
  constructor(private formBuider: FormBuilder) { 
  }
  
  ngOnInit() {
  }

//Create form group
  form: FormGroup = this.formBuider.group({
    text_config: '',
    text_submit: new FormControl({value: uuidv1(), disabled:true})
  })
  
  
//When user click the config, this function will be triggered and create an array with size as 
//input from user for looping, and create an UUID
  arr_size: number[];
  onConfig(){
    let i:number = this.form.get('text_config').value;
    let arr = new Array;
    for(let a = 0; a < i; a++){
      arr.push(a);
     }
    this.arr_size = arr;
  }
  
//When user click submit button
  onSubmit(){
    console.log('onSubmit');
  }
  

  
  
  



}
