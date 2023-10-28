import {Node} from "../node";
import {Params} from "../../types/types";
import {Coordinate} from "../../math/coordinate";


export class Node2d extends Node {
    position: Coordinate = new Coordinate(0, 0)
    rotation = 0
    scaleX: number = 1
    scaleY: number = 1
    opacity: number = 1

    anchor: Coordinate = new Coordinate(0.5, 0.5)

    constructor(params?: Params<Node2d>) {
        super(params)
        this.fillParams(params)
    }

    setScale(scaleX: number, scaleY: number) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }

    globalPosition(): Coordinate {
        return this.position.add(this.parent ? this.parent.globalPosition() : new Coordinate(0, 0));
    }

    globalRotation(): number {
        return this.rotation + (this.parent ? this.parent.globalRotation() : 0);
    }
}

