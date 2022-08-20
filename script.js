//  JAVASCRIPT FILE

function colorChange()
{
var red = document.getElementById('red').value;
var green = document.getElementById('green').value;
var blue = document.getElementById('blue').value;

document.querySelector('.color-container').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
document.querySelector('.rgb-value').innerHTML = 'rgb('+red+','+green+','+blue+')';

}