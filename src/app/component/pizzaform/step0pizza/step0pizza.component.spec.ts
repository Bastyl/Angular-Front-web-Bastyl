import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step0pizzaComponent } from './step0pizza.component';

describe('Step0pizzaComponent', () => {
  let component: Step0pizzaComponent;
  let fixture: ComponentFixture<Step0pizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step0pizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step0pizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
