import { Component, OnInit, Input } from '@angular/core';
import { FairpayResponse, WageBreakdown, FairpayRequest, FairpayService } from './shared';

@Component({
  selector: 'app-fairpayform',
  templateUrl: './fairpayform.component.html',
  styleUrls: ['./fairpayform.component.css'],
  providers: [FairpayService]
})
export class FairpayformComponent implements OnInit {
  @Input() minimumWageForCalculation: number;

  //Fields needed for fairpay call
  // timeSpan: string;
  // grossWages: number;
  // hoursWorked: number;

  request = new FairpayRequest();


  constructor(private fairpayService: FairpayService) { }

  ngOnInit() {
  }

  
  onSubmit() {
    console.log("submitted");

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
    console.log(path);
    return path;
  }

  fairpayCallBack(fairpayResponse: FairpayResponse) {
    alert(JSON.stringify(fairpayResponse));
  }

  //sync input property with request
  onMinimumWageChange() {
    console.log("minimum wage updated")
    console.log(this.request.minimumWage);
    this.request.minimumWage = this.minimumWageForCalculation;
    console.log(this.request.minimumWage);

  }

}
