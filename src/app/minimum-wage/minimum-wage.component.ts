import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Year, State, StateDetail, FederalWageDetail, MinimumWageService } from './shared';
import { LanguageSettingsMinimumWage} from '../shared';

@Component({
  selector: 'app-minimum-wage',
  templateUrl: './minimum-wage.component.html',
  styleUrls: ['minimum-wage.component.css'],
  providers: [MinimumWageService]
})


export class MinimumWageComponent implements OnInit {
  selectedYear: Year;
  years = [];
  selectedState: State;
  states = [];
  selectedStateDetail: StateDetail;

  federalWageDetail: FederalWageDetail;
  minimumWage: number;
  @Input() languageSettings: LanguageSettingsMinimumWage;
  @Output() minimumWageChanged = new EventEmitter<number>();

  constructor(private minimumWageService: MinimumWageService) { 
    this.minimumWageService.get("/years").subscribe(
      data => this.years = data.years,
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

  onYearChange(year) {
    if (year) {
      this.minimumWageService.get(year.federal_wage_info_url).subscribe(
        data => this.getFederalWageCallback(data),
        error => console.log(error)
      );
      this.minimumWageService.get(year.states_url).subscribe(
        data => this.states = data.states,
        error => console.log(error)
      );
    }
  }

  getFederalWageCallback(federalWageDetailResponse) {
    this.federalWageDetail = federalWageDetailResponse;
    this.determineLargestMinimumWage();
  }

  onStateChange(state) {
    if (state) {
      this.minimumWageService.get(state.url).subscribe(
        data => this.getStateDetailCallback(data),
        error => console.log(error)
      );
    }
  }

  getStateDetailCallback(stateDetailResponse) {
    this.selectedStateDetail = stateDetailResponse;
    this.determineLargestMinimumWage();
  }

  determineLargestMinimumWage() {
    //return 0 if nothing exists
    this.minimumWage = Math.max(this.getStateMinimumWage(), this.getFederalMinimumWage());
    this.minimumWageChanged.emit(this.minimumWage);
  }

  getStateMinimumWage() {
    if (this.selectedStateDetail && this.selectedStateDetail.minimum_wage) {
      return this.selectedStateDetail.minimum_wage;
    }

    return 0.0
  }

  getFederalMinimumWage() {
    if (this.federalWageDetail && this.federalWageDetail.minimum_wage) {
      return this.federalWageDetail.minimum_wage;
    }

    return 0.0
  }

  isEmptyObject(obj) {
    return (Object.keys(obj).length === 0);
  }
}
