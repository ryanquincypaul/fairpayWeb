import { FairpayWebPage } from './app.po';

describe('fairpayWeb App', function() {
  let page: FairpayWebPage;

  beforeEach(() => {
    page = new FairpayWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
