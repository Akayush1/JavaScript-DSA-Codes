function longestword(a)
{
    const words=a.split(" ");
    let longestword="";
    for (let word of words)
    {
        if(word.length>longestword.length)
        {
            longestword=word;
            
        }

    }

    return longestword;
   

}

const a="I love Javascript";
console.log(longestword(a));
 
