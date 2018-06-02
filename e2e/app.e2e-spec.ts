import { NgxDynamicTabsPage } from './app.po';

describe('ngx-dynamic-tabs App', () => {
  let page: NgxDynamicTabsPage;

  beforeEach(() => {
    page = new NgxDynamicTabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
