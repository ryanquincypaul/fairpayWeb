import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class MinimumWageService {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  api_url: string = 'https://fairpay.azurewebsites.net/minimum-wage';
    //LOCALTESTING with Lein Ring Server on minimum-wage webservice : api_url: string = 'https://localhost:3000';

  constructor(private http: Http) {}

  private getJson(response: Response) {
    return response.json();
  }

  private checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText)
      error['response'] = response;
      console.error(error);
      throw error;
    }
  }

  get(path: string) {
    return this.http.get(`${this.api_url}${path}`, { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson)
  }

}
