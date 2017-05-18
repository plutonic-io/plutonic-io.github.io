import { Plutonic.Github.IoPage } from './app.po';

describe('plutonic.github.io App', () => {
  let page: Plutonic.Github.IoPage;

  beforeEach(() => {
    page = new Plutonic.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
