import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommunityComponent } from './manage-community.component';

describe('ManageCommunityComponent', () => {
  let component: ManageCommunityComponent;
  let fixture: ComponentFixture<ManageCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
