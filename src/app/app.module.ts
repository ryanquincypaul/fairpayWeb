import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MinimumWageComponent } from './minimum-wage/minimum-wage.component';
import { FairpayComponent } from './fairpay/fairpay.component';
import { FairpayformComponent } from './fairpayform/fairpayform.component';
import { WageBreakdownComponent } from './wage-breakdown/wage-breakdown.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MinimumWageComponent,
    FairpayComponent,
    FairpayformComponent,
    WageBreakdownComponent,
    NavBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
