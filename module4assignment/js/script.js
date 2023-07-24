(function () {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	this.helloSpeaker = helloSpeaker;
})();
(function () {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
     this.byeSpeaker = byeSpeaker;
})();
(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	console.log(names[0]);
	for (var i=0; i < names.length; i++ /* fill in parts of the 'for' loop to loop over names array */) {
	  var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter == "j" /* fill in condition here */) {
		  byeSpeaker.speak(names[i]);
		} else {
		  helloSpeaker.speak(names[i]);
		}
	}
})();