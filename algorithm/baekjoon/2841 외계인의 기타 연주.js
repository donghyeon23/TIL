const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n');

let N = +input[0].split(' ')[0];
let idx = 1;

class guitar {
    constructor() {
        this.string1 = [];
        this.string2 = [];
        this.string3 = [];
        this.string4 = [];
        this.string5 = [];
        this.string6 = [];
        this.moveFinger = 0;
    }

    Melody(stringFret) {
        let string = +stringFret.split(' ')[0]
        let fret = +stringFret.split(' ')[1]
        let fingers = 0;
        switch (string) {
            case 1:
                fingers = this.string1.length
                if (fingers === 0) {
                    this.string1.push(fret)
                    this.moveFinger++
                }
                else {
                    while (this.string1[fingers - 1] > fret) {
                        this.string1.pop();
                        this.moveFinger++;
                        fingers = this.string1.length;
                    }
                    if (this.string1[fingers - 1] !== fret) {
                        this.string1.push(fret);
                        this.moveFinger++;
                    }
                }
                break;
            case 2:
                fingers = this.string2.length
                if (fingers === 0) {
                    this.string2.push(fret)
                    this.moveFinger++
                }
                else {
                    while (this.string2[fingers - 1] > fret) {
                        this.string2.pop();
                        this.moveFinger++;
                        fingers = this.string2.length;
                    }
                    if (this.string2[fingers - 1] !== fret) {
                        this.string2.push(fret);
                        this.moveFinger++;
                    }
                }
                break;
            case 3:
                fingers = this.string3.length
                if (fingers === 0) {
                    this.string3.push(fret)
                    this.moveFinger++
                }
                else {
                    while (this.string3[fingers - 1] > fret) {
                        this.string3.pop();
                        this.moveFinger++;
                        fingers = this.string3.length;
                    }
                    if (this.string3[fingers - 1] !== fret) {
                        this.string3.push(fret);
                        this.moveFinger++;
                    }
                }
                break;
            case 4:
                fingers = this.string4.length
                if (fingers === 0) {
                    this.string4.push(fret)
                    this.moveFinger++
                }
                else {
                    while (this.string4[fingers - 1] > fret) {
                        this.string4.pop();
                        this.moveFinger++;
                        fingers = this.string4.length;
                    }
                    if (this.string4[fingers - 1] !== fret) {
                        this.string4.push(fret);
                        this.moveFinger++;
                    }
                }
                break;
            case 5:
                fingers = this.string5.length
                if (fingers === 0) {
                    this.string5.push(fret)
                    this.moveFinger++
                }
                else {
                    while (this.string5[fingers - 1] > fret) {
                        this.string5.pop();
                        this.moveFinger++;
                        fingers = this.string5.length;
                    }
                    if (this.string5[fingers - 1] !== fret) {
                        this.string5.push(fret);
                        this.moveFinger++;
                    }
                }
                break;
            case 6:
                fingers = this.string6.length
                if (fingers === 0) {
                    this.string6.push(fret)
                    this.moveFinger++
                }
                else {
                    while (this.string6[fingers - 1] > fret) {
                        this.string6.pop();
                        this.moveFinger++;
                        fingers = this.string6.length;
                    }
                    if (this.string6[fingers - 1] !== fret) {
                        this.string6.push(fret);
                        this.moveFinger++;
                    }
                }
                break;
        }
    }
}

let alienSong = new guitar();

for (let i = 0; i < N; i++) {
    alienSong.Melody(input[idx++]);
}

console.log(alienSong.moveFinger)
