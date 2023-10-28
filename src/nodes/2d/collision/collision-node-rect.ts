import {CollisionNode2D} from "./collision-node";
import {CollisionNodeCircle} from "./collision-node-circle";
import {CollisionFunction, Params} from "../../../types/types";


export class CollisionNodeRect extends CollisionNode2D {
    width: number = 0
    height: number = 0

    constructor(params?: Params<CollisionNodeRect>) {
        super(params as Params<CollisionNode2D>)
        this.fillParams(params)
    }

    collides(other: CollisionNode2D) {
        let collides = false
        if (other.layer in this.collisionLayers) {
            if (other instanceof CollisionNodeRect) {
                this.collisionFunction(this, other)
            } else if (other instanceof CollisionNodeCircle) {

            }
        }
        return collides
    }
}