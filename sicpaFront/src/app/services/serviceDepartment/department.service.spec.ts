import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './department.service';

describe('DepartmentService', () => {
  let service: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(DepartmentService);
  });

  it('should be created DepartmentService', () => {
    expect(service).toBeTruthy();
  });
});
