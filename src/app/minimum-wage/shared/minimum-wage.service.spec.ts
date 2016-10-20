/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MinimumWageService } from './minimum-wage.service';

describe('Service: MinimumWage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinimumWageService]
    });
  });

  it('should ...', inject([MinimumWageService], (service: MinimumWageService) => {
    expect(service).toBeTruthy();
  }));
});
