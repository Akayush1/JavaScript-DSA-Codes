function removedupli(arr) {
    let arr2= arr.filter((value,index,arr)=>arr.indexOf(value)===index)
    return arr2;
    
}

let arr = [1,2, 2,3, 3, 4,5, 5];

console.log(removedupli(arr)); // Output: [5, 4, 3, 2, 1]

removedupli(arr);