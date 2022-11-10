import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparemployeelistemployeeComponent } from './deparemployeelistemployee.component';

describe('DeparemployeelistemployeeComponent', () => {
  let component: DeparemployeelistemployeeComponent;
  let fixture: ComponentFixture<DeparemployeelistemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeelistemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeelistemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
