export class FederalWageDetail {
    year: string;
    minimum_wage: number;
    url: string;
    states_url: string;
    year_url: string;
    constructor(federalWage:any) {
        this.year = federalWage.year;
        this.minimum_wage = federalWage.minimum_wage;
        this.url = federalWage.url;
        this.states_url = federalWage.states_url;
        this.year_url = federalWage.year_url;
      }
}