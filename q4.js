var largestNumber = function(nums) {
    var compare = function(a,b){
        const ab = a.toString() + b.toString();
        const ba = b.toString() + a.toString();
        return ba.localeCompare(ab); 
    }
    let result = nums.sort(compare);
    let largest = result.join('');
    if(largest[0] == 0){
        return "0";
    }
return largest;
};