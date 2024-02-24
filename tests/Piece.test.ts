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

  it('should set/edit the content', () => {
    const piece = new Piece(1, 'Initial Content');
    expect(piece.getContent()).toBe('Initial Content');  

    piece.setContent('Edited Content');
    expect(piece.getContent()).toBe('Edited Content');
  });

  it('should set choice', () => {
    const piece = new Piece(1);

    piece.addLink('Test 1', 2);
    piece.addLink('Test 2', 3);
    piece.addLink('Test 3', 4);

    const link = piece.getLinkByTitle('Test 2');
    if (!link) {
      fail('Link is undefined');
    }
    piece.setChoice(link);
    expect(piece.getChoice()).toBe(link);
  });

  it('should set choice by title', () => {
    const piece = new Piece(1);

    piece.addLink('Test 1', 2);
    piece.addLink('Test 2', 3);
    piece.addLink('Test 3', 4);

    piece.setChoiceByTitle('Test 2');
    const link = piece.getChoice();
    if (!link) {
      fail('Link is undefined');
    }
    expect(link.getTitle()).toBe('Test 2');
  });

  it('should not set choice by title if it does not exist', () => {
    const piece = new Piece(1);

    piece.addLink('Test 1', 2);
    piece.addLink('Test 2', 3);
    piece.addLink('Test 3', 4);

    expect(() => piece.setChoiceByTitle('Test 4')).toThrow('This title does not match any of the available Link options');
  });

  it('should not set choice by index if it does not exist', () => {
    const piece = new Piece(1);

    piece.addLink('Test 1', 2); // 0
    piece.addLink('Test 2', 3); // 1
    piece.addLink('Test 3', 4); // 2

    expect(() => piece.setChoiceByIndex(3)).toThrow('This index does not match any of the available Link options');
  });

  it('should set choice by index', () => {
    const piece = new Piece(1);

    piece.addLink('Test 1', 2); // 0
    piece.addLink('Test 2', 3); // 1
    piece.addLink('Test 3', 4); // 2

    piece.setChoiceByIndex(1);
    const link = piece.getChoice();
    if (!link) {
      fail('Link is undefined');
    }
    expect(link.getTitle()).toBe('Test 2');
  });

  it('should add link', () => {
    const piece = new Piece(1);
    piece.addLink('Test', 2);
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

  it('should empty links', () => {  
    const piece = new Piece(1);
    piece.addLink('Test', 1);
    piece.addLink('Test2', 2);
    expect(piece.getLinks()).toHaveLength(2);

    piece.emptyLinks();
    expect(piece.getLinks()).toHaveLength(0);
  });
});
