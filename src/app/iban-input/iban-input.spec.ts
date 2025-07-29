import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanInput } from './iban-input';

describe('IbanInput', () => {
  let component: IbanInput;
  let fixture: ComponentFixture<IbanInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbanInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbanInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
