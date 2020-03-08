
let countDown = new Date('Mar 31, 2020 8:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;
      
      if (distance < 0) {
        clearInterval(x);
		document.getElementById('speakers').style.display = 'block';
		document.getElementById('speaker_countdonw').style.display = 'none';
      }
    }, second)
