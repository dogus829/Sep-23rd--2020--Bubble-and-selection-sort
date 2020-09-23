let nums = [5, 7, 9, 4, 1, 8, 25, 3];

let otherNums = [46, 2, 34, 90, 56, 27];

let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]


function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        let min = i; //  storing the index of minimum element

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j; // updating the index of minimum element
            }
        }

        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.log(arr);
}

selectionSort(otherNums)