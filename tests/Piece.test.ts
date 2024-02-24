import { Piece } from '../src/Objects/Piece';

describe('Piece', () => {
  it('should create a new piece without content', () => {
    const piece = new Piece(1);
    expect(piece.getContent()).toBe('');
  });

  it('should create a new piece with content', () => {
    const piece = new Piece(1, 'Test Content');
    expect(piece.getContent()).toBe('Test Content');
  });

  it('should edit the content', () => {
    const piece = new Piece(1, 'Initial Content');
    expect(piece.getContent()).toBe('Initial Content');  

    piece.setContent('Edited Content');
    expect(piece.getContent()).toBe('Edited Content');
  });

  it('should add link', () => {
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    const link = piece.getLinkByTitle('Test');
    expect(link).toBeDefined();
    if (!link) {
      fail('Link is undefined');
    }
    expect(link.getTitle()).toBe('Test');
  });

  it('shoul add link without piece id', () => {
    const piece = new Piece(1);
    piece.addLink('Test');
    const link = piece.getLinkByTitle('Test');
    expect(link).toBeDefined();
    if (!link) {
      fail('Link is undefined');
    }
    expect(link.getTitle()).toBe('Test');
    expect(link.getPieceId()).toBe(-1);
  });

  it('should not add link that already exists', () => {
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    expect(() => piece.addLink('Test', 1)).toThrow('Link already exists');
  });

  it('should get all links', () => {
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    piece.addLink('Test2', 2);
    const links = piece.getLinks();
    expect(links).toHaveLength(2);
    expect(links[0].getTitle()).toBe('Test');
  });

  it('should remove link', () => {
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    piece.addLink('Test2', 2);
    piece.removeLink(0);
    const links = piece.getLinks();
    expect(links).toHaveLength(1);
    expect(links[0].getTitle()).toBe('Test2');
  });

  it('should remove link by title', () => {
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    piece.addLink('Test2', 2);
    expect(piece.getLinks()).toHaveLength(2);

    piece.removeLinkByTitle('Test');
    expect(piece.getLinks()).toHaveLength(1);
    expect(piece.getLinks()[0].getTitle()).toBe('Test2');
  });

  it('should empty links', () => {  
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    piece.addLink('Test2', 2);
    expect(piece.getLinks()).toHaveLength(2);

    piece.emptyLinks();
    expect(piece.getLinks()).toHaveLength(0);
  });
});
