/* Date */
var sdTime = document.getElementById('time');
var sdDate = document.getElementById('date');
nDate();

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function nDate() {
  var d = new Date();

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  sdTime.innerHTML = pad(d.getHours(), 2) + ' : ' + pad(d.getMinutes(), 2) + ' : ' + pad(d.getSeconds(), 2);
  sdDate.innerHTML = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + pad(d.getDate(), 2);
  setTimeout(nDate, 1000);
}

/* Welcome cube */
var cube = document.querySelector('.cube');
var sideIndex = 0;
var cubeSides = ["front","right","back","left"];
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  if (sideIndex == cubeSides.length) {sideIndex = 0;}

  var showClass = 'show-' + cubeSides[sideIndex];
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  sideIndex++;

  setTimeout(changeSide,3000);
}

changeSide();
