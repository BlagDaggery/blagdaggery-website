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
    var introText = "<p>A Dragon has stolen all of the gold from your town!</p><p>Like a medieval bank robber of sorts...</p><p>You have tracked the Dragon to the mountain caves nearby, and must fight to win back your town's gold.</p><p>How you got volunteered for this, I don't know. I'm just the narrator.</p><p>Undefeated so far, the Dragon confidently prepares to defend his treasure as you enter his lair.</p><button id='battle-start'>Let's get it on!</button>";
    var playerChoices = "<p>Choose your attack.</p><button id='sword'>SWORD</button><button id='arrows'>ARROWS</button><button id='cabbage'>CABBAGE</button>";

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
    var swordAttack = Math.floor(Math.random() * 2);
    var arrowAttack = Math.floor(Math.random() * 2);
    var cabbageAttack = Math.floor(Math.random() * 2);

    var dragonBreathesFire = Math.floor(Math.random() * 2);
    var dragonSwipesClaws = Math.floor(Math.random() * 2);

    // Variables for damage done
    var swordDamage = Math.floor(Math.random() * 5 + 1);
    var arrowDamage = Math.floor(Math.random() * 7 + 1);
    var cabbageDamage = Math.floor(Math.random() * 10 + 1);

    var dragonFireDamage = Math.floor(Math.random() * 7 + 1);
    var dragonClawDamage = Math.floor(Math.random() * 7 + 1);

    var yourHealth = 30;
    var dragonHealth = 30;


    function showHP() {
        $("#player-hp").css("display", "inline-block");
        $("#dragon-hp").css("display", "inline-block");
    }

    function updateHP() {
        $("#player-hp").html("<p>Your HP: " + yourHealth + "</p>");
        $("#dragon-hp").html("<p>Dragon HP: " + dragonHealth + "</p>");
    }

    $("#click-to-play").click(function() {
        $(this).toggle();
        storyZone.prepend(introText);
        $("#battle-start").click(function() {
            storyZone.empty();
            console.log("The battle has begun!");
            showHP();
            updateHP();
            storyZone.append(playerChoices);

            $("button").click(function() {
                switch(this.id) {
                    case 'sword':
                        console.log("Heck yeah! A sword!");
                        break;
                    case 'arrows':
                        console.log("Get it, Legolas!");
                        break;
                    case 'cabbage':
                        console.log("Cabbage? Really?");
                }
            });
        });
    });
} 


$(document).ready(main);