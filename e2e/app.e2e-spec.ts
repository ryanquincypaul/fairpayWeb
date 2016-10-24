import { CliTestPage } from './app.po';

describe('fairpayWeb App', function() {
  let page: CliTestPage;

  beforeEach(() => {
    page = new CliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
