import { GetUuidService } from './../services/get-uuid.service';
import { element } from 'protractor';
import { SubmitConfigService } from './../services/submit-config.service';
import { Component, OnInit } from '@angular/core';
import { FormGroupName,  FormControlName, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';

import { v4 as uuid } from 'uuid';
const id: string = uuid();

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

    constructor(
    private formBuider?: FormBuilder,
    private submitConfig?: SubmitConfigService,
    private getuuid?: GetUuidService,
    public dialogRef?: MatDialogRef<ConfigurationComponent>,
    public dialog?: MatDialog
  ) {  }

  ngOnInit() {
  }

  groupControls: object = {
    text_config: '',
    text_submit: new FormControl({value: id, disabled:true})
  };
  form: FormGroup = this.formBuider.group(this.groupControls);

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
file_array =  new Array();
onFileChange(fileInput: Event){
  let name = fileInput.target.name;
  let file = fileInput.target.files[0];
  this.file_array[(Number(name.split('_')[1]))] = file;
}

//When user click submit button
  onSubmit(){
    //Set uuid for variable param_text_submit for using in step 2
    this.getuuid.uuid_text_submit = this.form.get('text_submit').value;

    //Open progress spinner
    let dialogRef_spinner = this.dialog.open(ProgressSpinnerComponent, {
      // width: '50%',
      // height: '50%'
    });

    //Create configuration object for submitting config data
    const params = this.form.value;
    params['text_submit'] = this.form.get('text_submit').value;
    for(let i = 0; i < Number(this.form.get('text_config').value); i++){
      params['data_'.concat(i.toString())] = this.file_array[i].name;
    };

    //Create form data
    const formData: FormData = new FormData();
    for(let i=0; i < Number(this.form.get('text_config').value); i++){
      formData.append("data_".concat(i.toString()), this.file_array[i], this.file_array[i].name);
    };

    //Submit config parameters
    this.submitConfig.submitConfigParams(params).subscribe(data => {
      console.log(data);
      //submit shapefile files
      this.submitConfig.submitUploadedFiles(formData).subscribe(data => {
        console.log("OK stage 2: upload files");
        //Close progress spinner
        dialogRef_spinner.close();
        //Close the pop-up configuration component
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(result => {
          window.alert("Successfully uploaded configuration");
        });
      });
    });


  }
}
