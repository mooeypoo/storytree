import { StoryNode } from "./StoryNode";

/**
 * A link to another story node.
 */
export class Link {
  title: string;
  node?: StoryNode;

  constructor(title: string, node?: StoryNode) {
    this.title = title;
    this.node = node || undefined;
  }

  getTitle() {
    return this.title;
  }

  getNode() {
    return this.node;
  }

  getNodeId() {
    return this.node?.getId();
  }

  editTitle(title: string) {
    this.title = title;
  }

  editNode(node: StoryNode) {
    this.node = node;
  }
}
