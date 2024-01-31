import { add } from "./point-math";

const point1 = { x: 0, y: 3 };
const point2 = { x: -6, y: 32 };
const added = add(point1, point2);

console.log(`Webpage loaded! ${Date.now()} and this added is:${added}`);
