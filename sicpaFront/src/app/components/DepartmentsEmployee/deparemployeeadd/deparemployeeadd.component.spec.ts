import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparemployeeaddComponent } from './deparemployeeadd.component';

describe('DeparemployeeaddComponent', () => {
  let component: DeparemployeeaddComponent;
  let fixture: ComponentFixture<DeparemployeeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeeaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
