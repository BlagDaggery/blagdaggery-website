var main = function() {
	var content = $(".content");

	$("button").click(function() {
		for (var i = 1; i < 51; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				content.append("<p><b>FizzBuzz!</b></p>");
			} else if (i % 5 === 0) {
		        content.append("<p><b>Buzz!</b></p>");
		    } else if (i % 3 === 0) {
		        content.append("<p><b>Fizz!</b></p>");
		    } else {
		        content.append("<p>" + i + "</p>");
		    }
		};
		$(this).toggle();
		content.append("<p>Refresh the page to see it again.</p>")
	});
}

$(document).ready(main);