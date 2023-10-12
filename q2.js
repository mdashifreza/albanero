const groupAnagrams = (strs) => {
    const anagramsObj = {};
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (anagramsObj[sortedStr]) {
            anagramsObj[sortedStr].push(str);
        } else {
            anagramsObj[sortedStr] = [str];
        }
    }

    // for(let i in anagramsObj){
    //     if(i.hasOwnProperty){
    //         console.log(anagramsObj[i])
    //     }
    // };

return Object.values(anagramsObj)
};

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result1 = groupAnagrams(strs1);
console.log(result1);

const strs2 = [""];
const result2 = groupAnagrams(strs2);
console.log(result2);