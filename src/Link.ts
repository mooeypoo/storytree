/**
 * A link to another piece.
 */
export class Link {
  title: string;
  piece_id: number;

  constructor(title: string, piece_id: number) {
    this.title = title;
    this.piece_id = piece_id;
  }

  getTitle() {
    return this.title;
  }

  editTitle(title: string) {
    this.title = title;
  }
}
