import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DepartmentaddComponent } from './departmentadd.component';

describe('DepartmentaddComponent', () => {
  let component: DepartmentaddComponent;
  let fixture: ComponentFixture<DepartmentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentaddComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DepartmentaddComponent', () => {
    expect(component).toBeTruthy();
  });
});
