var firstDiv = document.getElementById('div1');
var secondDiv = document.getElementById('div2');

firstDiv.AddEventListener('mouseover',function() {
	firstDiv.setAttribute("style","background-color:red");
});

firstDiv.AddEventListener('mouseout',function() {
	firstDiv.setAttribute("style","background-color:blue");
});

document.body.addEventListener('keyup',function() {
	document.body.setAttribute("style", "background-color:red");
});

document.body.addEventListener('keydown',function() {
	document.body.setAttribute("style", "background-color:blue");
});