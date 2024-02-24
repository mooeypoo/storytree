import { Link } from './Link';

/**
 * A piece of content and a collection of links to other pieces.
 */
export class Piece {
  id: number;
  content: string;
  links: Link[];
  chosenLink?: Link;

  /**
   * Instantiate a new piece
   *
   * @param id The unique identifier for this piece
   * @param [content] The content for the default variant
   */
  constructor(id: number, content?: string){
    this.id = id;
    this.content = content || '';
    this.links = [];
    this.chosenLink = undefined;
  }

  /**
   * Set the content for this piece.
   *
   * @param content Content to set
   */
  setContent(content: string){
    this.content = content;
  }

  /**
   * Get the content for this piece.
   *
   * @returns The content of this piece
   */
  getContent(){
    return this.content;
  }

  setChoice(link: Link){
    this.chosenLink = link;
  }

  setChoiceByTitle(title: string){
    const link = this.getLinkByTitle(title);

    if (!link) {
      throw new Error('This title does not match any of the available Link options');
    }
    this.setChoice(link);
  }

  setChoiceByIndex(index: number){
    const link = this.getLinkByIndex(index);

    if (!link) {
      throw new Error('This index does not match any of the available Link options');
    }
    this.setChoice(link);
  }

  getChoice() {
    return this.chosenLink;
  }

  addLink(title: string, piece_id?: number){
    // Check if the link already exists
    if (this.getLinkByTitle(title)) {
      throw new Error('Link already exists');
    }

    piece_id = piece_id || -1;
    this.links.push(new Link(title, piece_id));
  }

  getLinks(){
    return this.links;
  }

  removeLink(index: number){
    this.links.splice(index, 1);
  }

  getLinkByTitle(title: string){
    for (let i = 0; i < this.links.length; i++){
      if (this.links[i].getTitle() === title){
        return this.links[i];
      }
    }
  }

  getLinkByIndex(index: number){
    return this.links[index];
  }

  removeLinkByTitle(title: string){
    for (let i = 0; i < this.links.length; i++){
      if (this.links[i].getTitle() === title){
        this.links.splice(i, 1);
        return;
      }
    }
  }

  emptyLinks() {
    this.links = [];
  }
}