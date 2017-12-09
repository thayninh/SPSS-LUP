import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-run-model',
  templateUrl: './run-model.component.html',
  styleUrls: ['./run-model.component.css']
})
export class RunModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color = 'primary';
  mode = 'indeterminate';
}
