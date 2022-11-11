import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DepartmentlistComponent } from './departmentlist.component';

describe('DepartmentlistComponent', () => {
  let component: DepartmentlistComponent;
  let fixture: ComponentFixture<DepartmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentlistComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DepartmentlistComponent', () => {
    expect(component).toBeTruthy();
  });
});
