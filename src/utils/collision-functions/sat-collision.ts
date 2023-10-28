import {Vector} from "../../math/vector";
import {CollisionNodeRotatedRect} from "../../nodes/2d/collision/collision-node-rotated-rect";


export function satCollision(node1: CollisionNodeRotatedRect, node2: CollisionNodeRotatedRect) {
    let perpendicularLine = null;
    let dot = 0;
    const perpendicularStack = [];
    let amin = null;
    let amax = null;
    let bmin = null;
    let bmax = null;

    //Work out all perpendicular vectors on each edge for polygonA
    for (var i = 0; i < node1.edges.length; i++) {
        perpendicularLine = new Vector(-node1.edges[i].y, node1.edges[i].x);
        perpendicularStack.push(perpendicularLine);
    }

    //Work out all perpendicular vectors on each edge for polygonB
    for (var i = 0; i < node2.edges.length; i++) {
        perpendicularLine = new Vector(-node2.edges[i].y, node2.edges[i].x);
        perpendicularStack.push(perpendicularLine);
    }

    //Loop through each perpendicular vector for both polygons
    for (var i = 0; i < perpendicularStack.length; i++) {
        //These dot products will return different values each time
        amin = null;
        amax = null;
        bmin = null;
        bmax = null;

        /*Work out all of the dot products for all of the vertices in PolygonA against the perpendicular vector
        that is currently being looped through*/
        for (var j = 0; j < node1.vertices.length; j++) {
            dot = node1.vertices[j].x * perpendicularStack[i].x + node1.vertices[j].y * perpendicularStack[i].y;
            //Then find the dot products with the highest and lowest values from polygonA.
            if (amax === null || dot > amax) amax = dot;
            if (amin === null || dot < amin) amin = dot;
        }

        /*Work out all of the dot products for all of the vertices in PolygonB against the perpendicular vector
        that is currently being looped through*/
        for (var j = 0; j < node2.vertices.length; j++) {
            dot = node2.vertices[j].x * perpendicularStack[i].x + node2.vertices[j].y * perpendicularStack[i].y;
            //Then find the dot products with the highest and lowest values from polygonB.
            if (bmax === null || dot > bmax) bmax = dot;
            if (bmin === null || dot < bmin) bmin = dot;
        }

        //If there is no gap between the dot products projection then we will continue onto evaluating the next perpendicular edge.
        if ((amin! < bmax! && amin! > bmin!) ||
            (bmin! < amax! && bmin! > amin!)) {
            continue;
        }
        //Otherwise, we know that there is no collision for definite.
        else {
            return false;
        }
    }

    /*If we have gotten this far. Where we have looped through all of the perpendicular edges and not a single one of there projections had
    a gap in them. Then we know that the 2 polygons are colliding for definite then.*/
    return true;
}