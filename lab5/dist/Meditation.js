"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditation = void 0;
class Meditation {
    constructor(time) {
        this.time = time;
    }
    start() {
        const initialDuration = this.time;
        const timerId = setInterval(() => {
            console.log(this.time--);
            if (this.time == 0) {
                console.log("Jay Guru Dev");
                clearInterval(timerId);
                return;
            }
        }, initialDuration);
    }
}
exports.Meditation = Meditation;
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
