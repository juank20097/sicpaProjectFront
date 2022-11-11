import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DeparemployeelistemployeeComponent } from './deparemployeelistemployee.component';

describe('DeparemployeelistemployeeComponent', () => {
  let component: DeparemployeelistemployeeComponent;
  let fixture: ComponentFixture<DeparemployeelistemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeelistemployeeComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeelistemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DeparemployeelistemployeeComponent', () => {
    expect(component).toBeTruthy();
  });
});
