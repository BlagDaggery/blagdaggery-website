var dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currentDate = new Date();

var MIN_CAL_ROWS = 9;
var DAYS_PER_WEEK = 7;


function Calendar(month, year) {
	this.month = (isNaN(month) || month == null) ? currentDate.getMonth() : month;
	this.year = (isNaN(year) || year ==null) ? currentDate.getFullYear() : year;
	this.html = '';
}

Calendar.prototype.generateHTML = function() {
	
	// Determine the starting position of the month, where 0 = Sunday, 1 = Monday, etc.
	var declareFirstDay = new Date(this.year, this.month, 1);
	var firstDayPosition = declareFirstDay.getDay();

	// Select the number of days in the appropriate month from the daysInMonth array.
	var monthLength = daysInMonth[this.month];
	var previousMonthLength = daysInMonth[this.month - 1];

	// Check to see if it is a leap year, making February 29 days long
	if(this.month === 1) {
		if((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
			monthLength = 29;
		}
	}

	// Paint the calendar header with the month name and the days of the week names.
	var monthName = monthLabels[this.month];
	var html = '<table class="calendar">';
	html += '<tr><th colspan="7">';
	html += monthName + '&nbsp;' + this.year;
	html += '</th></tr>';
	html += '<tr>';
	for (var i = 0; i <= 6; i++){
		html += '<th>';
		html += dayLabels[i];
		html += '</th>';
	}
	html += '</tr><tr>';

	// Start filling in the dates in the appropriate cells.
	var date = 1;
	var nextMonthDayCounter = 1;
	var previousMonthDayCounter = previousMonthLength - firstDayPosition + 1;

	for (var i = 0; i < MIN_CAL_ROWS; i++) {
		for (var j = 0; j < DAYS_PER_WEEK; j++) {

			if (i === 0 && j < firstDayPosition) {
				html += '<td class="adjacent-month">' + previousMonthDayCounter + '</td>';
				previousMonthDayCounter ++;
			}


			if (date <= monthLength && (i > 0 || j >= firstDayPosition)) {

				if (j === 1 || j === 3) {
					console.log("Cville Distance!", "date: " + date)
					html += '<td class="cville-distance">' + date + '</td>';
					date++;
				} else if (j === 2 || j === 4) {
					console.log("DC Distance!", "date: " + date);
					html += '<td class="dc-distance">' + date + '</td>';
					date++;
				} else {
					console.log("Normal cell", "date: " + date)
					html += '<td>' + date + '</td>';
					date++;
				}
			}

			if (date > monthLength && j < 6) {
				html += '<td class="adjacent-month">' + nextMonthDayCounter + '</td>';
				nextMonthDayCounter ++;
			}
		}

		// stop making rows if we've run out of days
		if (date > monthLength) {
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



var month1 = new Calendar(4,2017);
month1.generateHTML();
document.write(month1.getHTML());

var month2 = new Calendar(5,2017);
month2.generateHTML();
document.write(month2.getHTML());

//var distanceLearningColor = $accent-1;
//var weekendResidenciesColor = $accent-2;
//var globalResidencyColor = $accent-3;
//var distanceLearningSessions = 7;
//var location = $('#location').val();
//var format = $('#format').val();
//var residency = $('#residency').val();
//var distance = $('#distance')val();

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
*/