import { Component, OnInit } from '@angular/core';
import { LanguageSettings, LanguageSettingsHelper } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languageSettings: LanguageSettings;
  languageHelper: LanguageSettingsHelper = new LanguageSettingsHelper();

  onLanguageChanged(language: string) {
    this.languageSettings =  this.languageHelper.getLanguageSettings(language);
  }

  constructor() {
    //default language to english
    this.languageSettings = this.languageHelper.getLanguageSettings("english");
    console.log("blah" + JSON.stringify(this.languageSettings));

  }

  ngOnInit() {

  }
  //title = 'app works!';
}
