array1 = [1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7]
array2 = [1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7]
array3 = []


for (j = 0; j < array2.length; j++){
	for (i = 0; i < array1.length - 1; i++){
		if (i == 0){
			max = array1[0]
			ind = 0
		}

		if (array1[i+1] > max){
			max = array1[i+1]
			ind = i+1
		}
		
	}
	array3.unshift(array1[ind])
	array1.splice(ind, 1)
	
	
}

document.write(array3)