import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DepartmentsEmployeeService } from './departments-employee.service';

describe('DepartmentsEmployeeService', () => {
  let service: DepartmentsEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(DepartmentsEmployeeService);
  });

  it('should be created DepartmentsEmployeeService', () => {
    expect(service).toBeTruthy();
  });
});
