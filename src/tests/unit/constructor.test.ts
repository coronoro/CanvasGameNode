import {CollisionNodeRotatedRect} from "../../nodes/2d/collision/collision-node-rotated-rect";
import {CollisionNodeCircle} from "../../nodes/2d/collision/collision-node-circle";
import {describe, expect, it} from '@jest/globals';

describe("Simple Constructor Params Filling", () => {
    it("CollisionNodeRect", () => {
        const width = 15

        const rect = new CollisionNodeRotatedRect({width: width,});

        expect(rect.width).toBe(width)
    })
})

describe("Params Filling should work without constructor", () => {
    it("CollisionNodeRect", () => {
        const layer = 2
        const radius = 15

        const circle = new CollisionNodeCircle({layer: layer, radius: radius});

        expect(circle.layer).toBe(layer)
        expect(circle.radius).toBe(radius)
    })
})