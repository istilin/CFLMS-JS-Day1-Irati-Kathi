var temp = Math.floor(Math.random() * 45) - 5

document.write(`<div id = "temptext"> <h3> The temperature is: </h3>  <p>${temp}</p>   <h3>degrees C. </h3></div>`);

if (temp <= 10) {
   document.write(`<div id = "tempmess"> The weather is cold </div>`)
} else if (temp <= 32) {
   document.write(`<div id = "tempmess"> The weather is moderate.`)

} else {
   	document.write(`<div id = "tempmess"> The weather is hot`)
   }




		
	

	