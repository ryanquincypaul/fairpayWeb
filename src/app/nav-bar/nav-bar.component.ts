import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageSettingsNavBar } from '../shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //default to english
  selectedLanguage: string = "english";
  @Input() languageSettings: LanguageSettingsNavBar;
  @Output() languageChanged = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit() {
    console.log("ngoninit navbar" + JSON.stringify(this.languageSettings));
  }

  switchLanguage() {
    if (this.selectedLanguage == "english") {
      this.selectedLanguage = "spanish";
    } else {
      this.selectedLanguage = "english";
    }

    this.languageChanged.emit(this.selectedLanguage);

  }

}
