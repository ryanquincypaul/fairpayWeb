import { Component, OnInit, Input } from '@angular/core';
import { FairpayformComponent} from '../fairpayform';
import { MinimumWageComponent } from '../minimum-wage';

@Component({
  selector: 'app-fairpay',
  templateUrl: './fairpay.component.html',
  styleUrls: ['./fairpay.component.css']
})
export class FairpayComponent implements OnInit {

  constructor() { }
  minimumWage: number;

  ngOnInit() {
  }

  minimumWageChanged(minimumWage: number) {
    this.minimumWage = minimumWage;
  }

}
