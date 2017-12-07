import { SubmitConfigService } from './../services/submit-config.service';
import { Component, OnInit } from '@angular/core';
import { FormGroupName,  FormControlName, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { v4 as uuid } from 'uuid';
const id: string = uuid();

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  form: FormGroup;
  groupControls: object;
  

  constructor(
    private formBuider: FormBuilder, 
    private submitConfig: SubmitConfigService
  ) { 
    this.groupControls = {
      text_config: '',
      text_submit: new FormControl({value: id, disabled:true})
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

//onFileChange
file_array = [];
onFileChange(fileInput: Event){
  let file = fileInput.target.files[0];
  this.file_array.push(file);
}

//When user click submit button
  onSubmit(){

    //console.log(this.file_array);
    const params = this.form.value;
    params['text_submit'] = this.form.get('text_submit').value;
    
    //Submit all parameters
    this.submitConfig.submitConfigParams(params).subscribe(data => {
      console.log(data);
    });
    
    // //Update value of data to store files uploaded
    // for(let i=0; i < Number(this.form.get('text_config').value); i++){
    //   params["data_".concat(i.toString())] = this.file_array[i];
    // }

    
  }
}
