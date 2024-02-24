import { Story } from "./Objects/Story";

export class Storytree {
    story: Story;

    constructor(title: string, description?: string, author?: string){
        this.story = new Story(title, description, author);
    }

    create() {
        return this.story.start();
    }

    getDetails() {
        return {
            title: this.story.getTitle(),
            description: this.story.getDescription(),
        }
    }

    getStartingPiece() {
        return this.story.getStartingPiece();
    }

    // /**
    //  * Get all pieces of the story as a choice tree.
    //  */
    // getTree() {
    // }

    /**
     * Get all pieces of the story
     *
     * @returns An array of all pieces in the story
     */
    getAll() {
        return this.story.getAllPieces();
    }

    /**
     * Get the chosen pieces of the story.
     * @returns The content of the story, as chosen by the user
     */
    getContent() {
        let piece = this.story.getStartingPiece();
        const all = [];
        while (piece?.getChoice()) {
            piece = this.story.getPieceById(piece.getChoice()?.getPieceId()!);
            all.push(piece);
        }
    
        return all;
    }
}


