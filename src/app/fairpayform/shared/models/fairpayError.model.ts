export class FairpayError {
    message: string;
    fields: Array<string>;

    constructor(error:any) {
        this.message = error.message;
        this.fields = error.fields;
      }
}