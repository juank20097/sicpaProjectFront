import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparemployeeeditComponent } from './deparemployeeedit.component';

describe('DeparemployeeeditComponent', () => {
  let component: DeparemployeeeditComponent;
  let fixture: ComponentFixture<DeparemployeeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparemployeeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparemployeeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
