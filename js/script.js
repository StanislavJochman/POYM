const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
let countDown0 = new Date('Feb 27, 2020 15:00:00').getTime();
let countDown1 = new Date('Feb 27, 2020 15:10:00').getTime();
let countDown2 = new Date('Feb 27, 2020 15:40:00').getTime();
let countDown3 = new Date('Feb 27, 2020 16:00:00').getTime();
let countDown4 = new Date('Feb 27, 2020 16:30:00').getTime();
let countDown5 = new Date('Feb 27, 2020 17:00:00').getTime();
let countDown6 = new Date('Feb 27, 2020 17:30:00').getTime();
let countDown7 = new Date('Mar 1, 2020 18:00:00').getTime();
let countDown8 = new Date('Feb 27, 2020 19:45:00').getTime();
let countDown9 = new Date('Feb 27, 2020 19:50:00').getTime();

x = setInterval(function() {
  let now = new Date().getTime();
  document.getElementById('curr_time').innerText = new Date().toLocaleTimeString('en-GB');
  if (countDown0 - now < 0) {
    $('.list-hours li').eq(0).addClass('today');
  }
  if (countDown1 - now < 0) {
    $('.list-hours li').eq(1).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
  }
  if (countDown2 - now < 0) {
    $('.list-hours li').eq(2).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
  }
  if (countDown3 - now < 0) {
    $('.list-hours li').eq(3).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
  }
  if (countDown4 - now < 0) {
    $('.list-hours li').eq(4).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
    $('.list-hours li').eq(3).removeClass('today');
  }
  if (countDown5 - now < 0) {
    $('.list-hours li').eq(5).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
    $('.list-hours li').eq(3).removeClass('today');
    $('.list-hours li').eq(4).removeClass('today');
  }
  if (countDown6 - now < 0) {
    $('.list-hours li').eq(6).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
    $('.list-hours li').eq(3).removeClass('today');
    $('.list-hours li').eq(4).removeClass('today');
    $('.list-hours li').eq(5).removeClass('today');
  }
  if (countDown7 - now < 0) {
    $('.list-hours li').eq(7).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
    $('.list-hours li').eq(3).removeClass('today');
    $('.list-hours li').eq(4).removeClass('today');
    $('.list-hours li').eq(5).removeClass('today');
    $('.list-hours li').eq(6).removeClass('today');
  }
  if (countDown8 - now < 0) {
    $('.list-hours li').eq(8).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
    $('.list-hours li').eq(3).removeClass('today');
    $('.list-hours li').eq(4).removeClass('today');
    $('.list-hours li').eq(5).removeClass('today');
    $('.list-hours li').eq(7).removeClass('today');
    $('.list-hours li').eq(6).removeClass('today');
  }
  if (countDown9 - now < 0) {
    $('.list-hours li').eq(9).addClass('today');
    $('.list-hours li').eq(0).removeClass('today');
    $('.list-hours li').eq(1).removeClass('today');
    $('.list-hours li').eq(2).removeClass('today');
    $('.list-hours li').eq(3).removeClass('today');
    $('.list-hours li').eq(4).removeClass('today');
    $('.list-hours li').eq(5).removeClass('today');
    $('.list-hours li').eq(6).removeClass('today');
    $('.list-hours li').eq(7).removeClass('today');
    $('.list-hours li').eq(8).removeClass('today');
  }


}, second)