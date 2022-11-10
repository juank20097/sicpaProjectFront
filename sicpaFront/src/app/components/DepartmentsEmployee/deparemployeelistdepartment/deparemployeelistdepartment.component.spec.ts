import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparemployeelistdepartmentComponent } from './deparemployeelistdepartment.component';

describe('DeparemployeelistdepartmentComponent', () => {
  let component: DeparemployeelistdepartmentComponent;
  let fixture: ComponentFixture<DeparemployeelistdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeelistdepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeelistdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
