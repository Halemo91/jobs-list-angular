import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableDataSource,MatExpansionModule} from '@angular/material';
import { JobListsService } from '../jobs-list.service';
import { JobListsComponent } from './job-lists.component';

describe('JobListsComponent', () => {
  let component: JobListsComponent;
  let fixture: ComponentFixture<JobListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatExpansionModule
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
