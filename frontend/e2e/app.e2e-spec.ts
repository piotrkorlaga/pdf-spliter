import { PdfSpliterPage } from './app.po';

describe('pdf-spliter App', function() {
  let page: PdfSpliterPage;

  beforeEach(() => {
    page = new PdfSpliterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
