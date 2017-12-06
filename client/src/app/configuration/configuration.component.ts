import { Component, OnInit } from '@angular/core';
import { FormGroupName,  FormControlName, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
const uuidv1 = require('uuid/v1');

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  form: FormGroup;
  groupControls: object;
  

  constructor(private formBuider: FormBuilder) { 
    this.groupControls = {
      text_config: '',
      text_submit: new FormControl({value: uuidv1(), disabled:true})
    };
    this.form = this.formBuider.group(this.groupControls)
  }
  
  ngOnInit() {
  }
  
//When user click the config, this function will be triggered and create an array with size as 
//input from user for looping, and create an UUID
  arr: number[];
  onConfig(){
    this.arr = this.assign_arr_size(this.form.get('text_config').value);
    this.addControls(this.arr.length);
  }
  assign_arr_size(value:number){
    let arr = new Array;
    for(let a = 0; a < value; a++){
      arr.push(a);
     }
    return arr;
  }
  
  addControls(ii:number){
    for(let i=0; i < ii; i++){
      this.form.addControl("factor_".concat(i.toString()),new FormControl());
      this.form.addControl("data_".concat(i.toString()),new FormControl());
      this.form.addControl("weight_".concat(i.toString()),new FormControl());
      this.form.addControl("FType_".concat(i.toString()),new FormControl());
      this.form.addControl("Fa_".concat(i.toString()),new FormControl());
      this.form.addControl("Fb_".concat(i.toString()),new FormControl());
      this.form.addControl("Fc_".concat(i.toString()),new FormControl());
      this.form.addControl("Fd_".concat(i.toString()),new FormControl());
    }
  }
  
//When user click submit button
  onSubmit(){
    console.log(this.arr);
  }
  

  
  
  



}
