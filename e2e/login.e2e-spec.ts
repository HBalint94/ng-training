import { LoginPage } from './login.po';

describe('ng-training App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should loged me in', async() => {
    page.navigateTo();
    await page.logIn();
    expect(page.getNavBarUserName()).toBe('Test User');
  });
});
