// Write a JavaScript function to get all possible subsets of length 3 of the given
// array. Assume that all elements in the array are unique.
//Դավիթ ջան անցած տնաինի ժամանակ ես մեկը չէի հասցրել գրել, հիմա լուծեցի ուղղակի ոնց անում եմ չի ստացվում N դեպքի համար,
/եթե այսօր չստացվի Recursion-ով շուտ կգրեմ


let array = [5, 9, 23, 0, -2, -1];
let globalArray = [];

function uniqueArray( ){
  for(let i = 0; i<=array.length; i++){
  let  k=1;
    for(let n=2; n<array.length; ){
      let localeArray = [];
        localeArray.push(array[0]);
        localeArray.push(array[k]);
        localeArray.push(array[n]);
        globalArray.push(localeArray); 
        ++n;
      if(n >= array.length){
       ++k;
       n=k+1;
      }
     }
    array.shift();
  }
  return globalArray
}

let firstTest= uniqueArray([5, 9, 23, 0, -2, -1], [])
console.log(firstTest)
