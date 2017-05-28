// This is my expanded version of the Dragon Slayer game from Codecademy.

// Upon clicking the button, show yourHealth, dragonHealth, and intro text.
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

var slaying = true;
var storyZone = $("#story-zone");
var controlZone = $("#control-zone");

// Variables for story text
var startText = "<p>Type 'START' to begin.</p>"
var introText = "<p>A Dragon has stolen all of the gold from your town!</p><p>Like a medieval bank robber of sorts...</p><p>You have tracked the Dragon to the mountain caves nearby, and must fight to win back your town's gold.</p><p>How you got volunteered for this, I don't know. I'm just the narrator.</p><p>Undefeated so far, the Dragon confidently prepares to defend his treasure as you enter his lair.</p><p>Ready? Fight!</p><p>Which weapon would you like to use?</p><p>Type 'SWORD', 'ARROW', or 'CABBAGE' to attack.</p><hr/>";
var errorText = "<p>Error! Try again.</p><hr/>"

var youWin1 = "<p>The Dragon screeches in pain as you land the final blow!</p><p>You have won!</p>";
var youWin2 = "<p>You return home to a hero's welcome, and your town is suddenly rich with all of the Dragon's treasure.</p>";
var youWin3 = "<p>They use some of the gold to make a statue in your honor. Not bad, right?</p>";

var youLose1 = "<p>Your vision blurs as you stumble backwards and fall to the ground.</p>";
var youLose2 = "<p>The Dragon gloats in his victory as you slowly pass into darkness...</p><p>You are dead.</p>";
var youLose3 = "<p>The town remembers you fondly, but they kinda resent you a little bit.</p>";
var youLose4 = "<p>I mean, you lost, so they're still living in fear of the dragon. And the town is poor now.</p>";
var youLose5 = "<p>Don't look at me! I'm just the narrator. I can't control how your town feels.</p>";

var playAgain = "<p>Would you like to play again?</p>";

// Variables for character inventory
var arrowsInQuiver = 10;
var cabbages = 3;

// Variables for whether an attack hits
var swordAttack = Math.floor(Math.random() * 5);
var arrowAttack = Math.floor(Math.random() * 2);
var cabbageAttack = Math.floor(Math.random() * 2);

var dragonBreathesFire = Math.floor(Math.random() * 5);
var dragonSwipesClaws = Math.floor(Math.random() * 2);

// Variables for damage done
var swordDamage = Math.floor(Math.random() * 5 + 1);
var arrowDamage = Math.floor(Math.random() * 5 + 1);
var cabbageDamage = Math.floor(Math.random() * 5 + 1);

var dragonFireDamage = Math.floor(Math.random() * 5 + 1);
var dragonClawDamage = Math.floor(Math.random() * 5 + 1);


var yourHealth = 30;
var dragonHealth = 30;


function showHP() {
    $("#player-hp").css("display", "inline-block");
    $("#dragon-hp").css("display", "inline-block");
}

function updateHP() {
    $("#player-hp").html("<p>Your HP<br/>" + yourHealth + "</p>");
    $("#dragon-hp").html("<p>Dragon HP<br/>" + dragonHealth + "</p>");
}


    $("#click-to-play").click(function() {
        $("#click-to-play").toggle();
        showHP();
        updateHP();
        storyZone.prepend(introText);
    });

    // Reveal each piece of the story and give player options for actions using buttons and switch statements

/*
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
        } */
} 


$(document).ready(main);