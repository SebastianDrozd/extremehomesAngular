







export default function start(url){

 
const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 400;
var background = new Image()
console.log("url",url)
background.src = url;

let context = canvas.getContext("2d");
background.onload = function(){
    context.drawImage(background,0,0);   
}
let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function change_color(element){
	draw_color = element.style.background;
}
function start(event) {
	is_drawing = true;
	context.beginPath();
	context.moveTo(event.clientX - canvas.getBoundingClientRect().left  , event.clientY - canvas.getBoundingClientRect().top);

	event.preventDefault();
}
function draw(event){
	if(is_drawing){
		context.lineTo(event.clientX - canvas.getBoundingClientRect().left, 
			event.clientY - canvas.getBoundingClientRect().top);
		context.strokeStyle = draw_color;
		context.lineWidth = draw_width;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.stroke();
	}
}
function stop(event){
	if(is_drawing){
		context.stroke();
		context.closePath();
		is_drawing= false;
		
	}


}


}
export function download(){
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
	console.log(image)
	window.location.href=image;
}
export function getImage(){
	var image = canvas.toDataURL("image/png")
	//image = new Image();
    //image.src = canvas.toDataURL("image/png")
	return image
}

export function setColor(){}
