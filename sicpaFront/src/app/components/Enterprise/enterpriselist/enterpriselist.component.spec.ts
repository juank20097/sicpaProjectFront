import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriselistComponent } from './enterpriselist.component';

describe('EnterpriselistComponent', () => {
  let component: EnterpriselistComponent;
  let fixture: ComponentFixture<EnterpriselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
