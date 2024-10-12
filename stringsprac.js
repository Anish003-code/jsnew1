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

  let ab = [12,11,100,20,30,1,44]
  let c  = ab.filter((a) => {
    return a%10 == 0
  })
  console.log(c)
  let vb =  [1,2,3,4];
  let v  = prompt("enter the numbers");
  v = Number.parseInt(v);
  ab.push(v);
  console.log(ab)
