/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FairpayService } from './fairpay.service';

describe('Service: Fairpay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FairpayService]
    });
  });

  it('should ...', inject([FairpayService], (service: FairpayService) => {
    expect(service).toBeTruthy();
  }));
});
