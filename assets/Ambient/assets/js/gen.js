function getImage(url) {
	if (url == 'assets/Ambient demo1.jpg') {
		document.getElementById('home-text').style.display = 'block';
		document.getElementById('return-home').style.display = 'none';
		document.getElementById('volume').style.display = 'none';
	} else {
		document.getElementById('home-text').style.display = 'none';
		document.getElementById('return-home').style.display = 'block';
		document.getElementById('volume').style.display = 'block';
	}
	document.getElementById('background').src=url;
}

function getAudio(url) {
	document.getElementsByTagName('audio')[0].src = url;
}

function getAudio2(url) {
	audio.pause();
	audio = new Audio(url);
	audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	audio.play();
}

function changeVol(val) {
	document.getElementsByTagName("audio")[0].volume = val;
}


