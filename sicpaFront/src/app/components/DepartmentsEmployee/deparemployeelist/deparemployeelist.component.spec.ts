import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparemployeelistComponent } from './deparemployeelist.component';

describe('DeparemployeelistComponent', () => {
  let component: DeparemployeelistComponent;
  let fixture: ComponentFixture<DeparemployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
