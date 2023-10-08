import {EntityNode} from "./entity";
import {Spritesheet} from "../spritesheet";
import {Params} from "./types";

export class SpriteNode extends EntityNode {
    color?: string
    animations?: Spritesheet

    constructor(params: Params<SpriteNode>) {
        super();
        this.fillParams(params)
    }
}
