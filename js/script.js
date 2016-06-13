function changer() {
	var element = document.getElementById("appear");
	var text = "Thank you for agreeing to wear your seatbealt for my life:)";
	if (element.innerHTML == "") {
		element.innerHTML = text;
	}
	else {
		element.innerHTML = "";
	}
}
