import { RoutesGuardPage } from './app.po';

describe('routes-guard App', () => {
  let page: RoutesGuardPage;

  beforeEach(() => {
    page = new RoutesGuardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('audi works!');
  });
});
