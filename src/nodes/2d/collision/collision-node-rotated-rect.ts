import {Coordinate} from "../../../math/coordinate";
import {Vector} from "../../../math/vector";
import {CollisionNodeRect} from "./collision-node-rect";
import {satCollision} from "../../../utils/collision-functions/sat-collision";


export class CollisionNodeRotatedRect extends CollisionNodeRect {
    private _edges: Vector[] = []
    private _vertices: Coordinate[] = []
    collisionFunction = satCollision

    get vertices() {
        return this._vertices;
    }

    get edges() {
        return this._edges;
    }

    private calculateVertices() {
        const topLeft = this.position.substract<Coordinate>(new Coordinate(this.anchor.x * this.width, this.anchor.y * this.height))
        const topRight = new Coordinate(topLeft.x + this.width, topLeft.y);
        const bottomLeft = new Coordinate(topLeft.x, topLeft.y + this.height);
        const bottomRight = new Coordinate(topLeft.x + this.width, topLeft.y + this.height);

        return [
            this.rotatedCoordFromPivot(topRight),
            this.rotatedCoordFromPivot(bottomRight),
            this.rotatedCoordFromPivot(bottomLeft),
            this.rotatedCoordFromPivot(topLeft),
        ]
    }

    private rotatedCoordFromPivot(coord: Coordinate) {
        const vec = coord.substract<Coordinate>(this.position)
        // const vec = new Vector(coord.x - this.x, coord.y - this.y)
        const distance = this.position.getDisplacementVector(coord).length()
        // const distance = new Vector(this.x, this.y).distance(coord);
        const originalAngle = Math.atan2(vec.y, vec.x);

        // return coord;
        return this.position.add<Coordinate>(
            new Coordinate(
                distance * Math.cos(originalAngle + this.globalRotation()),
                distance * Math.sin(originalAngle + this.globalRotation())
            )
        )
    }

    private calculateEdges() {
        const edges = []
        let i = 0;
        while (i < this.vertices.length) {
            const a = this.vertices[i]
            const b = this.vertices[(i + 1) % this.vertices.length]

            edges.push(new Vector(a.x - b.x, a.y - b.y))
            i++;
        }
        return edges
    }

    update(delta: number) {
        super.update(delta);
        this._vertices = this.calculateVertices()
        this._edges = this.calculateEdges()
    }
}