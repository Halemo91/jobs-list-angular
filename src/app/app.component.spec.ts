import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatExpansionModule,
  MatTableModule,
  MatTableDataSource
} from '@angular/material';
import { AppComponent } from './app.component';
import { JobListsComponent } from './job-lists/job-lists.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JobListsService } from './jobs-list.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatExpansionModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AppComponent, JobListsComponent],
      providers: [JobListsService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
