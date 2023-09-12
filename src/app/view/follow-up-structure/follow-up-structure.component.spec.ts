import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpStructureComponent } from './follow-up-structure.component';

describe('FollowUpStructureComponent', () => {
  let component: FollowUpStructureComponent;
  let fixture: ComponentFixture<FollowUpStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowUpStructureComponent]
    });
    fixture = TestBed.createComponent(FollowUpStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
