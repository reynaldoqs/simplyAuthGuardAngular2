import { browser, element, by } from 'protractor';

export class RoutesGuardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('audi-root h1')).getText();
  }
}
