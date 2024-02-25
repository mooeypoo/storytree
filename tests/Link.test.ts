import { Link } from '../src/Objects/Link';
import { StoryNode } from '../src/Objects/StoryNode';

describe('Link', () => {
  it('should create a new link', () => {
    const node = new StoryNode(1, 'Test Content');
    const link = new Link('Test', node);
    expect(link.getTitle()).toBe('Test');
  });
  
  it('should create a new link without node', () => {
    const link = new Link('Test');
    expect(link.getTitle()).toBe('Test');
    expect(link.getNodeId()).toBeUndefined;
  });
  
  it('should get the node id', () => {
    const node = new StoryNode(123, 'Test Content');
    const link = new Link('Test', node);
    expect(link.getNodeId()).toBe(123);
  });

  it('should edit the title of a link', () => {
    const node = new StoryNode(123, 'Test Content');
    const link = new Link('Test', node);
    link.editTitle('New Test');
    expect(link.getTitle()).toBe('New Test');
  });

  it('should edit the node target of a link', () => {
    const node1 = new StoryNode(123, 'Test Content');
    const link = new Link('Test', node1);
    expect(link.getNodeId()).toBe(123);

    const node2 = new StoryNode(987, 'Another test Content');
    link.editNode(node2);
    expect(link.getNodeId()).toBe(987);
  });
});