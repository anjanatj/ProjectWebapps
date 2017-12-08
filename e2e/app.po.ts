import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/question/list');
  }

  getParagraphText() {
    return element(by.id('question-list'));
  }

  getQuestionComponents() {
    return element.all(by.id('question-component'));
  }
}
