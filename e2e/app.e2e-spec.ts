import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('webapps-project App', () => {
  let page: AppPage;

  beforeEach((done) => {
    page = new AppPage();
    browser.get('/login');
    browser.findElement(by.id('username')).sendKeys('rudy');
    browser.findElement(by.id('password')).sendKeys('polpolpolpol');
    const promise = browser.findElement(by.id('loginbtn')).click();
    browser.wait(promise, 1000);
    done();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
  it('there should be one question list', () => {
    page.navigateTo();
    // console.log(page.getParagraphText().count());
    expect(page.getParagraphText().count()).toEqual(1);
  });
});
