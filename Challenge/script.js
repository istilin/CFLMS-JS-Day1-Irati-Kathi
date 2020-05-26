array1 = [1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7]
arrlen = array1.length
array2 = []


for (j = 0; j < arrlen; j++){
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
	array2.unshift(array1[ind])
	array1.splice(ind, 1)
	
	
}

document.write(array2)