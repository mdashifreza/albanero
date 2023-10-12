var reverse = function(x) {
    let isNegative = false;
    if(x<0){   
        isNegative=true;
        x = -x;
    }
    let lastDigit = 0, rev = 0;
    while(x != 0){
        lastDigit = x%10;
        rev = rev*10 + lastDigit;
        x = parseInt(x/10);
    }
    if(isNegative){
        rev = -rev;
    }
    if( rev > Math.pow(2,31)-1 || rev < Math.pow(-2,31) ){
        return 0;
    }
return rev;
};