import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenteditComponent } from './departmentedit.component';

describe('DepartmenteditComponent', () => {
  let component: DepartmenteditComponent;
  let fixture: ComponentFixture<DepartmenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
