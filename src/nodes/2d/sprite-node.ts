import {Node2d} from "./node-2d";
import {Spritesheet} from "../../spritesheet";
import {Params} from "../../types/types";

export class SpriteNode extends Node2d {
    color?: string
    animations?: Spritesheet

    constructor(params: Params<SpriteNode>) {
        super();
        this.fillParams(params)
    }
}
