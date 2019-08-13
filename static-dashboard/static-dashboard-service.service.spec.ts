import { TestBed } from '@angular/core/testing';

import { StaticDashboardServiceService } from './static-dashboard-service.service';

describe('StaticDashboardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticDashboardServiceService = TestBed.get(StaticDashboardServiceService);
    expect(service).toBeTruthy();
  });
});
