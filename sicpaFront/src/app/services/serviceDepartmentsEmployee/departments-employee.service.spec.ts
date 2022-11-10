import { TestBed } from '@angular/core/testing';

import { DepartmentsEmployeeService } from './departments-employee.service';

describe('DepartmentsEmployeeService', () => {
  let service: DepartmentsEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
