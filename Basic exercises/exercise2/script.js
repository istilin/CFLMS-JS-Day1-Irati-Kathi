var value = [1,7,-3,9];


var maxnum = 0

for (i = 0; i < value.length; i++) {
	if (i == 0){
		maxnum = value[i]
	}
	if (value[i]> maxnum){
		maxnum = value[i]
	}
}

document.write("Maximum value of the array is: " + maxnum)