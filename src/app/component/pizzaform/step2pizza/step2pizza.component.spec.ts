import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2pizzaComponent } from './step2pizza.component';

describe('Step2pizzaComponent', () => {
  let component: Step2pizzaComponent;
  let fixture: ComponentFixture<Step2pizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step2pizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2pizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
