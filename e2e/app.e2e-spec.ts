import { AnnusEpuletgepeszetPage } from './app.po';

describe('annus-epuletgepeszet App', () => {
  let page: AnnusEpuletgepeszetPage;

  beforeEach(() => {
    page = new AnnusEpuletgepeszetPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
