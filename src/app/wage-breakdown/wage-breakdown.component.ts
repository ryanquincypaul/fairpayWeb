import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WageBreakdown, FairpayError, FairpayResponse } from '../fairpayform/shared';
import { LanguageSettingsWageBreakdown } from '../shared';

@Component({
  selector: 'app-wage-breakdown',
  templateUrl: './wage-breakdown.component.html',
  styleUrls: ['./wage-breakdown.component.css']
})
export class WageBreakdownComponent implements OnInit {
  @Input() fairpayResponse: FairpayResponse;
  @Input() languageSettings: LanguageSettingsWageBreakdown;
  @Output() wageBreakdownExit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  exitButtonClicked() {
    console.log("yo");
    this.wageBreakdownExit.emit("exit");
  }

}
