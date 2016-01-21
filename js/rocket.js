var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+state;
		clearInterval(timer);
		countdownNumber = 10;

	if (state == 1) {
		document.getElementById('nervous').className = 'nervous';
	}

	if (state == 1) {
		document.getElementById('cant-wait').className = 'cant-wait';
	}	


		// countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber > 5 && countdownNumber <= 7) {
				// be excited

				document.getElementById('nervous').className = 'nervous show';			
			} else {
				document.getElementById('nervous').className = 'cant-wait';
			}

			if (countdownNumber > 1 && countdownNumber <= 4) {
				// be excited

				document.getElementById('cant-wait').className = 'cant-wait show';			
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber <= 0) {
					changeState(3);			
			};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function ()
			{
				var randomNumber = Math.round(Math.random()*10)

					console.log('randomNumber:', randomNumber)

					//success
				if (randomNumber > 3) {
					changeState(4);
					//do something
				} else {
					changeState(5);
					//do something else
				}
		}, 2000);
	};

	}