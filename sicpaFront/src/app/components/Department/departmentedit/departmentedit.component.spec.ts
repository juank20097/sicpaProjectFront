import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DepartmenteditComponent } from './departmentedit.component';

describe('DepartmenteditComponent', () => {
  let component: DepartmenteditComponent;
  let fixture: ComponentFixture<DepartmenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmenteditComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DepartmenteditComponent', () => {
    expect(component).toBeTruthy();
  });
});
