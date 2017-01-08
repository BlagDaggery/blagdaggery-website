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

Calendar.prototype.generateHTML = function() {
	// get first day of month
	var firstDay = new Date(this.year, this.month, 1);
	var startingDay = firstDay.getDay();

	// find number of days in month
	var monthLength = daysInMonth[this.month];

	// compensate for leap year
	if(this.month === 1) {
		if((this.year % 4 == 0 && this.year % 100 !=0) || this.year % 400 ==0) {
			monthLength = 29;
		}
	}

	// do the header
	var monthName = monthsLabels[this.month];
	var html = '<table class="calendar-table">';
	html += '<tr><th colspan="7">';
	html += monthName + "&nbsp;" + this.year;
	html += '</th></tr>';
	html += '<tr class="calendar-header">';
	for (var i = 0; i <= 6; i++){
		html += '<td class="calendar-header-day">';
		html += daysLabels[i];
		html += '</td>';
	}
	html += '</tr><tr>';

	// start filling in the days
	var day = 1;
	for (var i = 0; i < 9; j++) {
		for (var j = 0; j <= 6; j++) {
			html += '<td class="calendar-day">';
			if (day <= monthLength && (i > 0 || j >= startingDay)) {
				html += day;
				day++;
			}
			html += '</td>';
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