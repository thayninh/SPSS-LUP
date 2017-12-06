import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SubmitConfigService {
  
  domain = "http://localhost:8080";

  constructor(private http:Http) { }

  submitConfigParams(params){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.domain + '/api/config', params,{headers:headers}).map(res => res.json());
  }
}
