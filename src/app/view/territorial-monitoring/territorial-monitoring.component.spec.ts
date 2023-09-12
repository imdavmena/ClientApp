import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorialMonitoringComponent } from './territorial-monitoring.component';

describe('TerritorialMonitoringComponent', () => {
  let component: TerritorialMonitoringComponent;
  let fixture: ComponentFixture<TerritorialMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerritorialMonitoringComponent]
    });
    fixture = TestBed.createComponent(TerritorialMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
