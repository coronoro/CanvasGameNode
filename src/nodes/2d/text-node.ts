import {Node2d} from "./node-2d";
import {Params} from "../../types/types";

export class TextNode extends Node2d {
    text?: string
    font?: string
    color?: string
    textAlign?: string

    constructor(params: Params<TextNode>) {
        super(params);
        this.fillParams(params)
    }
}
