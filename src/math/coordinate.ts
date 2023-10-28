import {Vector} from "./vector";
import {Tuple} from "./tuple";

export class Coordinate extends Tuple {

    /**
     * returns the Vector that lies between two points
     * @param coordinate
     */
    getDisplacementVector(coordinate: Coordinate) {
        return new Vector(this.x - coordinate.x, this.y - coordinate.y)
    }

    multiply(absolute: number) {
        new Coordinate(this.x * absolute, this.y * absolute)
    }
}
