import {CollisionNode2D} from "./collision-node";
import {Coordinate} from "../../../math/coordinate";
import {Params} from "../../../types/types";


export class CollisionNodeCircle extends CollisionNode2D {
    radius: number = 0

    clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(max, value));
    }

    constructor(params?: Params<CollisionNodeCircle>) {
        super(params as Params<CollisionNode2D>);
        this.fillParams(params)
    }

    collides(node: CollisionNode2D) {
        let collides = false
        if (node.layer in this.collisionLayers) {
            // calculate AABB info (center, half-extents)


            // glm::vec2 aabb_half_extents(two.Size.x / 2.0f, two.Size.y / 2.0f);
            //
            //
            // glm::vec2 aabb_center(
            //     two.Position.x + aabb_half_extents.x,
            //     two.Position.y + aabb_half_extents.y
            // );
            //
            // // get difference vector between both centers
            // glm::vec2 difference = center - aabb_center;
            // glm::vec2 clamped = glm::clamp(difference, -aabb_half_extents, aabb_half_extents);
            // // add clamped value to AABB_center and we get the value of box closest to circle
            // glm::vec2 closest = aabb_center + clamped;
            // // retrieve vector between center circle and closest point AABB and check if length <= radius
            // difference = closest - center;
            // return glm::length(difference) < one.Radius;

            return false;
        }
        return collides
    }
}