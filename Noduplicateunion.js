function union(arr1,arr2)
{
    let myset=new set();
    myset.push([...arr1,...arr2]);
    return myset.size;
}


let arr1=[12,31,45,3, 5]
let arr2=[3, 5]
console.log(union(arr1,arr2));
