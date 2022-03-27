class Heap {
    constructor() {
        this.items = [];
    }

    //값을 서로 바꾸는 메소드
    swap(index1, index2) {
        let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음
        this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장
        this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
    }

    //부모 인덱스 구하는 메소드
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    //왼쪽 자식 인덱스 구하는 메소드
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    //오른쪽 자식 인덱스 구하는 메소드
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    //부모 노드 구하는 메소드
    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    //왼쪽 자식 노드 구하는 메소드
    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    //오른쪽 자식 노드 구하는 메소드
    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드
    peek() {
        return this.items[0];
    }

    //힙의 크기(항목 개수)를 반환하는 메소드
    size() {
        return this.items.length;
    }
}

class MinHeap extends Heap {
    // MinHeap 클래스는 Heap 클래스를 상속받았으므로 Heap 클래스의 메소드를 모두 사용할 수 있다.
    bubbleUp() {
        let index = this.items.length - 1;
        while (
            this.parent(index) !== undefined &&
            this.parent(index) > this.items[index]
        ) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;
        while (
            this.leftChild(index) !== undefined &&
            (this.leftChild(index) < this.items[index] ||
                this.rightChild(index) < this.items[index])
        ) {
            let smallerIndex = this.leftChildIndex(index);
            if (
                this.rightChild(index) !== undefined &&
                this.rightChild(index) < this.items[smallerIndex]
            ) {
                smallerIndex = this.rightChildIndex(index);
            }
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }

    // 힙에 원소를 추가하는 함수
    add(item) {
        this.items[this.items.length] = item;
        this.bubbleUp();
    }

    // 힙에서 원소를 빼내는 함수
    // 최소 힙이라면 최솟값이 빠져나올 것이고 최대힙이라면 최댓값이 빠져나온다.
    poll() {
        let item = this.items[0]; // 첫번째 원소 keep
        this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사
        this.items.pop(); // 맨 마지막 원소 삭제
        this.bubbleDown();
        return item; // keep해둔 값 반환
    }
}

class MaxHeap extends MinHeap {
    //MaxHeap의 경우 MinHeap을 상속받았으므로 MinHeap의 모든 함수를 사용할 수 있지만 bubbleUp과 bubbleDown은 Overriding(재정의)하였다.
    bubbleUp() {
        let index = this.items.length - 1;
        while (
            this.parent(index) !== undefined &&
            this.parent(index) < this.items[index]
        ) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;
        while (
            this.leftChild(index) !== undefined &&
            (this.leftChild(index) > this.items[index] ||
                this.rightChild(index) > this.items[index])
        ) {
            let largerIndex = this.leftChildIndex(index);
            if (
                this.rightChild(index) !== undefined &&
                this.rightChild(index) > this.items[largerIndex]
            ) {
                largerIndex = this.rightChildIndex(index);
            }
            this.swap(largerIndex, index);
            index = largerIndex;
        }
    }
}

const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [n, ...arr] = input.map((v) => v);
let times = arr
    .sort((a, b) => {
        if (+a.split(" ")[1] < +b.split(" ")[1]) return -1;
        if (+a.split(" ")[1] === +b.split(" ")[1]) {
            if (+a.split(" ")[2] < +b.split(" ")[2]) {
                return -1;
            }
        }
    })
    .map((v) => v.split(" ").splice(1, 2))
    .map((v) => v.map((a) => +a));

let q = new MinHeap();
times.reverse();
q.add(times.pop()[1]);
let max_cnt = 1;
let j = times.length;

for (let i = 0; i < j; i++) {
    let closeTime = q.poll();
    let startTime = times[times.length - 1][0];
    console.log(closeTime, startTime);
    console.log(times);
    console.log(q);

    if (closeTime > startTime) {
        q.add(closeTime);
        q.add(times.pop()[1]);
        max_cnt++;
        console.log(q);
    } else {
        q.add(times[times.length - 1][1]);
        times.pop();
        console.log(q);
    }
}
console.log(q.size());
