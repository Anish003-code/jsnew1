// loops in the array
let num = [22,1,4,2,1]
for(let i = 0; i < 3; i++){
    console.log(num[i])
}
// map array 
let array = [1,2,3,4,5,11]
let newarray = array.map((num)=>{
    return num *num *num
})
console.log(newarray);
console.log(array);
 let oldarray = [2,3,4,5,5]
 for(let i = 0; i < 4; i++){
    console.log(oldarray[i*i]);
 }
 // using the for each loop
 oldarray.forEach((num)=> {
    console.log(num*num)
 });
 // it makes array from the string
 let namee = "anish"
  let a = Array.from(namee);
  console.log(a[3]);
