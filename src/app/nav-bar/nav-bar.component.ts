import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageSettingsNavBar } from '../shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //default to english
  selectedLanguage: string = "english";
  currentNavigationSelection: string = "FairPay"; 
  @Input() languageSettings: LanguageSettingsNavBar;
  @Output() languageChanged = new EventEmitter<string>();
  @Output() navigationLocationChanged = new EventEmitter<string>();


  constructor() { 
    
  }

  ngOnInit() {
  }

  switchLanguage() {
    if (this.selectedLanguage == "english") {
      this.selectedLanguage = "spanish";
    } else {
      this.selectedLanguage = "english";
    }

    this.languageChanged.emit(this.selectedLanguage);

  }

  changeNavigationLocation(location: string) {
    this.currentNavigationSelection = location;
    this.navigationLocationChanged.emit(location);
  }

}
