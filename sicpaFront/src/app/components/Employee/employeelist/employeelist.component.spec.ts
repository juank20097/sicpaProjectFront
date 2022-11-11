import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EmployeelistComponent } from './employeelist.component';

describe('EmployeelistComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EmployeelistComponent', () => {
    expect(component).toBeTruthy();
  });
});
