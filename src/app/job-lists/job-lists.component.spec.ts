import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule, MatTableModule } from '@angular/material';
import { JobListsService } from '../jobs-list.service';
import { JobListsComponent } from './job-lists.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: jobLists', () => {
  let component: JobListsComponent;
  let fixture: ComponentFixture<JobListsComponent>;
let JobService: JobListsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatExpansionModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [JobListsComponent],
      providers: [JobListsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListsComponent);
    component = fixture.componentInstance;
    JobService = TestBed.get(JobListsService);
    spyOn(JobService, 'getJobsList').and.callThrough();;
    //TODO mock class that replaces the original
    fixture.detectChanges();
  });

  it('should create app list Component', () => {
    expect(component).toBeTruthy();
  });

  it('should call Service function', () => {
    component.ngOnInit();
    expect(JobService.getJobsList).toHaveBeenCalled();
  });
 //TODO continue these test cases!
 //  it('should render data', () => {
 //    component.ngOnInit();
 //    expect(component.ELEMENT_DATA.length).not.toBe(0);
 //    //TODO create moke data
 //    expect(component.ELEMENT_DATA.length).toBe(mockData);
 //
 // });
 //  //
 //  it('Should click Row', () => {
 //    fixture.detectChanges();
 //    spyOn(component,'itemDetails');
 //    el = fixture.debugElement.query(By.css('tr')).nativeElement;
 //    el.click();
 //    expect(component.itemDetails).toHaveBeenCalled();
 //  });
  //
  // it('should show data in second panel', () => {
  // });
});
