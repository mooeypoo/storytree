/**
 * A link to another piece.
 */
export class Link {
  title: string;
  piece_id?: number;

  constructor(title: string, piece_id?: number) {
    this.title = title;
    this.piece_id = piece_id || undefined;
  }

  getTitle() {
    return this.title;
  }

  getPieceId() {
    return this.piece_id;
  }

  editTitle(title: string) {
    this.title = title;
  }

  editPieceId(piece_id: number) {
    this.piece_id = piece_id;
  }
}
