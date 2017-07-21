import { PlutonicIo.Github.IoPage } from './app.po';

describe('plutonic-io.github.io App', () => {
  let page: PlutonicIo.Github.IoPage;

  beforeEach(() => {
    page = new PlutonicIo.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
