import { JokesterPage } from './app.po';

describe('jokester App', () => {
  let page: JokesterPage;

  beforeEach(() => {
    page = new JokesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
