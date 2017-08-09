$(document).ready(function() {
	
	var wins = 0;
	var losses = 0;
	var score = 0;
	var crystals = $('.crystal');
	var random = Math.floor(Math.random() * 101) + 19;

	$('#randomNumber').text(random);
		
		var makeRandom = function () {
		return Math.floor(Math.random() * 101) + 19;
	}
	
	var randomizeCrystals = function(){
			var btn1 = Math.floor(Math.random() * 11) + 1;
  		var btn2 = Math.floor(Math.random() * 11) + 1;
 			var btn3 = Math.floor(Math.random() * 11) + 1;
  		var btn4 = Math.floor(Math.random() * 11) + 1;
	}
	
	// var randomizeCrystals = function() {
		// for (var i = 0; 1 < crystals.length; i++){
			// var $this = crystals.eq(i);
			// $this.val(makeRandom());
		// }
	// };
	
	var add = function(pts) {
		score += pts;
		$('#score').text(score);
		$('#randomNumber').text(random);
		randomizeCrystals();
	};
	var resetGame = function(){
	      random = Math.floor(Math.random() * 101) + 19;
	      	console.log(random)
	      $('#randomNumber').text(random);
	      	btn1 = Math.floor(Math.random() * 11) + 1;
	  			btn2 = Math.floor(Math.random() * 11) + 1;
	  			btn3 = Math.floor(Math.random() * 11) + 1;
	  			btn4 = Math.floor(Math.random() * 11) + 1;
	      		score = 0;
	      $('#score').text(score);
	};
	var won = function() {
  	wins++;
  	resetGame();
	};

	var lost = function() {
  	losses++;
  	resetGame();
	};

	
	// var reset = function() {
		// score = 0;
		// random = makeRandom();
		// $('#score').text(score);
	// }
	

	// $('#wins').text(wins);
	// $('#losses').text(losses);
	

	// $("#score").click = (function() {
		// score++;
// })

// resetGame();

	$('#btn1').on('click', function () {
		score = score + btn1;
			console.log("score = " + score);
		$("#score").text(score);
			if (score === randomNumber) {
				won();
		} else if (score > randomNumber) {
			lost();
		}
	})

	$('#btn2').on('click', function () {
		score = score + btn2;
			console.log("score = " + score);
		$("#score").text(score);
			if (score === randomNumber) {
				won();
		} else if (score > randomNumber) {
			lost();
		}
	})

	$('#btn3').on('click', function () {
		score = score + btn3;
			console.log("score = " + score);
		$("#score").text(score);
			if (score === randomNumber) {
				won();
		} else if (score > randomNumber) {
			lost();
		}
	})

	$('#btn4').on('click', function () {
		score = score + btn4;
			console.log("score = " + score);
		$("#score").text(score);
			if (score === randomNumber) {
				won();
		} else if (score > randomNumber) {
			lost();
		}	})
 

resetGame();

});



