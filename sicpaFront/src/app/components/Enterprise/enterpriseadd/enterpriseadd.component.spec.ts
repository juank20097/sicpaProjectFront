import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EnterpriseaddComponent } from './enterpriseadd.component';

describe('EnterpriseaddComponent', () => {
  let component: EnterpriseaddComponent;
  let fixture: ComponentFixture<EnterpriseaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseaddComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EnterpriseaddComponent', () => {
    expect(component).toBeTruthy();
  });
});
