import { WageBreakdown } from './wageBreakdown.model';

export class FairpayResponse {
    is_error: boolean;
    error: {};
    fairpay: boolean;
    wage_breakdown: WageBreakdown;

    constructor(response:any) {
        this.is_error = response.is_error;
        this.error = response.error;
        this.fairpay = response.fairpay;
        this.wage_breakdown = response.wage_breakdown;
      }
}