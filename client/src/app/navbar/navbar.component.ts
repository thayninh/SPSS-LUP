import { MatDialog } from '@angular/material';
import { ConfigurationComponent } from './../configuration/configuration.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from "@angular/core";

//Use declare keyword to use ol - open layer library
declare var ol: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("mapElement") mapElement: ElementRef;
  public map: any;

  constructor(public dialog:MatDialog) { 
        //Basemap
        var osm_layer: any = new ol.layer.Tile({
          source: new ol.source.OSM()
        });
        
        //Scale line
        var scaleLineControl = new ol.control.ScaleLine();
        
        //Zoom slider
        var zoomslider = new ol.control.ZoomSlider();
    
        //Overview map
        var overviewMap = new ol.control.OverviewMap({
          className: 'ol-overviewmap ol-custom-overviewmap',
          collapseLabel: '\u00BB',
          label: '\u00AB',
          collapsed: true
        });
        
        // note that the target cannot be set here!
        this.map = new ol.Map({
          controls: ol.control.defaults({
            attributionOptions: ({
              collapsible: false
            })
          }).extend([
            scaleLineControl,
            overviewMap
          ]),
          layers: [osm_layer],
          view: new ol.View({
            center: ol.proj.transform([108.14006321133, 16.027406863868], 'EPSG:4326', 'EPSG:3857'),
            zoom: 5.5
          })
      });
      this.map.addControl(zoomslider);
  }
  
  // After view init, the map target can be set!
  ngAfterViewInit() {
    this.map.setTarget(this.mapElement.nativeElement.id);
  }

//Function for openning popup that contain other components
  openConfigComponent(){
    let dialogRef = this.dialog.open(ConfigurationComponent, {
      width: '100%',
      height: '95%'
    });
  }

  openRunComponent(){
    console.log("it is ok");
  }

  openShowComponent(){
    console.log("it is ok");
  }

  openDownloadComponent(){
    console.log("it is ok");
  }

  ngOnInit() {
  }
  
}
