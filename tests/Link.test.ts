import { Link } from '../src/Link';

describe('Link', () => {
  it('should create a new link', () => {
    const link = new Link('Test', 1);
    expect(link.getTitle()).toBe('Test');
  });
  
  it('should get the piece id', () => {
    const link = new Link('Test', 1);
    expect(link.getPieceId()).toBe(1);
  });

  it('should edit the title of a link', () => {
    const link = new Link('Test', 1);
    link.editTitle('New Test');
    expect(link.getTitle()).toBe('New Test');
  });

  it('should edit the piece id of a link', () => {
    const link = new Link('Test', 1);
    link.editPieceId(2);
    expect(link.getPieceId()).toBe(2);
  });
});