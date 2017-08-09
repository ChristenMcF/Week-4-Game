$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var score = 0;
	var random = Math.floor(Math.random() * 101) + 19;
	var crystals = $('.crystal');

	$('#randomNumber h4').text(random);

	// Make our randomization a function for re use
	var makeRandom = function() {
		 return Math.floor((Math.random() * 101) + 1);
	};

	// Make our randomize of our crystals into a function so we can re use it
	var randomizeCrystals = function() {
		for (var i = 0; i < crystals.length; i++){
			var $this = crystals.eq(i);
			$this.val(makeRandom());
		}
	};

	var add = function(pts) {
		score += pts;

		$('#score h4').text(score);
	};

	var reset = function() {
	  score = 0;
	  random = makeRandom();
	  $("#score h4").text(score);
	  $("#randomNumber h4").text(random);
	  randomizeCrystals();
	};


	crystals.on('click', function() {
		var numberVal = Number ($(this).val());
		add(numberVal);
		if (score === random) {
			wins++;
			$('#wins h4').text(wins);
			reset();
		} else if (score > random) {
			losses++;
			$('#losses h4').text(losses);
			reset();
		}
	});

	// This only gets ran on page load.
	// Initialize our game
	reset();

});
