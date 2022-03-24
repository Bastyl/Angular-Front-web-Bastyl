import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1pizzaComponent } from './step1pizza.component';

describe('Step1pizzaComponent', () => {
  let component: Step1pizzaComponent;
  let fixture: ComponentFixture<Step1pizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step1pizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1pizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
