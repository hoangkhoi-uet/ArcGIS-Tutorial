// var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// console.log(arr[1])




// console.log(count);


var count1 = 0;

var count = [];

function cousinPrimePairs(l, r) {
    for (i = l; i <= r; i++) {
        if (check(i) && i >= 2) {
            count.push(i);
        }
    }



    for (var i = 0; i < count.length; i++) {
        for (var j = i + 1; j < i + 3; j++) {
            if (count[j] - count[i] == 4) {
                count1++;
            }
        }
    }
    return count1;

}

function check(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(cousinPrimePairs(1, 11));