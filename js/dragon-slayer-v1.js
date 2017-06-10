// This was my code after first completing a lesson in Codecademy.
var main = function() {

    var slaying = true;
    var youHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;
    var storyZone = $("#story-zone");

    $("#click-to-play").click(function() {
        $(this).toggle();
        storyZone.append("<p>You have entered a dragon's layer. He notices you. You fight!</p>");
            while(slaying) {
                if (youHit) {
                    storyZone.append("<p>You hit the dragon and did " + damageThisRound + " damage!</p>");
                    totalDamage += damageThisRound;
                    if (totalDamage >= 4) {
                        storyZone.append("<p>You slew the dragon!</p><p>Refresh the page to play again</p>");
                        slaying = false;
                    } else {
                        youHit = Math.floor(Math.random() * 2);
                    }
                } else {
                    slaying = false;
                    storyZone.append("<p>You missed! The dragon has defeated you.</p><p>Refresh the page and try again</p>");
                }
            }
    });
}

$(document).ready(main);