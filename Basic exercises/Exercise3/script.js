var temp = Math.floor(Math.random() * 49) - 5

document.write(`<div class = temperature> <div> <h3> The temperature is:</h3> </div> <div> <p> ${temp}  </p></div> <div><h3> degrees C. </h3></div> </div>`);

if (temp <= 5) {
   document.write(`<div class = mess> <p>The weather is cold </p></div>`)
   document.write(`<div class = image> <img src = temp1.jpg> </div>`)
} else if (temp <= 15 && temp > 5) {
   document.write(`<div class = mess> <p>The weather is cool. </p></div>`)
   document.write(`<div class = image> <img src = temp2.jpg> </div>`)
} else if (temp <= 25 && temp > 15) {
   document.write(`<div class = mess> <p> The weather is optimal. </p></div>`)
   document.write(`<div class = image> <img src = temp3.jpg> </div>`)
} else if (temp <= 30 && temp > 25) {
   document.write(`<div class = mess> <p> The weather is warm.</p></div>`)
   document.write(`<div class = image> <img src = temp4.jpg> </div>`)
} else if (temp <= 35 && temp > 30) {
   document.write(`<div class = mess> <p> The weather is heat.</p></div>`)
   document.write(`<div class = image> <img src = temp5.jpg> </div>`)
} else if (temp <= 40 && temp > 35) {
   document.write(`<div class = mess> <p> The weather is extreme heat.</p></div>`)
   document.write(`<div class = image> <img src = temp6.jpg> </div>`)
} else if (temp > 40) {
   document.write(`<div class = mess> <p> The weather is HELL ON EARTH!!!</p></div>`)
   document.write(`<div class = image> <img src = temp7.jpg> </div>`)
}