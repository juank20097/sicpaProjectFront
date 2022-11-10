import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseeditComponent } from './enterpriseedit.component';

describe('EnterpriseeditComponent', () => {
  let component: EnterpriseeditComponent;
  let fixture: ComponentFixture<EnterpriseeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
