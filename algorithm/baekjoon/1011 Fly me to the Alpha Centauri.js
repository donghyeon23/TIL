const fs = require("fs");
let [T, ...xy] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// for (let i = 0; i < T; i++) {
//     let count = 1;
//     let mov = 1;
//     let [x, y] = xy[i].split(" ").map((v) => +v);
//     while (x < y - 1) {
//         if ((x += mov) < y - 1) x += mov++;
//         else x += mov;
//         count++;
//     }
//     console.log(count);
// }

for (let i = 0; i < T; i++) {
    let [x, y] = xy[i].split(" ").map((v) => +v);
    let start = 0;
    let end = y - x;
    let k = 1;
    let start_count = 0;
    let end_count = 0;
    while (start < end) {
        start += k;
        start_count++;
        if (start >= end) break;

        end -= k;
        end_count++;
        if (start >= end) break;

        k++;
    }
    console.log(start_count + end_count);
}
