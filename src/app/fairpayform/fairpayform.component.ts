import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FairpayResponse, WageBreakdown, FairpayRequest, FairpayService } from './shared';
import { LanguageSettingsFairpayForm } from '../shared';

@Component({
  selector: 'app-fairpayform',
  templateUrl: './fairpayform.component.html',
  styleUrls: ['fairpayform.component.css'],
  providers: [FairpayService]
})
export class FairpayformComponent implements OnInit {
  @Input() languageSettings: LanguageSettingsFairpayForm;
  @Input() minimumWageForCalculation: number;
  @Output() fairpayResponseReceived = new EventEmitter<FairpayResponse>();

  request = new FairpayRequest();

  constructor(private fairpayService: FairpayService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    //there has to be a better way to handle minwage as an input parameter and still use a request object
    this.onMinimumWageChange();

    this.fairpayService.get(this.constructPath()).subscribe(
      data => this.fairpayCallBack(data),
      error => console.log(error)
    )
  }

  constructPath(): string {
    var path: string = '/';
    if (this.request.timeSpan==='weekly') {
      path += `calculate-weekly-pay`;
    }
    path += `?minimum_wage=${this.request.minimumWage}&hours_worked=${this.request.hoursWorked}&gross_wages=${this.request.grossWages}`;
    return path;
  }

  fairpayCallBack(fairpayResponse: FairpayResponse) {
    this.fairpayResponseReceived.emit(fairpayResponse);
  }

  //sync input property with request
  onMinimumWageChange() {
    this.request.minimumWage = this.minimumWageForCalculation;
  }

}
