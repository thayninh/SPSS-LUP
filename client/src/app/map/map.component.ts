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
    var osm_layer: any = new ol.layer.Tile({
      source: new ol.source.OSM()
    });
    
    // note that the target cannot be set here!
    this.map = new ol.Map({
      layers: [osm_layer],
      view: new ol.View({
      center: ol.proj.transform([0,0], 'EPSG:4326', 'EPSG:3857'),
      zoom: 2
      })
  });
  }
  
  // After view init the map target can be set!
  ngAfterViewInit() {
    this.map.setTarget(this.mapElement.nativeElement.id);
  }
  
  ngOnInit() {  
  }

}
