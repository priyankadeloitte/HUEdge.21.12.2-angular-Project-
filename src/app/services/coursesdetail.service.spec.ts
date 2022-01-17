import { TestBed } from '@angular/core/testing';

import { CoursesdetailService } from './coursesdetail.service';

describe('CoursesdetailService', () => {
  let service: CoursesdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
