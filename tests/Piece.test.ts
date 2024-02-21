import { Piece } from '../src/Piece';

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


  it('should not add a variant that already exists', () => {
    const piece = new Piece(1);
    piece.addVariant('Test');
    expect(() => piece.addVariant('Test')).toThrow('Variant already exists');
  });
});
