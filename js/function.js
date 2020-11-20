name = prompt('Please enter your name ');
document.getElementById('output').innerHTML=name;
var time = new Date();
var dateandtime = time.toLocaleString();
document.getElementById('a').innerHTML = dateandtime;
console.log(name+dateandtime);