'use strict';

function toString() {
    return `(${this.x}, ${this.y})`;
}
function add(p1, p2) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y,
        toString
    };
}

const point1 = { x: 0, y: 3 };
const point2 = { x: -3, y: 32 };
const added = add(point1, point2);
console.log(`Webpage loaded! ${Date.now()} and this added is:${added}`);
//# sourceMappingURL=bundle.js.map
