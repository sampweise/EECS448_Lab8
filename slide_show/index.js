var imgArr = ['jayhawk.png','kelce.png','logo.png','mahomes.png','tyreek.png'];
var imgInx = 0;

function next(){
	var myImg = document.getElementById("myImg");
	if(imgInx < 4)
	{
		imgInx = imgInx +1;
	}
	else
	{
		imgInx = 0;
	}
	myImg.src = "img/" + imgArr[imgInx];
}

function previous(){
	var myImg = document.getElementById("myImg");
	if(imgInx > 0)
	{
		imgInx = imgInx -1;
	}
	else
	{
		imgInx = 4;
	}
	myImg.src = "img/" + imgArr[imgInx];
}
