import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableDataSource,MatExpansionModule,MatTableModule} from '@angular/material';
import { JobListsService } from '../jobs-list.service';
import { JobListsComponent } from './job-lists.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Component: jobLists', () => {
  let component: JobListsComponent;
  let fixture: ComponentFixture<JobListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableDataSource,MatExpansionModule,MatTableModule
      ],    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
      declarations: [ JobListsComponent ],
      providers: [JobListsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
