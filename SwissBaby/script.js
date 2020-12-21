// // const weeks = document.getElementById('weeks');
// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');
// const countdown = document.getElementById('countdown');
// const year = document.getElementById('year');
// const loading = document.getElementById('loading');

// const currentYear = new Date().getFullYear();

// const babyTime = new Date(`December 04 2020 00:13:00`);

// // Set background year
// // year.innerText = currentYear +1;

// // Update countdown time

// function updateCountdown() {
//   const currentTime = new Date();
//   const diff = babyTime - currentTime;

// //   const w = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);
//   const d = Math.floor(diff / 1000 / 60 / 60 / 24) ;
//   const h = Math.floor((diff / 1000 / 60 / 60) % 24);
//   const m = Math.floor(diff / 1000 / 60) % 60;
//   const s = Math.floor(diff / 1000) % 60;


//   // Add values to DOM
// //   weeks.innerHTML = w;
//   days.innerHTML = d;
//   hours.innerHTML = h < 10 ? '0' + h: h;
//   minutes.innerHTML = m < 10 ? '0' + m: m;
//   seconds.innerHTML = s < 10 ? '0' + s: s;

// }

// // Show spinner before countdown
// setTimeout(() => {
//   loading.remove();
//   countdown.style.display = 'flex';
// }, 1000);

// // Run every seconds
// setInterval(updateCountdown, 1000);

window.onload = function() {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  countUpFromTime("Dec 4, 2020 00:07:23", 'countup1'); // ****** Change this line!
};
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}


// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);
