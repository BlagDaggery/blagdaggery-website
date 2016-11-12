// This is my expanded version of the Dragon Slayer game from Codecademy.
var main = function() {

    var slaying = true;
    var youHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var dragonAttack = Math.floor(Math.random() * 5 + 1);
    var yourHealth = 10;
    var dragonHealth = 10;
    var slayingResults = $("#slaying-results");

    $("#click-to-play").click(function() {
        slayingResults.append("<p>You have entered the Dragon's layer. Your goal is to slay the Dragon and bring back all of the gold that he stole from your town. You each have 10HP.</p> <p>Ready? Fight!</p>");
        while(slaying) {
            if (youHit) {
                dragonHealth -= damageThisRound;
                slayingResults.append("<p>You hit the dragon and did " + damageThisRound + " damage.</p>");
                if (dragonHealth <= 0) {
                    slayingResults.append("<p>The dragon has no more HP left! You win!</p><p>Refresh the page to play again.</p>");
                    slaying = false;
                } else {
                    slayingResults.append("<p>The dragon has " + dragonHealth + "HP left.</p>");
                    slayingResults.append("<p>You strike again!</p>");
                    youHit = Math.floor(Math.random() * 2);
                    damageThisRound = Math.floor(Math.random() * 5 + 1);
                }
            } else {
                yourHealth -= dragonAttack;
                slayingResults.append("<p>You missed! The dragon countered and did " + dragonAttack + " damage.</p>");
                if (yourHealth <= 0) {
                    slayingResults.append("<p>You have no more HP left! You are dead.</p><p>Refresh the page to play again.</p>");
                    slaying = false;
                } else {
                    slayingResults.append("<p>You have " + yourHealth + "HP left.</p>");
                    slayingResults.append("<p>Keep slaying!</p>");
                    youHit = Math.floor(Math.random() * 2);
                    dragonAttack = Math.floor(Math.random() * 5 + 1);
                }
            }
        }
    });
}

$(document).ready(main);