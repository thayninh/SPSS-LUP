import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from "@angular/core";

//Use declare keyword to use ol - open layer library
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild("mapElement") mapElement: ElementRef;
  
  public map: any;
  
  constructor() { 
    //Basemap
    var osm_layer: any = new ol.layer.Tile({
      source: new ol.source.OSM()
    });
    
    //Scale line
    var scaleLineControl = new ol.control.ScaleLine();
    
    //Zoom slider
    var zoomslider = new ol.control.ZoomSlider();
    
    // note that the target cannot be set here!
    this.map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: ({
          collapsible: false
        })
      }).extend([
        scaleLineControl
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
  
  ngOnInit() {  
  }

}
