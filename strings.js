    /*let a = 22;
    console.log(a);
    let namee = "ANISH";
    console.log(namee.length);
    // strings can be created using double or single quotes.
    // by using the lower code we can get any particular  word in the name
    console.log(namee[2]);// this will give the third word in my name counting starts fromm 0

    //  TOPIC => Template literals

    let boy1 = "anish"
    let boy2 = "kumar"
    let sentence = `${boy1} is a friend of ${boy2}` // hm kbhi bhi variable ki value ko chnage kr skte hai.
    console.log(sentence);
    boy2 = "kumari"
    sentence = `${boy1} is a friend of ${boy2}` // yha p dubara likhna pda tb jaake value change hui.
    console.log(sentence);

    // TOPIC ==> escape sequence char
    // supppose someone want to print the bana'na but the js misunderstood the comma symbol and end the quotes thus to avoid this we use escape sequences
    // eg.
    let fruit = 'ban\'ana'
    console.log(fruit);
    // here the escape seq is \'
*/
    // PART 2

let namee = "anish"
console.log(namee.length) // prints the number of letters it has,using escape seq char it will add 1 more
console.log(namee.toUpperCase()); // this will print the name in upper case
console.log(namee.toLowerCase()); // this will convert into lower case
// .slice
console.log(namee.slice(2,5));// here it will slice the words from 2nd inded upto the 4th index , rint only the sliced value
console.log(namee.slice(2)); // from the 2nd index upto the las
//.replace
let a = "anish kumar"
let b = a.replace("kumar","hero"); // word senstivive do not replace if the k is in capital letters
console.log(b);
// adding the strings  /concat() meaning phle wale string me concat k andr aur baad me aaane wale ko jod do usi order me 
let c = "bhola"
console.log(namee.concat("is a smart boiii",c,"aur kya hal chal"));
//o/p => anish is a smart boiibholaaur kya hal chal
//  to remove the spaces 
let v = "      ak      "
console.log(v.trim());

let s = "anishlol"
for(let v = 0; v < s.length; v++){
    console.log(s[v]);
}
// strings cannot be changes in between 




