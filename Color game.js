var numberofsquares=6;
var colors= generateColors(numberofsquares);

var squares= document.querySelectorAll(".square");
var pickedColor=pickColor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");

var easybutton=document.querySelector("#easybtn");
var hardbutton=document.querySelector("#hardbtn");



easybutton.addEventListener("click",function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	numberofsquares=3;
	colors=generateColors(numberofsquares);
	pickedColor=pickColor();
	colordisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})

hardbutton.addEventListener("click",function(){
	hardbutton.classList.add("selected");
	easybutton.classList.remove("selected");
	numberofsquares=6;
	colors=generateColors(numberofsquares);
	pickedColor=pickColor();
	colordisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})

colordisplay.textContent = pickedColor;

resetbutton.addEventListener("click",function(){
	colors= generateColors(numberofsquares);
	pickedColor=pickColor();
	colordisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor= "steelblue";
	resetbutton.textContent="New colors";
	messagedisplay.textContent="";
})

for(var i=0; i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;

		if(clickedColor===pickedColor){
			messagedisplay.textContent="Correct";
			changeColors();
			h1.style.backgroundColor= clickedColor;
			resetbutton.textContent="Play again?";
		}
		else{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try again";
		}
	});
}

function changeColors(){
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=pickedColor;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		var r= Math.floor(Math.random() * 256);
		var g= Math.floor(Math.random() * 256);
		var b= Math.floor(Math.random() * 256);

		arr.push("rgb("+ r+", "+ g+", "+ b+")");
	}
	return arr;
}