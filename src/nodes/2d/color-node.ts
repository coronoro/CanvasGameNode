import {Node2d} from "./node-2d";

export class ColorNodeRect2d extends Node2d{
    width: number = 0;
    height: number = 0;
    color: string = 'white';

    update(delta: number) {
        super.update(delta);

        const pos = this.globalPosition();
        // ctx.fillStyle = this.color;
        // ctx.fillRect(pos.x, pos.y, this.width, this.height);
    }
}