import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleForm } from './sample-form';

describe('SampleForm', () => {
  let component: SampleForm;
  let fixture: ComponentFixture<SampleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
