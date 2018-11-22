import { Component, OnInit } from '@angular/core';
import { JobListsService } from '../jobs-list.service';
import {MatTableDataSource} from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-job-lists',
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.css']
})
export class JobListsComponent implements OnInit {
  rowDetails :any;
  dataSource: any;
  ELEMENT_DATA: Element[] =[];
  displayedColumns: string[] = ['id', 'title', 'duration', 'state'];
  expandPanel = false;
  selectedRowIndex: number = -1;

  constructor(private _jobService: JobListsService){ }

  ngOnInit(){
    // Calling service to get the job list data
     this._jobService.getJobsList()
     .subscribe(
        data => {
              if(data && data["body"] && data["body"].length >0){
                  //filtering active jobs
                  this.ELEMENT_DATA = _.filter(data["body"], (item) => {
                   return (item.state && item.state == "active") ;
                   });
                  this.dataSource =new MatTableDataSource<Element>(this.ELEMENT_DATA);
              }else{
                this.ELEMENT_DATA =[];
                console.log('No data')
              }
          }
        );
  }
  //this function for getting the data of clicked row
  itemDetails(row){
     this.rowDetails = row;
     this.expandPanel = true;
     this.selectedRowIndex = row.id;
   }
} // end of JobListsComponent class
