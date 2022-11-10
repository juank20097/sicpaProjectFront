import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentlistComponent } from './departmentlist.component';

describe('DepartmentlistComponent', () => {
  let component: DepartmentlistComponent;
  let fixture: ComponentFixture<DepartmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
