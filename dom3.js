let b = document.body
console.log("first child of b is", b.firstChild); // text; this is showing
// text because after the body we have space and this is reson this is showing text 
console.log("first element child of b is ", b.firstElementChild); // nav; this is the first elemnt that is present in the body thiss
// this ignors the space in between.
