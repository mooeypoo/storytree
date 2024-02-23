import { Piece } from "./Piece";

export class Story {
  title: string;
  description?: string;
  author?: string;
  pieces: { [key: number]: Piece };
  startingPiece?: Piece;

  constructor(title: string, description?: string, author?: string){
    this.title = title;
    this.description = description || undefined;
    this.author = author || undefined;

    this.pieces = {};
    this.startingPiece = undefined;
  }

  /**
   * Start the story. Create a new piece and set it as the start.
   * 
   * @returns The ID of the new piece
   */
  start() {
    const piece = new Piece(1);
    this.setStartPiece(piece);
    this.addPiece(piece);
    return piece.id;
  }

  /**
   * Add a piece to the story.
   * 
   * @param piece The piece to add
   */
  addPiece(piece: Piece){
    this.pieces[piece.id] = piece;
  }

  /**
   * Get a piece by its ID.
   * 
   * @param id The ID of the piece
   * @returns The piece; undefined if not found
   */
  getPiece(id: number){
    return this.pieces[id];
  }

  getAllPieces() {
    return this.pieces;
  }

  /**
   * Set the starting piece.
   *
   * @param piece Piece to set
   */
  setStartPiece(piece: Piece){
    this.startingPiece = piece;
  }

  /**
   * Set the story title
   *
   * @param title Title
   */
  setTitle(title: string){
    this.title = title;
  }

  /**
   * Get the story title
   *
   * @returns The story title
   */
  getTitle(){
    return this.title;
  }

  /**
   * Set the story description
   *
   * @param description Description
   */
  setDescription(description: string){
    this.description = description;
  }

  /**
   * Get the story description
   *
   * @returns The story description
   */
  getDescription(){
    return this.description;
  }

  /**
   * Set the story author
   *
   * @param author Author
   */
  setAuthor(author: string){
    this.author = author;
  }

  /**
   * Get the story author
   *
   * @returns The story author
   */
  getAuthor(){
    return this.author;
  }
}
