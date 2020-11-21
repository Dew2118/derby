name = prompt('Please enter your name ');
document.getElementById('output').innerHTML=name;

var time = new Date();
var dateandtime = time.toLocaleString();
document.getElementById('a').innerHTML = dateandtime;
console.log(name+dateandtime);

function myFunction() {
    console.log(document.getElementById('d1').value);
}
function no() {
	console.log("no");}
function yes() {
	console.log("yes");}


