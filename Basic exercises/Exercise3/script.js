var temp = Math.floor(Math.random() * 49) - 5

document.write(`<div id = "temptext"> <h3> The temperature is: </h3>  <p>${temp}</p>   <h3>degrees C. </h3></div>`);

if (temp <= 5) {
   document.write(`<div id = "tempmess"> The weather is cold </div>`)
} else if (temp <= 15 && temp > 5) {
   document.write(`<div id = "tempmess"> The weather is cool.`)

} else if (temp <= 25 && temp > 15) {
   document.write(`<div id = "tempmess"> The weather is optimal.`)

} else if (temp <= 30 && temp > 25) {
   document.write(`<div id = "tempmess"> The weather is warm.`)

} else if (temp <= 35 && temp > 30) {
   document.write(`<div id = "tempmess"> The weather is heat.`)
} else if (temp <= 40 && temp > 35) {
   document.write(`<div id = "tempmess"> The weather is extreme heat.`)
} else if (temp > 40) {
   document.write(`<div id = "tempmess"> The weather is HELL ON EARTH!!!`)
}