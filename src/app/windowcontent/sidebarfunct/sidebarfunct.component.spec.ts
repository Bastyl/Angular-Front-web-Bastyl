import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarfunctComponent } from './sidebarfunct.component';

describe('SidebarfunctComponent', () => {
  let component: SidebarfunctComponent;
  let fixture: ComponentFixture<SidebarfunctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarfunctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarfunctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
