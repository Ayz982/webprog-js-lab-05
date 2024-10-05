function slugify(title){
    let result = "";
    for(let i = 0; i < title.length; i++){
        if(title[i] == " "){
            result += "-";
        } else{
            result += title[i];
        }
    }
    return result.toLowerCase();
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"  
console.log(slugify("English for developer")); // "english-for-developer"  
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"