import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DeparemployeelistdepartmentComponent } from './deparemployeelistdepartment.component';

describe('DeparemployeelistdepartmentComponent', () => {
  let component: DeparemployeelistdepartmentComponent;
  let fixture: ComponentFixture<DeparemployeelistdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeelistdepartmentComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeelistdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DeparemployeelistdepartmentComponent', () => {
    expect(component).toBeTruthy();
  });
});
