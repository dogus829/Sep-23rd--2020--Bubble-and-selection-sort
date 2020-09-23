let nums = [5, 7, 9, 4, 1, 8, 25, 3];

let otherNums = [46, 2, 34, 90, 56, 27];

let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]

function bubbleSort(arr) {
    var len = arr.length;
    swap = 0;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                swap++;
                arr[j - 1] = arr[j];
                arr[j] = temp;
                swap++;
            }
        }
    }
    console.log(arr + swap);

}

bubbleSort(otherNums)