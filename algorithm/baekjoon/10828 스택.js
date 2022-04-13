const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let T = +input[0];

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(item) {
        const node = new Node(item);
        if (this.head === null) {
            this.head = node;
            this.head.next = this.tail;
        } else this.tail.next = node;

        this.tail = node;
        this.size++;
    }

    length() {
        return this.size;
    }
    dequeue() {
        if (this.size === 0) {
            return -1;
        }
        let item = this.head.item;
        this.head = this.head.next;
        this.size--;
        if (this.size === 0) {
            this.tail = null;
        }
        return item;
    }

    popLeft() {
        const popedItem = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return popedItem;
    }

    print() {
        let current = this.head;
        console.log("start print");
        while (current) {
            console.log(current.item);
            current = current.next;
        }
    }

    front() {
        return this.head ? this.head.item : -1;
    }

    back() {
        return this.tail ? this.tail.item : -1;
    }
    empty() {
        return this.size ? 0 : 1;
    }
}

// class myQueue {
//     constructor() {
//         this.arr = [];
//         this.head = 0;
//     }

//     customAction(action) {
//         let method = action.split(" ")[0];

//         switch (method) {
//             case "push":
//                 let num = action.split(" ")[1];
//                 this.arr.push(+num);
//                 break;
//             case "pop":
//                 return this.head >= this.arr.length
//                     ? -1
//                     : this.arr[this.head++];
//             case "size":
//                 return this.arr.slice(this.head, this.arr.length).length;
//             case "empty":
//                 return this.head >= this.arr.length ? 1 : 0;
//             case "front":
//                 return this.head >= this.arr.length ? -1 : this.arr[this.head];
//             case "back":
//                 return this.head >= this.arr.length
//                     ? -1
//                     : this.arr[this.arr.length - 1];
//         }
//     }
// }

const queue = new Queue();
let answer = "";
for (let i = 1; i < T + 1; i++) {
    const method = input[i].split(" ")[0];

    switch (method) {
        case "push":
            const item = input[i].split(" ")[1];
            queue.push(item);
            break;
        case "pop":
            answer += queue.dequeue() + " ";
            break;
        case "front":
            answer += queue.front() + " ";
            break;
        case "back":
            answer += queue.back() + " ";
            break;
        case "empty":
            answer += queue.empty() + " ";
            break;
        case "size":
            answer += queue.length() + " ";
            break;
    }
}

console.log(answer.split(" ").join("\n"));
