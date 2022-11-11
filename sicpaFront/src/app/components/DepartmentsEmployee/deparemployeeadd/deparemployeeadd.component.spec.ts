import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DeparemployeeaddComponent } from './deparemployeeadd.component';

describe('DeparemployeeaddComponent', () => {
  let component: DeparemployeeaddComponent;
  let fixture: ComponentFixture<DeparemployeeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeeaddComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DeparemployeeaddComponent', () => {
    expect(component).toBeTruthy();
  });
});
