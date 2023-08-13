// let age=18; 
// if (age>18){
//     console.log("Welcome to my site")
// }else if(age<18){
//     console.log("You are too young for this site, wait till you 18")
// }else{
//     console.log("Welcomeeee")
// }
// const animal='Dog';
// switch(animal){
//     case 'pig':
//         console.log("not pigs")
//         break;
//     case 'rat':
//         console.log("not cats")
//         break;00
//     case 'Dog':
//         console.log("Yes, a dog!")
// }




let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn")
let saveText = document.getElementById("save-text")


console.log(countEl)

let count = 0;

function increment(){
    count = count + 1;
    countEl.textContent = count
   
}

function save(){
    
let countStr = " " + count + " - "

   saveText.textContent+= countStr
   countEl.textContent = 0
   count = 0 

}


function clearEntries(){
    
    saveText.textContent = "Previous Entries: "
    countEl.textContent= 0
    count = 0
}































