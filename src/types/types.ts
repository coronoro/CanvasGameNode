import {CollisionNode2D} from "../nodes/2d/collision/collision-node";

export type Params<T> = {
    [key in keyof T]?: T[key]
}


export type CollisionFunction<T1 extends CollisionNode2D, T2 extends CollisionNode2D> = (node1: T1, node2: T2) => boolean