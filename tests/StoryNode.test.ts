import { StoryNode } from '../src/Objects/StoryNode';

describe('StoryNode', () => {
  it('should create a new node without content', () => {
    const node = new StoryNode(1);
    expect(node.getContent()).toBe('');
  });

  it('should create a new node with content', () => {
    const node = new StoryNode(1, 'Test Content');
    expect(node.getContent()).toBe('Test Content');
  });

  it('should set/edit the content', () => {
    const node = new StoryNode(1, 'Initial Content');
    expect(node.getContent()).toBe('Initial Content');  

    node.setContent('Edited Content');
    expect(node.getContent()).toBe('Edited Content');
  });

  it('should set choice', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10'));
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11'));
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12'));

    const link = node.getLinkByTitle('Choose node 11');
    if (!link) {
      fail('Link is undefined');
    }
    node.setChoice(link);
    expect(node.getChoice()).toBe(link);
    expect(node.getChoice()?.getTitle()).toBe('Choose node 11');
  });

  it('should set choice by title', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10'));
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11'));
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12'));

    node.setChoiceByTitle('Choose node 12');
    const link = node.getChoice();
    if (!link) {
      fail('Link is undefined');
    }
    expect(node.getChoice()).toBe(link);
    expect(node.getChoice()?.getTitle()).toBe('Choose node 12');
  });

  it('should not set choice by title if it does not exist', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10'));
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11'));
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12'));

    expect(() => node.setChoiceByTitle('Node 13')).toThrow('This title does not match any of the available Link options');
  });

  it('should not set choice by index if it does not exist', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10')); // 0
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11')); // 1
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12')); // 2

    expect(() => node.setChoiceByIndex(3)).toThrow('This index does not match any of the available Link options');
  });

  it('should set choice by index', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10')); // 0
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11')); // 1
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12')); // 2

    node.setChoiceByIndex(1);
    const link = node.getChoice();
    if (!link) {
      fail('Link is undefined');
    }
    expect(link.getTitle()).toBe('Choose node 11');
  });

  it('should add link', () => {
    const node = new StoryNode(1);
    node.addLink('Choose node 10', new StoryNode(10, 'Node 10')); // 0
    const link = node.getLinkByTitle('Choose node 10');
    expect(link).toBeDefined();
    if (!link) {
      fail('Link is undefined');
    }
    expect(link.getTitle()).toBe('Choose node 10');
    expect(link.getNode()?.getContent()).toBe('Node 10');
  });

  it('shoul add link without node id', () => {
    const node = new StoryNode(1);
    node.addLink('Choose some future node'); 
    const link = node.getLinkByTitle('Choose some future node');

    expect(link).toBeDefined();

    if (!link) {
      fail('Link is undefined');
    }

    expect(link.getTitle()).toBe('Choose some future node');
    expect(link.getNodeId()).toBeUndefined();
  });

  it('should not add link that already exists', () => {
    const node = new StoryNode(1);
    node.addLink('Choose node 10');
    expect(
        () => node.addLink('Choose node 10', new StoryNode(10, 'Node 10'))
      ).toThrow('Link already exists');
  });

  it('should get all links', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10')); // 0
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11')); // 1
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12')); // 2

    const links = node.getLinks();
    expect(links).toHaveLength(3);
    expect(links[0].getTitle()).toBe('Choose node 10');
  });

  it('should remove link', () => {
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10')); // 0
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11')); // 1
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12')); // 2
    expect(node.getLinks()).toHaveLength(3);

    node.removeLink(0);
    expect(node.getLinks()).toHaveLength(2);

    // The first was removed, the second is now the first
    expect(node.getLinkByIndex(0).getTitle()).toBe('Choose node 11');
  });

  it('should empty links', () => {  
    const node = new StoryNode(1);

    node.addLink('Choose node 10', new StoryNode(10, 'Node 10')); // 0
    node.addLink('Choose node 11', new StoryNode(11, 'Node 11')); // 1
    node.addLink('Choose node 12', new StoryNode(12, 'Node 12')); // 2
    expect(node.getLinks()).toHaveLength(3);

    node.emptyLinks();
    expect(node.getLinks()).toHaveLength(0);
  });
});
