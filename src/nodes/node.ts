import {Coordinate} from "../math/coordinate";
import {Params} from "../types/types";
import {Node2d} from "./2d/node-2d";

// function fillable() {
//     return (target: any, descriptor: any) => {
//
//     }
// }

export abstract class Node {
    parent?: Node;
    children: Node[] = []

    /**
     * disable this node as well as all it's children.
     * This also prevents rendering if able.
     */
        // @fillable()
    disabled: boolean = false

    public static Init<NodeType>(params: Params<NodeType>): NodeType {
        const n = new Node2d();
        n.fillParams(params);
        return n as NodeType;
    }

    constructor(params?: Params<Node>) {
        this.fillParams(params)
    }

    protected fillParams(params: any) {
        if (params) {
            Object.assign(this, params);
            // Object.keys(params).forEach((key: any) => {
            //     // @ts-ignore //TODO make this better
            //     Reflect.set(this, key, params[key])
            // })
        }
    }

    update(delta: number) {
        if (!this.disabled) {
            this.children.forEach((child) => child.update(delta))
        }
    }

    addChildren(...children: Node[]) {
        children.forEach((child) => {
            child.parent = this;
            this.children.concat(child);
        })
    }

    abstract globalPosition(): Coordinate

    abstract globalRotation(): number
}