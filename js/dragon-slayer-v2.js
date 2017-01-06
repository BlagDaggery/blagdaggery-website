// This is my expanded version of the Dragon Slayer game from Codecademy.

// Upon clicking the START button, show yourHealth, dragonHealth, and intro text.
// Slowly cycle through the story, reducing yourHealth and dragonHealth as the battle continues.
// Once one of you dies, show the appropriate Game Over text, and display a button for them to play again

// Instead of repeating yourself, create functions and variables that do stuff for you.

/* Letter-by-Letter Text Reveal


var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}



$(function () {
  showText("#msg", "Hello, World!", 0, 500);
});

*/

// Use empty(); to clear the contents of the story zone before each new piece of text

var main = function() {

var introText1 = "<p>A Dragon has stolen all of the gold from your town!</p><p>Like a medieval bank robber of sorts...</p>";
var introText2 = "<p>You have tracked the Dragon to the mountain caves nearby, and must fight to win back your town's gold.</p>";
var introText3 = "<p>How you got volunteered for this, I don't know. I'm just the narrator.</p>";
var introText4 = "<p>Undefeated so far, the Dragon confidently prepares to defend his treasure as you enter his lair.</p>";
var introText5 = "<p>Ready? Fight!</p>";

var youWin1 = "<p>The Dragon screeches in pain as you land the final blow!</p><p>You have won!</p>";
var youWin2 = "<p>You return home to a hero's welcome, and your town is suddenly rich with all of the Dragon's treasure.</p>";
var youWin3 = "<p>They use some of the gold to make a statue in your honor. Not bad, right?</p>";

var youLose1 = "<p>Your vision blurs as you stumble backwards and fall to the ground.</p>";
var youLose2 = "<p>The Dragon gloats in his victory as you slowly pass into darkness...</p><p>You are dead.</p>";
var youLose3 = "<p>The town remembers you fondly, but they kinda resent you a little bit.</p>";
var youLose4 = "<p>I mean, you lost, so they're still living in fear of the dragon. And the town is poor now.</p>";
var youLose5 = "<p>Don't look at me! I'm just the narrator. I can't control how your town feels.</p>";

var playAgain = "<p>Would you like to play again?</p>";

var showHP = function() {
    $("#player-hp").css("display", "inline-block");
    $("#dragon-hp").css("display", "inline-block");
}

var updateHP = function() {
    $("#player-hp").html("<p>Your HP<br/>", yourHealth, "</p>");
    $("#dragon-hp").html("<p>Dragon HP<br/>", dragonHealth, "</p>");
}

var slaying = true;
var youAttack = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var dragonAttack = Math.floor(Math.random() * 5 + 1);
var yourHealth = 10;
var dragonHealth = 10;
var storyZone = $("#story-zone");




    $("#click-to-play").click(function() {
        $("#click-to-play").toggle();
        showHP();
        updateHP();
        storyZone.append(introText1);
        storyZone.append(introText2);
        storyZone.append(introText3);
        storyZone.append(introText4);
        storyZone.append(introText5);
        while(slaying) {
            if (youAttack) {
                dragonHealth -= damageThisRound;
                storyZone.append("<p>You hit the dragon and did " + damageThisRound + " damage.</p>");
                
                if (dragonHealth <= 0) {
                    storyZone.append(youWin1);
                    slaying = false;
                } else {
                    storyZone.append("<p>The dragon has " + dragonHealth + "HP left.</p>");
                    
                    storyZone.append("<p>You strike again!</p>");
                    youAttack = Math.floor(Math.random() * 2);
                    damageThisRound = Math.floor(Math.random() * 5 + 1);
                }
            } else {
                yourHealth -= dragonAttack;
                storyZone.append("<p>You missed! The dragon countered and did " + dragonAttack + " damage.</p>");

                if (yourHealth <= 0) {
                    storyZone.append(youLose1);
                    slaying = false;
                } else {
                    storyZone.append("<p>You have " + yourHealth + "HP left.</p>");
                    storyZone.append("<p>Keep slaying!</p>");
                    youAttack = Math.floor(Math.random() * 2);
                    dragonAttack = Math.floor(Math.random() * 5 + 1);
                }
            }
        }
    });
}

$(document).ready(main);