let array=[2,29,1,74,56,99999];

function arr(a){
let mini= Infinity;
let max=-Infinity;
for(let i=0;i<a.length;i++)
{
 if(a[i]<mini)
    {
        mini=a[i];
    }  

}
return mini;
}
function arr2(a){
    let max=-Infinity;
    for(let i=0;i<a.length;i++)
    {
     if(a[i]>max)
        {
            max=a[i];
        }  
    
    }
    return max;
    }

console.log("Minimum is "+arr(array));
console.log("Maximum is "+arr2(array));