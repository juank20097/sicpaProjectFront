import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EnterpriseService } from './enterprise.service';

describe('EnterpriseService Test', () => {
  let service: EnterpriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(EnterpriseService);
  });

  it('should be created EnterpriseService', () => {
    expect(service).toBeTruthy();
  });

});
