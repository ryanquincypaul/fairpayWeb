import { Component, OnInit, Input } from '@angular/core';
import { FairpayformComponent} from '../fairpayform';
import { MinimumWageComponent } from '../minimum-wage';
import { WageBreakdownComponent} from '../wage-breakdown';
import { FairpayResponse } from '../fairpayform/shared';

@Component({
  selector: 'app-fairpay',
  templateUrl: './fairpay.component.html',
  styleUrls: ['./fairpay.component.css']
})
export class FairpayComponent implements OnInit {

  constructor() { }
  minimumWage: number;
  fairpayResponse: FairpayResponse;

  ngOnInit() {
  }

  minimumWageChanged(minimumWage: number) {
    this.minimumWage = minimumWage;
  }

  fairpayResponseReceived(response: FairpayResponse) {
    console.log("yolo");
    this.fairpayResponse = response;
  }



}
