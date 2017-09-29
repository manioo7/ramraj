import { SvcoPage } from './app.po';

describe('svco App', function() {
  let page: SvcoPage;

  beforeEach(() => {
    page = new SvcoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
