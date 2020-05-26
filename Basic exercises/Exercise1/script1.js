var temp = Math.floor(Math.random() * 31) - 5

document.write("The temperature is: " + temp + " degrees C. ");

if (temp <= 10) {
   document.write("The weather is cold")
} else {
   document.write("The weather is moderate.")
}