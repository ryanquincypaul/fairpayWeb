import { Component, OnInit, Input } from '@angular/core';
import { FairpayformComponent} from '../fairpayform';
import { MinimumWageComponent } from '../minimum-wage';
import { WageBreakdownComponent} from '../wage-breakdown';
import { FairpayResponse } from '../fairpayform/shared';
import { LanguageSettings } from '../shared';

@Component({
  selector: 'app-fairpay',
  templateUrl: './fairpay.component.html',
  styleUrls: ['fairpay.component.css']
})
export class FairpayComponent implements OnInit {

  minimumWage: number;
  fairpayResponse: FairpayResponse;
  @Input() languageSettings: LanguageSettings;
  @Input() navigationLocation: string;
  
  constructor() { }

  ngOnInit() {
  }

  minimumWageChanged(minimumWage: number) {
    this.minimumWage = minimumWage;
  }

  fairpayResponseReceived(response: FairpayResponse) {
    this.fairpayResponse = response;
    this.navigationLocation = "WageBreakdown";
  }

  onWageBreakdownExit() {
    this.minimumWage = 0; //zeroing out because for some reason it didn't like everything else
    this.navigationLocation = "FairPay";
  }



}
