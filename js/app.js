$(document).ready(function () {
	function currentTime() {
		var time = new Date();
		var hour = time.getHours();
		var mins = time.getMinutes();
		var secs = time.getSeconds();

		var clock = document.getElementById('clock');
		clock.innerText = hour +":"+ mins + secs;
	}

	currentTime();
});