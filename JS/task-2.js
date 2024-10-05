function isValidIndex(index, array){
    if(index < array.length){
        return true;
    } else{
        return false;
    }
}
function makeArray(firstArray, secondArray, maxLength){
    const newArray = [];
    for(let i = 0; i < maxLength; i++){
        if(i < firstArray.length){
            if(isValidIndex(i, firstArray)){
                newArray.push(firstArray[i]);
            } else{
                break;
            }
        } else {
            if(isValidIndex(i- firstArray.length, secondArray)){
                newArray.push(secondArray[i - firstArray.length]);
            } else{
                break;
            }
        }
    }
    return newArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []