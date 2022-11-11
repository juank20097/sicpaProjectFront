import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EmployeeaddComponent } from './employeeadd.component';

describe('EmployeeaddComponent', () => {
  let component: EmployeeaddComponent;
  let fixture: ComponentFixture<EmployeeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeaddComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EmployeeaddComponent', () => {
    expect(component).toBeTruthy();
  });
});
