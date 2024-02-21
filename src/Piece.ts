import { Variant } from './Variant';
import { Link } from './Link';

/**
 * A piece is a collection of variants of content
 * and a collection of links to other pieces.
 */
export class Piece {
  id: number;
  variants: {
    [key:string]: Variant;
  };
  links: Link[];

  /**
   * Instantiate a new piece with an empty
   * default variant.
   *
   * @param id The unique identifier for this piece
   * @param [content] The content for the default variant
   */
  constructor(id: number, content?: string){
    this.id = id;
    this.links = [];

    // Instantiate with a new default variant
    this.variants = {
      'default': new Variant('default')
    };

    // Set the content if it was provided
    if (content){
      this.variants['default'].setContent(content);
    }
  }

  /**
   * Get the unique identifier for this piece.
   * 
   * @returns The unique identifier for this piece
   */
  getVariant(name: string){
    return this.variants[name];
  }

  /**
   * Add a variant to this piece.
   *
   * @param [name] Variant name. If not provided, results in 'default'
   * @param [content] Variant content
   * @throws {Error} If the variant already exists
   * @returns The new variant object
   */
  addVariant(name?: string, content?: string){
    name = name || 'default';
    if (this.variants[name]) {
      throw new Error('Variant already exists');
    }
    this.variants[name] = new Variant(name, content);

    return this.variants[name];
  }

  /**
   * Connects an existing variant object to this piece.
   *
   * @param variant Variant object to add
   * @throws {Error} If a variant with this name already exists
   */
  connectExistingVariant(variant: Variant){
    if (this.variants[variant.getName()]) {
      throw new Error('A Variant with this name already exists');
    }
    this.variants[variant.getName()] = variant;
  }

  /**
   * Edit the content of a variant.
   *
   * @param name Variant name
   * @param content Content to set
   * @throws {Error} If the variant does not exist
   */
  editVariant(name: string, content: string){
    if (this.variants[name] === undefined) {
      throw new Error('Variant does not exist');
    }

    this.variants[name].setContent(content);
  }

  /**
   * Remove a variant from this piece.
   *
   * @param name Variant name
   * @throws {Error} If the variant does not exist
   */
  removeVariant(name: string){
    delete this.variants[name];

    if (this.variants[name] === undefined) {
      throw new Error('Variant does not exist');
    }
  }

  addLink(title: string, piece_id: number){
    this.links.push(new Link(title, piece_id));
  }

  getLinks(){
    return this.links;
  }

  removeLink(index: number){
    this.links.splice(index, 1);
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