import { ContactListApplicationPage } from './app.po';

describe('contact-list-application App', function() {
  let page: ContactListApplicationPage;

  beforeEach(() => {
    page = new ContactListApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
