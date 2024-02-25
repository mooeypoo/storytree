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

    getStartingStoryNode() {
        return this.story.getStartingStoryNode();
    }

    // /**
    //  * Get all nodes of the story as a choice tree.
    //  */
    // getTree() {
    // }

    /**
     * Get all nodes of the story
     *
     * @returns An array of all nodes in the story
     */
    getAll() {
        return this.story.getAllStoryNodes();
    }

    /**
     * Get the chosen nodes of the story.
     * @returns The content of the story, as chosen by the user
     */
    getContent() {
        let node = this.story.getStartingStoryNode();
        const all = [];
        while (node?.getChoice()) {
            node = this.story.getStoryNodeById(node.getChoice()?.getStoryNodeId()!);
            all.push(node);
        }
    
        return all;
    }
}


