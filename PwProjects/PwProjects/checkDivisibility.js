let arr = [27, 9, 3, 8, 6, 11, 33, 12];

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
        continue;
    }
    if (num % 3 === 0) {
        console.log(num);
    }
}
