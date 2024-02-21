import { Piece } from '../src/Piece';
import { Variant } from '../src/Variant';

describe('Piece', () => {
  it('should create a new piece without content', () => {
    const piece = new Piece(1);
    expect(piece.getVariant('default').getContent()).toBe('');
  });

  it('should get a default variant even if empty content', () => {
    const piece = new Piece(1);
    expect(piece.getVariant('default')).toBeDefined();
  });

  it('should create a new piece with content', () => {
    const piece = new Piece(1, 'Test Content');
    expect(piece.getVariant('default').getContent()).toBe('Test Content');
  });
  
  it('should get a variant', () => {
    const piece = new Piece(1);
    piece.addVariant('Test');
    expect(piece.getVariant('Test').getContent()).toBe('');
  });

  it('should add a variant', () => {
    const piece = new Piece(1);
    piece.addVariant('Test', 'Test Content');
    expect(piece.getVariant('Test').getContent()).toBe('Test Content');
  });

  it('should add a variant without information (default)', () => {
    const piece = new Piece(1);
    // Remove 'default' variant so they don't conflict
    piece.removeVariant('default');

    // Add empty variant
    const variant = piece.addVariant();
    expect(variant.getName()).toBe('default');
  });

  it('should not add a variant that already exists', () => {
    const piece = new Piece(1);
    piece.addVariant('Test');
    expect(() => piece.addVariant('Test')).toThrow('Variant already exists');
  });

  it('should connect a variant to a piece', () => {
    const piece = new Piece(1);
    const variant = new Variant('Test', 'Test Content');
    piece.connectExistingVariant(variant);
    expect(piece.getVariant('Test').getContent()).toBe('Test Content');
  });

  it('should not connect a variant that already exists', () => {
    const piece = new Piece(1);
    const variant = new Variant('default', 'Test Content');
    // Default always exists;
    expect(() => piece.connectExistingVariant(variant)).toThrow('A Variant with this name already exists');
  });

  it('should edit a variant', () => {
    const piece = new Piece(1);
    piece.addVariant('Test', 'Initial Content');
    expect(piece.getVariant('Test').getContent()).toBe('Initial Content');  

    piece.editVariant('Test', 'Test Content');
    expect(piece.getVariant('Test').getContent()).toBe('Test Content');
  });

  it('should not edit a variant that does not exist', () => {
    const piece = new Piece(1);
    expect(() => piece.editVariant('Test', 'Test Content')).toThrow('Variant does not exist');
  });

  it('should remove variant', () => {
    const piece = new Piece(1);
    piece.addVariant('Test', 'Initial Content');
    expect(piece.getVariant('Test').getContent()).toBe('Initial Content');  

    piece.removeVariant('Test');
    expect(piece.getVariant('Test')).toBeUndefined;
  });

  it('should not remove a variant that does not exist', () => {
    const piece = new Piece(1);
    expect(() => piece.removeVariant('Test')).toThrow('Variant does not exist');
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
