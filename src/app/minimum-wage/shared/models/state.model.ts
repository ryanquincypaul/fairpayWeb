export class State {
  state: string;
  postalcode: string;
  url: string;
  constructor(state:any) {
    this.state = state.state;
    this.postalcode = state.postalcode;
    this.url = state.url;
  }
}