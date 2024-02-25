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

    /* Traversing the story tree */

    getStartingStoryNode() {
        return this.story.getStartingStoryNode();
    }

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
    getContentNodes() {
        let node = this.story.getStartingStoryNode() || undefined;
        const all = [];
        while (node?.getChoice()?.getNode() !== undefined {
            all.push(node);
            node = node?.getChoice()?.getNode();
        }
    
        return all;
    }

    /**
     * Get the content of the story, in text
     * @return The text content of the story, as chosen by the user
     */
    getContentText() {
        return this.getContentNodes().map(
            node => node.getContent()
        ).join("\n\n");
    }
}


