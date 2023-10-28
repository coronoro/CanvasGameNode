import {Node2d} from "../node-2d";
import {CollisionFunction, Params} from "../../../types/types";


export abstract class CollisionNode2D extends Node2d { // TODO Rename to CollisionRectNode2D, add CollisionNode2D parent
    layer: number = 0
    collisionLayers: number[] = []
    collisionFunction!: CollisionFunction<this, any>

    constructor(params?: Params<CollisionNode2D>) {
        super(params);
        this.fillParams(params)
    }

    callback: (nodes: CollisionNode2D[]) => void = (nodes) => {
    }

    abstract collides(node: CollisionNode2D): boolean

    update(delta: number) {
        super.update(delta);
        const Game = {collisionNodes: []} // TODO move to global game class
        this.callback(Game.collisionNodes.filter((other: CollisionNode2D) => this !== other && this.collides(other)))
    }
}