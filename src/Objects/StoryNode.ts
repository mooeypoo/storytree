import { Link } from './Link';

/**
 * A node of content and a collection of links to other nodes.
 */
export class StoryNode {
  id: number;
  content: string;
  links: Link[];
  chosenLink?: Link;

  /**
   * Instantiate a new node
   *
   * @param id The unique identifier for this node
   * @param [content] The content for the default variant
   */
  constructor(id: number, content?: string){
    this.id = id;
    this.content = content || '';
    this.links = [];
    this.chosenLink = undefined;
  }

  getId() {
    return this.id;
  }

  /**
   * Set the content for this node.
   *
   * @param content Content to set
   */
  setContent(content: string){
    this.content = content;
  }

  /**
   * Get the content for this node.
   *
   * @returns The content of this node
   */
  getContent(){
    return this.content;
  }

  /**
   * Set the chosen link to another node.
   *
   * @param link The link object to set as the choice
   */
  setChoice(link: Link){
    this.chosenLink = link;
  }

  /**
   * Set the chosen link to another node
   * by using the link title
   *
   * @param title The title of the link to set as the choice
   */
  setChoiceByTitle(title: string){
    const link = this.getLinkByTitle(title);

    if (!link) {
      throw new Error('This title does not match any of the available Link options');
    }
    this.setChoice(link);
  }

  /**
   * Set the chosen link to another node
   * by using the link index
   *
   * @param index The index of the link to set as the choice
   */
  setChoiceByIndex(index: number){
    const link = this.getLinkByIndex(index);

    if (!link) {
      throw new Error('This index does not match any of the available Link options');
    }
    this.setChoice(link);
  }

  /**
   * Get the chosen link to another node.
   *
   * @returns The chosen link
   */
  getChoice() {
    return this.chosenLink;
  }

  /**
   * Add a link to another node.
   *
   * @param title A title for the link
   * @param node The node to link to
   */
  addLink(title: string, node?: StoryNode){
    // Check if the link already exists
    if (this.getLinkByTitle(title)) {
      throw new Error('Link already exists');
    }

    node = node || undefined;
    this.links.push(new Link(title, node));
  }

  /**
   * Get all available links from this node.
   *
   * @returns An array of all links
   */
  getLinks(){
    return this.links;
  }

  /**
   * Remove a link from this node by its index.
   *
   * @param index Index of the link to remove
   */
  removeLink(index: number){
    this.links.splice(index, 1);
  }

  /**
   * Get a link by its title.
   *
   * @param title Link title
   * @returns Link object. Undefined if not found.
   */
  getLinkByTitle(title: string){
    for (let i = 0; i < this.links.length; i++){
      if (this.links[i].getTitle() === title){
        return this.links[i];
      }
    }
  }

  /**
   * Get a link by its index.
   *
   * @param index Link index
   * @returns Link object. Undefined if not found.
   */
  getLinkByIndex(index: number){
    return this.links[index];
  }

  /**
   * Remove all links from this node
   */
  emptyLinks() {
    this.links = [];
  }
}