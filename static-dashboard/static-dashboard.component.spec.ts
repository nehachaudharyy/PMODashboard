import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDashboardComponent } from './static-dashboard.component';

describe('StaticDashboardComponent', () => {
  let component: StaticDashboardComponent;
  let fixture: ComponentFixture<StaticDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
