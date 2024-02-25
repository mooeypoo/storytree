import { StoryNode } from './StoryNode';

export class Story {
  title: string;
  description?: string;
  author?: string;
  allStoryNodes: { [key: number]: StoryNode };
  startingStoryNode?: StoryNode;

  constructor(title: string, description?: string, author?: string){
    this.title = title;
    this.description = description || undefined;
    this.author = author || undefined;

    this.allStoryNodes = {};
    this.startingStoryNode = undefined;
  }

  /**
   * Start the story. Create a new node and set it as the start.
   * 
   * @returns The ID of the new node
   */
  start() {
    const node = new StoryNode(1);
    this.setStartStoryNode(node);
    this.addStoryNode(node);
    return node.id;
  }

  getStartingStoryNode() {
    return this.startingStoryNode;
  }

  /**
   * Get all nodes of the story as a choice tree.
   */
  getTree() {
    // const tree = {
    //   [key: number]: {title: string, id: number, children: any[]}
    // };
    // const usedStoryNodesIDs: number[] = []; // This is to prevent recursion

    // node = this.startingStoryNode;
    

    // // const buildTree = (node : StoryNode) => {
    // if (usedStoryNodesIDs.includes(node.id)) {
    //     return;
    // }
    // usedStoryNodesIDs.push(node.id);
    // const links = node.getLinks();
    // tree[node.id] = links.map(link => {
    //     const nextStoryNode = this.story.getStoryNodeById(link.getStoryNodeId());
    //     return {
    //         title: link.getTitle(),
    //         id: link.getStoryNodeId(),
    //         children: buildTree(nextStoryNode),
    //     }
    // });
    // return tree[node.id];
  }

  /**
   * Get the chosen story. This will represent
   * the choices made by the user, including a changed choice
   * and will traverse the choices to the end.
   *
   * @returns An array of the chosen content of the story
   */
  getStoryContent() {
  }

  /**
   * Add a node to the story.
   * 
   * @param node The node to add
   */
  addStoryNode(node: StoryNode){
    this.allStoryNodes[node.id] = node;
  }

  /**
   * Get a node by its ID.
   * 
   * @param id The ID of the node
   * @returns The node; undefined if not found
   */
  getStoryNodeById(id: number){
    return this.allStoryNodes[id];
  }

  getAllStoryNodes() {
    return this.allStoryNodes;
  }

  /**
   * Set the starting node.
   *
   * @param node StoryNode to set
   */
  setStartStoryNode(node: StoryNode){
    this.startingStoryNode = node;
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
