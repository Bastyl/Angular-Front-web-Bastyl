import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiescomponentComponent } from './functionalitiescomponent.component';

describe('FunctionalitiescomponentComponent', () => {
  let component: FunctionalitiescomponentComponent;
  let fixture: ComponentFixture<FunctionalitiescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalitiescomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitiescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
