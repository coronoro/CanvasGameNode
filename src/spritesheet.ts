import {Params} from "./types/types";

export class Spritesheet {
    constructor(params: Params<Spritesheet>) {
        if (params) {
            Object.keys(params).forEach((key) => {
                // @ts-ignore //TODO make this better
                this[key] = object[key]
            })
        }
    }

    frameHeight?: number = 0
    frameWidth?: number = 0
    image?: any
    animations?: any


}