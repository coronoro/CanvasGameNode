export class Tuple {
    x: number = 0
    y: number = 0

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distance(other: Tuple): number {
        return Math.sqrt((other.x - this.x) ^ 2 + (other.y - this.y) ^ 2)
    }

    add<T extends Tuple>(other: Tuple) {
        return new Tuple(this.x + other.x, this.y + other.y) as T
    }

    substract<T extends Tuple>(other: Tuple) {
        return new Tuple(this.x - other.x, this.y - other.y) as T
    }
}
