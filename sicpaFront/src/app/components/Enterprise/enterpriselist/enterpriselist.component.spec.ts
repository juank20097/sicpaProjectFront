import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnterpriselistComponent } from './enterpriselist.component';

describe('EnterpriselistComponent', () => {
  let component: EnterpriselistComponent;
  let fixture: ComponentFixture<EnterpriselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriselistComponent ],
      providers: [ FormsModule],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create EnterpiseListComponent', () => {
    expect(component).toBeTruthy();
  });

});
