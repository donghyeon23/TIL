class Deque {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }
    push_front(item) {
        if (this.arr[0]) {
            for (let i = this.arr.length; i > 0; i--) {
                this.arr[i] = this.arr[i - 1];
            }
        }
        this.arr[this.head] = item;
        this.tail++;
    }
    push_back(item) {
        this.arr[this.tail++] = item;
    }
    top() {
        if (this.head >= this.tail) {
            return null;
        } else {
            const result = this.arr[this.head];
            return result;
        }
    }
    where(item) {
        if (this.head >= this.tail) {
            return null;
        } else {
            const newArr = this.arr.slice(this.head, this.tail);
            return newArr.indexOf(item);
        }
    }
    size() {
        if (this.head >= this.tail) {
            return null;
        } else {
            const newArr = this.arr.slice(this.head, this.tail);
            return newArr.length;
        }
    }
    pop_front() {
        if (this.head >= this.tail) {
            return null;
        } else {
            const result = this.arr[this.head++];
            return result;
        }
    }
    pop_back() {
        if (this.head >= this.tail) {
            return null;
        } else {
            const result = this.arr[--this.tail];
            return result;
        }
    }
}

const fs = require("fs");
let input = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map((v) => +v));

let spin = new Deque();
let [N, M] = input[0];
for (let i = 1; i <= N; i++) {
    spin.push_back(i);
}
let idx = 0;
let count = 0;
let mCount = 0;
while (mCount < M) {
    if (spin.top() === input[1][idx]) {
        spin.pop_front();
        mCount++;
        idx++;
    } else {
        if (spin.where(input[1][idx]) < spin.size() / 2) {
            while (spin.top() !== input[1][idx]) {
                spin.push_back(spin.pop_front());
                count++;
            }
        } else {
            while (spin.top() !== input[1][idx]) {
                spin.push_front(spin.pop_back());
                count++;
            }
        }
    }
}

// spin.push_back(1);
// spin.push_back(2);
// spin.pop_front();
// console.log(spin.arr);

console.log(count);
