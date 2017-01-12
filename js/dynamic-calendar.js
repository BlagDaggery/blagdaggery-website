//var distanceLearningColor = $accent-1;
//var weekendResidenciesColor = $accent-2;
//var globalResidencyColor = $accent-3;
//var distanceLearningSessions = 7;
//var location = $('#location').val();
//var format = $('#format').val();
//var residency = $('#residency').val();
//var distance = $('#distance');

var daysLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currentDate = new Date();

function Calendar(month, year) {
	this.month = (isNaN(month) || month == null) ? currentDate.getMonth() : month;
	this.year = (isNaN(year) || year ==null) ? currentDate.getFullYear() : year;
	this.html = '';
}


var MIN_CAL_ROWS = 9;
var DAYS_PER_WEEK = 7;

Calendar.prototype.generateHTML = function() {
	// get first day of month
	var firstDay = new Date(this.year, this.month, 1);
	var startingDay = firstDay.getDay();

	// find number of days in month
	var monthLength = daysInMonth[this.month];
	var prevMonthLength = daysInMonth[this.month - 1];

	// compensate for leap year
	if(this.month === 1) {
		if((this.year % 4 == 0 && this.year % 100 !=0) || this.year % 400 ==0) {
			monthLength = 29;
		}
	}

	// do the header
	var monthName = monthsLabels[this.month];
	var html = '<table class="calendar">';
	html += '<tr><th colspan="7">';
	html += monthName + '&nbsp;' + this.year;
	html += '</th></tr>';
	html += '<tr>';
	for (var i = 0; i <= 6; i++){
		html += '<th>';
		html += daysLabels[i];
		html += '</th>';
	}
	html += '</tr><tr>';

	// start filling in the days
	var day = 1;
	var nextMonthDayCounter = 1;
	var prevMonthDayCounter = prevMonthLength - startingDay + 1;

	for (var i = 0; i < MIN_CAL_ROWS; i++) {
		for (var j = 0; j < DAYS_PER_WEEK; j++) {
			console.log('day: ', day, 'monthlength: ', monthLength, 'startingday: ', startingDay);


			if (i === 0 && j < startingDay) {
				console.log('painting last months cell');
				html += '<td class="adjacent-month">' + prevMonthDayCounter + '</td>';
				prevMonthDayCounter ++;
			}


			if (day <= monthLength && (i > 0 || j >= startingDay)) {
				console.log('painting cell');
				html += '<td>' + day + '</td>';
				day++;
			}

			if (day > monthLength && j < 6) {
				html += '<td class="adjacent-month">' + nextMonthDayCounter + '</td>';
				console.log(nextMonthDayCounter, j);
				nextMonthDayCounter ++;
			}
		}

		// stop making rows if we've run out of days
		if (day > monthLength) {
			break;
		} else {
			html += '</tr><tr>';
		}
	}

	html += '</tr></table>';

	this.html = html;
}

Calendar.prototype.getHTML = function() {
	return this.html;
}


var month1 = new Calendar(7,2016);
var month2 = new Calendar(8,2016);
month1.generateHTML();
month2.generateHTML();
document.write(month1.getHTML());
document.write(month2.getHTML());

/*
functions for highlighting different days
distanceLearning {
	highlight distance learning days based on cville vs dc
	count the number of Tuesdays and Thursdays and highlight every:
		- X & Y Tuesday
		- X & Y Thursday
}

weekendResidencies {
	highlight weekend residencies based on Cville vs DC
	count the number of weekends, and highlight the X weekend
}

highlightGlobalResidency {
	highlight the global residency based on the selection of:
		- EMBA vs GEMBA
		- Residency vs No Resdiency

}

main function

when the form is submitted, call the three highlight functions

*/


// Ways to Improve
// Have the browser dynamically create the calendar