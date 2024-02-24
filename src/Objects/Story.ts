import { Piece } from './Piece';

export class Story {
  title: string;
  description?: string;
  author?: string;
  allPieces: { [key: number]: Piece };
  startingPiece?: Piece;
  

  constructor(title: string, description?: string, author?: string){
    this.title = title;
    this.description = description || undefined;
    this.author = author || undefined;

    this.allPieces = {};
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

  getStartingPiece() {
    return this.startingPiece;
  }

  /**
   * Get all pieces of the story as a choice tree.
   */
  getTree() {
    // const tree = {
    //   [key: number]: {title: string, id: number, children: any[]}
    // };
    // const usedPiecesIDs: number[] = []; // This is to prevent recursion

    // piece = this.startingPiece;
    

    // // const buildTree = (piece : Piece) => {
    // if (usedPiecesIDs.includes(piece.id)) {
    //     return;
    // }
    // usedPiecesIDs.push(piece.id);
    // const links = piece.getLinks();
    // tree[piece.id] = links.map(link => {
    //     const nextPiece = this.story.getPieceById(link.getPieceId());
    //     return {
    //         title: link.getTitle(),
    //         id: link.getPieceId(),
    //         children: buildTree(nextPiece),
    //     }
    // });
    // return tree[piece.id];
  }

  /**
   * Get the chosen story pieces. This will represent
   * the choices made by the user, including a changed choice
   * and will traverse the choices to the end.
   *
   * @returns The story piece by piece, with all used pieces in the sequence.
   */
  getStoryPieces() {



  }

  /**
   * Add a piece to the story.
   * 
   * @param piece The piece to add
   */
  addPiece(piece: Piece){
    this.allPieces[piece.id] = piece;
  }

  /**
   * Get a piece by its ID.
   * 
   * @param id The ID of the piece
   * @returns The piece; undefined if not found
   */
  getPieceById(id: number){
    return this.allPieces[id];
  }

  getAllPieces() {
    return this.allPieces;
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
