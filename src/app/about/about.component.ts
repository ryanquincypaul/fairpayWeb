import { Component, OnInit, Input } from '@angular/core';
import { LanguageSettingsAbout } from '../shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() languageSettings: LanguageSettingsAbout;

  constructor() { }

  ngOnInit() {
  }

}
