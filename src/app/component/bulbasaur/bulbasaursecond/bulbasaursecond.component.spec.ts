import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbasaursecondComponent } from './bulbasaursecond.component';

describe('BulbasaursecondComponent', () => {
  let component: BulbasaursecondComponent;
  let fixture: ComponentFixture<BulbasaursecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulbasaursecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbasaursecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
