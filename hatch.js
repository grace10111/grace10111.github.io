function playSound() {
	var ding = new Audio('ding.mp3');
	ding.play();
}

//primary countdown function
function countdown(minutes, seconds) {
	counter = true; //connects with function reset timer
	var time = minutes*60 + seconds;
	var interval = setInterval(function() {
    var el = document.getElementById('timer');
    //if reset is pressed, end counter
    if (counter == false) {
    	clearInterval(interval);
    	return;
    }
    //if the time is 0, end counter
    if(time == 0) {
    	playSound();
        setTimeout(function() {
            el.innerHTML = "Time's up!";
        }, 10);
        clearInterval(interval);
    }
    //display minutes/seconds
    var minutes = Math.floor( time / 60 );
    if (minutes < 10) minutes = "0" + minutes;
    	var seconds = time % 60;
    if (seconds < 10) seconds = "0" + seconds; 
    	var text = minutes + ':' + seconds;
    el.innerHTML = text;
    time--;
	}, 1000);
}

function resetTimer() {
	counter = false;
	document.getElementById('timer').innerHTML = "00:00";
}

//creates random letter within 'scattegories' alphabet
function randLetter() {
	alphabet = 'ABCDEFGHIJKLMNOPRSTW'
	var letterSpace = document.getElementById('randletter');

	randLetterCreated = alphabet[Math.floor(Math.random() * alphabet.length)];

	letterSpace.innerHTML = randLetterCreated
}
