export class WageBreakdown {
    normal_hours: number;
    normal_pay: number;
    overtime_hours: number;
    overtime_pay: number;
    total_pay: number;
    reported_gross_wages: number;
    difference: number;

    constructor(wageBreakdown:any) {
        this.normal_hours = wageBreakdown.normal_hours;
        this.normal_pay = wageBreakdown.normal_pay;
        this.overtime_hours = wageBreakdown.overtime_hours;
        this.overtime_pay = wageBreakdown.overtime_pay;
        this.total_pay = wageBreakdown.total_pay;
        this.reported_gross_wages = wageBreakdown.reported_gross_wages;
        this.difference = wageBreakdown.difference;
      }
}