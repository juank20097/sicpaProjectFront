import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EnterpriseeditComponent } from './enterpriseedit.component';

describe('EnterpriseeditComponent', () => {
  let component: EnterpriseeditComponent;
  let fixture: ComponentFixture<EnterpriseeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseeditComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EnterpriseeditComponent', () => {
    expect(component).toBeTruthy();
  });
});
