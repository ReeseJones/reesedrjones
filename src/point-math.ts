export interface PointData {
    x: number;
    y: number;
}

function toString(this: PointData) {
    return `(${this.x}, ${this.y})`;
}

export function subtract<T extends PointData>(p1: T, p2: T) {
    return {
        x: p1.x - p2.x,
        y: p1.y - p2.y,
        toString
    };
}

export function add<T extends PointData>(p1: T, p2: T) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y,
        toString
    };
}

export function length<T extends PointData>(p1: T): number {
    return Math.sqrt(p1.x * p1.x + p1.y * p1.y);
}

export function direction<T extends PointData>(p1: T): number {
    return Math.acos(p1.x / length(p1));
}

export function normalized<T extends PointData>(p1: T) {
    const p1Length = length(p1);
    return {
        x: p1.x / p1Length,
        y: p1.y / p1Length,
        toString
    };
}

export function average<T extends PointData>(p1: T, p2: T) {
    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
        toString
    };
}
