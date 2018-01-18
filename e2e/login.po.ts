import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/user/login');
  }

  logIn(){
      element(by.xpath('/html/body/app-root/div/app-login/form/div[1]/input')).sendKeys('test@example.com');
      element(by.xpath('/html/body/app-root/div/app-login/form/div[2]/input')).sendKeys('secret');
      return element(by.buttonText('Log In')).click();
  }
  
  getNavBarUserName(){
     return element(by.css('.navbar-right > li:first-child')).getText();
  }

}
