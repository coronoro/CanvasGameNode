import {Tuple} from "./tuple";
import {Coordinate} from "./coordinate";

export class Vector extends Tuple {

    length() {
        return Math.sqrt((this.x ^ 2 + this.y ^ 2))
    }

    multiply(scalar: number) {
        return new Vector(this.x * scalar, this.y * scalar)
    }

    difference(vector: Vector) {
        return new Vector(this.x - vector.x, this.y - vector.y)
    }

    normalize() {
        return new Vector(this.x / this.length(), this.y / this.length())
    }

    rotate(radiant: number) {
        return new Vector(Math.cos(radiant) * this.x - Math.sin(radiant) * this.y,
            Math.sin(radiant) * this.x + Math.cos(radiant) * this.y)
    }

    toCoordinate(): Coordinate {
        return new Coordinate(this.x, this.y)
    }

    angle(direction: Vector) {
        return Math.acos((this.x * direction.x + this.y * direction.y) / this.length() * direction.length())
    }
}


