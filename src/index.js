// get todays date 
let today = new Date();
console.log(today);

// DOM manipulation
const body = document.body;
const h5 = document.createElement("h5");
body.append(h5);
h5.innerText = today;