function reversearray(a)
{
    let sum=a.split("")
    for(let i=0;i<Math.floor(sum.length/2);i++)
    {
        let temp=sum[i]
        sum[i]=sum[sum.length-1-i];
        sum[sum.length-1-i]=temp;

    }
    return sum.join("");

}

const a="Ayushk, Kumar";
console.log(reversearray(a));
 