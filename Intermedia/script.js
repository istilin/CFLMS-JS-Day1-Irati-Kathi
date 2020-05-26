var points = [
["martin", 76],
["Klaus", 65],
["Thomas", 85],
["Marina", 93],
["David", 81]
];

var grade = ["F","D","C","B","A"];

for (i = 0; i < points.length; i++ ) 
	{ 
	if (points[1][i] < 60) 
	{
	document.write(points[i][0] + " " + grade[0])	
	}
	else if (points[i][1] < 70)
	{
	document.write(grade[1])	
	}
	else if (points[i][1] < 80)
	{
	document.write(grade[2])
	}
	else if (points[i][1] < 90)
	{
	document.write(grade[3])
	}
	else if (points[i][1] < 100)
	{
	document.write(grade[4])
	}
}

console.log(points)

console.log(points.length)

