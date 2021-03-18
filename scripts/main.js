function klok () {
	
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var months = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
	var days = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');

	//gooit een 0 voor uren kleiner dan 10
	if (hours < 10){
		hours = '0' + hours;
	}
	//gooit een 0 voor minuten kleiner dan 10
	if (minutes < 10){
		minutes = '0' + minutes;
	}
	//gooit een 0 voor seconden kleiner dan 10
	if (seconds < 10){
		seconds = '0' + seconds;
	}

	if (seconds >= 20 && seconds <= 50){
		document.getElementById('cirkel').classList.remove('maan')
		document.getElementById('cirkel').classList.add('maanweg')
		document.getElementById('cirkel').classList.remove('maanweg')
		document.getElementById('cirkel').classList.add('zon')

	} else {
		document.getElementById('cirkel').classList.remove('zon')
		document.getElementById('cirkel').classList.add('zonweg')
		document.getElementById('cirkel').classList.remove('zonweg')
		document.getElementById('cirkel').classList.add('maan')
	}

	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;

	document.getElementById('month').innerHTML = months[today.getMonth()]; // Januari is maand 0
	document.getElementById('date').innerHTML = today.getDate();
	document.getElementById('day').innerHTML = days[today.getDay()]; // Zondag is dag 0

}

klok();
setInterval(klok, 1000);






//document.getElementById('clock').innerHTML = today.getMonth(); // Januari is maand 0
//document.getElementById('clock').innerHTML = today.getYear(); // Deprecated - niet gebruiken.
//document.getElementById('clock').innerHTML = today.getFullYear();
//document.getElementById('clock').innerHTML = today.getDay(); // Zondag is dag 0

//document.getElementById('clock').innerHTML = today.getDate() + '/' + (today.getMonth()+1);

;
//document.getElementById('clock').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];


//document.getElementById('clock').innerHTML = today.getTime();

