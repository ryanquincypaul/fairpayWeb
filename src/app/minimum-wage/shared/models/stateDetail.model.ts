export class StateDetail {
    year: string;
    state: string;
    postalcode: string;
    minimum_wage: number;
    url: string;
    year_url: string;
    federal_wage_info_url: string;
    constructor(state:any) {
        this.year = state.year;
        this.state = state.state;
        this.postalcode = state.postalcode;
        this.minimum_wage = state.minimum_wage;
        this.url = state.url;
        this.year_url = state.year_url;
        this.federal_wage_info_url = state.federal_wage_info_url;
      }
}