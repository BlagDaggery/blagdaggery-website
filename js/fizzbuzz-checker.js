var main = function() {
	$("form").submit(function() {
		var value = $("input").val();
		var resultArea = "#resultArea";

		if (value % 3 === 0 && value % 5 === 0) {
			var result = "<p><b>FizzBuzz!</b></p><p>That was awesome! Try another number if you like.</p>";
			$(result).appendTo(resultArea);
		} else if (value % 5 === 0) {
	        var result = "<p><b>Buzz!</b></p><p>Woah! So cool! Feel free to try it again.</p>";
			$(result).appendTo(resultArea);
	    } else if (value % 3 === 0) {
	        var result = "<p><b>Fizz!</b></p><p>Far out! You know you wanna try another number...</p>";
			$(result).appendTo(resultArea);
	    } else {
	        var result = "<p>" + value + "</p><p>Well...that was boring...try again!</p>";
			$(result).appendTo(resultArea);
	    }
	});
};

$(document).ready(main);
