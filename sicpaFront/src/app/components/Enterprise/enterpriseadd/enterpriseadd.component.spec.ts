import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseaddComponent } from './enterpriseadd.component';

describe('EnterpriseaddComponent', () => {
  let component: EnterpriseaddComponent;
  let fixture: ComponentFixture<EnterpriseaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
