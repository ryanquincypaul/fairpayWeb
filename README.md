# FairpayWeb

A web application powered by Angular 2 that determines potential wage theft based on Federal, State, and (eventually) Local law. 

## Hosting Info
Check it out live [here](https://ryanquincypaul.github.io/fairpayWeb).

## Usage

A user is prompted to enter information to determine the minimum wage that applies to their state as well as pay stub information in order to calculate their expected gross earnings and determine if they adhere to labor law.

## Motivation

This is a proof of concept for a Web Application idea proposed by a law student looking to ease some barriers preventing low income earners from fighting for a legal wage according to the [FLSA](https://en.wikipedia.org/wiki/Fair_Labor_Standards_Act). 

## Prerequisites

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17. This project's prerequisites match those of Angular-CLI. Please see the Angular-CLI Information section below for information regarding local development and hosting.

## TODO

As this is a proof of concept, any further changes made to this project will be for demo purposes only. I would also like to add the following to the future iteration of this app.
* Add local minimum wage information
* Design the UI based on requirements from the requesting user instead of just rolling standard Bootstrap
* Write tests (Jasmine?) based on the UI requirements
* Accurate translations
* More translations (Arabic, French, Bangla, etc.) to keep us with large immigrant populations in the US
* Provide location specific law office or non-profit contact info for users to contact regarding potential wage theft.

# Angular-CLI Information

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
