export class Year {
  year: string;
  url: string;
  states_url: string;
  federal_wage_info_url: string;
  constructor(yearDetail:any) {
    this.year = yearDetail.year;
    this.url = yearDetail.url;
    this.states_url = yearDetail.states_url;
    this.federal_wage_info_url = yearDetail.federal_wage_info_url;
  }
}