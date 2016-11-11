var main = function() {
	$("form").submit(function() {
		var value = $("input").val();
		var resultArea = "#resultArea";
		var clear = $("input").val("");

		if (value % 3 === 0 && value % 5 === 0) {
			var result = "<p><b>" + value + " = FizzBuzz!</b></p><p>That was awesome! Try another number if you like.</p>";
			$(result).prependTo(resultArea);
			return false;
			clear;
		} else if (value % 5 === 0) {
	        var result = "<p><b>" + value + " = Buzz!</b></p><p>Woah! So cool! Feel free to try it again.</p>";
			$(result).prependTo(resultArea);
			return false;
			clear;
	    } else if (value % 3 === 0) {
	        var result = "<p><b>" + value + " = Fizz!</b></p><p>Far out! You know you wanna try another number...</p>";
			$(result).prependTo(resultArea);
			return false;
			clear;
	    } else {
	        var result = "<p><b>" + value + "</b></p><p>Well that was boring...try again!</p>";
			$(result).prependTo(resultArea);
			return false;
			clear;
	    }
	});
};

$(document).ready(main);
