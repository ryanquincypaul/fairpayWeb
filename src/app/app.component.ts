import { Component, OnInit } from '@angular/core';
import { LanguageSettings, LanguageSettingsHelper } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  languageSettings: LanguageSettings;
  navigationLocation: string = "FairPay";
  languageHelper: LanguageSettingsHelper = new LanguageSettingsHelper();

  onLanguageChanged(language: string) {
    this.languageSettings =  this.languageHelper.getLanguageSettings(language);
  }

  onNavigationLocationChanged(location: string) {
    this.navigationLocation = location;
  }

  constructor() {
    //default language to english
    this.languageSettings = this.languageHelper.getLanguageSettings("english");
  }

  ngOnInit() {

  }
  //title = 'app works!';
}
