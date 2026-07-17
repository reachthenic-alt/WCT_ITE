function customSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Bubble Sort implementation
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Decrease n because the last element is already in place
        n--;
    } while (swapped);
    
    return arr;
}

// Example usage based on the image's sample array:
var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]; // Adjusted slightly to match the image's expected sample output elements
console.log(customSort(arr1).join(',')); 
// Output: -4,-3,1,2,3,5,6,7,8