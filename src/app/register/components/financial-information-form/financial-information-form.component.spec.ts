import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInformationFormComponent } from './financial-information-form.component';

describe('FinancialInformationFormComponent', () => {
  let component: FinancialInformationFormComponent;
  let fixture: ComponentFixture<FinancialInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
