let marks_12 =  [11,22,11,11,11,1111,111,11,11, null, false];
console.log(marks_12);
// in  arrays we can put different types of values 
console.log(marks_12[3]);
console.log(marks_12[1]);
console.log(marks_12[2]);
// to check how big an array is we use length property .length
console.log(marks_12.length)
// we can add the array whenver we want to add it
marks_12[12] = [222];
console.log(marks_12.length)
// adding a new value to the existing values
marks_12[2] = [221100];
console.log(marks_12[2]);
// PART 2   array elements
// converting an array into an string
let nu = [22,2,22,2,2,2];
let c = nu.toString() //now c is a string
console.log(typeof(c));
// .joint it joint the every element in the array with the input in he joint 
let d = nu.join("ak_");
console.log(d); // o/p => 22ak_2ak_22ak_
// pop() it removes last element from the array
//d.pop() // pop return the pop element
console.log(d);
// push return the newer  array length
// shift modify the original element

// delete is not a method it is an operator  using the delete opeartor does not chanhe the length of the array it remains the same 

let v = [22,44,55,33,2,1,4]
console.log(v.length)
delete v[3];
console.log(v,v.length); // the length of the array remain the same even after deletion

// oldcontact(new,newer,newest); additon of two or more arrays
let e = [22,1,3,3]
let q = v.concat(e);
console.log(q);

// sort helping in sorting it modify the original array it sort alphabetically
e.sort()
console.log(e); // it will sort according to the digits first word like 222 comes first than 3 because two which is the first element in 222 comes before the three
// it sort by taking the input as string

// reverse ult kr dega array ko

// splice and slice
// three arguments of splice 1st= konse index ,2nd = kinte elements ko remove krna h, 3rd = konse elements add krne hai
let w = [11,11,1,11,1,1111,11,111];
w.splice(2,4,101,112,11,"ok", 222);
console.log(w);










