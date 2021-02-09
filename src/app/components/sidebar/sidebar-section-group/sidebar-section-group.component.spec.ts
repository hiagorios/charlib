import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSectionGroupComponent } from './sidebar-section-group.component';

describe('SidebarSectionGroupComponent', () => {
  let component: SidebarSectionGroupComponent;
  let fixture: ComponentFixture<SidebarSectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSectionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
