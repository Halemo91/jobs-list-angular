import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JobListsService{

    constructor(private http: HttpClient) {   }


    // getJobsList(): Observable<object> {
    // // get users from api
    // return this.http.get('../assets/data/jobs.json')
    // //     .map((response: Response) => {
    // //         console.log("mock data" + response.json());
    // //         return response.json();
    // //     }
    // // )
    // // .catch(err => {return "no data";});
    //  }
    //get data from json file
    getJobsList(){
     return this.http.get('../assets/data/jobs.json')
    .catch(err => {return "no data";});
}
}
