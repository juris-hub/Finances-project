import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInfoFormComponent } from './financial-info-form.component';

describe('FinancialInfoFormComponent', () => {
  let component: FinancialInfoFormComponent;
  let fixture: ComponentFixture<FinancialInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
