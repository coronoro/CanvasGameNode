import {EntityNode} from "./entity";
import {Params} from "../types/types";

export class TextNode extends EntityNode {
    text?: string
    font?: string
    color?: string
    textAlign?: string

    constructor(params: Params<TextNode>) {
        super(params);
        this.fillParams(params)
    }
}
