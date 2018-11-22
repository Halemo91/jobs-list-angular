import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JobListsService{
    constructor(private http: HttpClient) {   }
    //get data from json file
    getJobsList(){
      //tried to add header with content type utf-8 to get rid of strange char in the json data element!
    return this.http.get('../assets/data/jobs.json',{headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8' ) })
    .catch(err => {return "no data";});
   }
}
