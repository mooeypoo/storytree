import { Story } from "./Objects/Story";

export function createStory(title: string, description?: string, author?: string){
  return new Story(title, description, author);
}

export function getStoryDetails(story: Story){
    return {
        title: story.getTitle(),
        description: story.getDescription(),
    }
}

export function getChosenContent(story: Story){
    let piece = story.getStartingPiece();
    const all = [];
    while (piece?.getChoice()) {
        piece = story.getPieceById(piece.getChoice()?.getPieceId()!);
        all.push(piece);
    }

    return all;
}


