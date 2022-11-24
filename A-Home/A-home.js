function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
function imagePlacer() {
	var img = document.createElement('img');
	img.setAttribute("style", "position:absolute;");
	img.setAttribute("src", "empty-room.jpg");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}