import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EmployeeeditComponent } from './employeeedit.component';

describe('EmployeeeditComponent', () => {
  let component: EmployeeeditComponent;
  let fixture: ComponentFixture<EmployeeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeeditComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EmployeeeditComponent', () => {
    expect(component).toBeTruthy();
  });
});
