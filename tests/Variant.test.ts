import { Variant } from '../src/Variant';

describe('Variant', () => {
  it('should create a new variant without name', () => {
    const variant = new Variant();
    expect(variant.getName()).toBe('default');
  });

  it('should create a new variant with name', () => {
    const variant = new Variant('Test');
    expect(variant.getName()).toBe('Test');
  });
  
  it('should create a new variant with name and content', () => {
    const variant = new Variant('Test', 'Content test');
    expect(variant.getName()).toBe('Test');
    expect(variant.getContent()).toBe('Content test');
  });

  it('should get the content of a variant', () => {
    const variant = new Variant('Test', 'Test Content');
    expect(variant.getContent()).toBe('Test Content');
  });

  it('should set the content of a variant', () => {
    const variant = new Variant('Test');
    variant.setContent('New Test Content');
    expect(variant.getContent()).toBe('New Test Content');
  });
});
