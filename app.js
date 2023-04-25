const d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekdays = ["Min","Sen","Sel","Rab","Kam","Jum","Sab"];

let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();
let day = weekdays[d.getDay()];

function startTime() {
  const d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('time').innerHTML =  hour + ":" + min + ":" + sec;
  setTimeout(startTime, 1000);
}

function dateCheck() {
	document.getElementById('date').innerHTML =  day + ", " + month + " " + date + " " + year;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}