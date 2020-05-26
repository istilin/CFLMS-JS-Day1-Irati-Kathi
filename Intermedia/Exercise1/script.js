var points = [
["Martin", 76],
["Klaus", 65],
["Thomas", 85],
["Marina", 93],
["David", 81]
];

var grade = ["F","D","C","B","A"];

var average = 0

for (i = 0; i < points.length; i++){
	average += points[i][1]
}

average /= points.length

points.push(["Average", average])

for (i = 0; i < points.length; i++ ) 
	{ 
	if (points[i][1] < 60) 
	{
	document.write(points[i][0] + " got " + points[i][1] + " points, so the grade is: " + grade[0] + "<br>")	
	}
	else if (points[i][1] < 70 && points[i][1] >= 60)
	{
	document.write(points[i][0] + " got " + points[i][1] + " points, so the grade is: " + grade[1] + "<br>")	
	}
	else if (points[i][1] < 80 && points[i][1] >= 70)
	{
	document.write(points[i][0] + " got " + points[i][1] + " points, so the grade is: " + grade[2] + "<br>")
	}
	else if (points[i][1] < 90 && points[i][1] >= 80)
	{
	document.write(points[i][0] + " got " + points[i][1] + " points, so the grade is: " + grade[3] + "<br>")
	}
	else if (points[i][1] < 100 && points[i][1] >= 90)
	{
	document.write(points[i][0] + " got " + points[i][1] + " points, so the grade is: " + grade[4] + "<br>")
	}
}


