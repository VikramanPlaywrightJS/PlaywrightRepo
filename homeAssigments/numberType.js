function numberType(){
    if(number>0){
        return "This is Positive Number"
    }else if (number<0) {
        return "This is negative Number"
    } else {
        return "This is Nuetral Number"
    }
    
}

let number=1.1;
console.log(numberType());