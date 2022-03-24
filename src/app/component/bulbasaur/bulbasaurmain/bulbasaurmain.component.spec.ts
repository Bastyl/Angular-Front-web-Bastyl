import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbasaurmainComponent } from './bulbasaurmain.component';

describe('BulbasaurmainComponent', () => {
  let component: BulbasaurmainComponent;
  let fixture: ComponentFixture<BulbasaurmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulbasaurmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbasaurmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
