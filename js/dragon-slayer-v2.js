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
    var victoryText = "<p>The Dragon screeches in pain as you land the final blow!</p><p>You have won!</p><p>You return home to a hero's welcome, and your town is suddenly rich with all of the Dragon's treasure.</p><p>They use some of the gold to make a statue in your honor. Not bad, right?</p>";
    var defeatText = "<p>Your vision blurs as you stumble backwards and fall to the ground, slowly passing into darkness...</p><p>The town remembers you fondly, but they kinda resent you a little bit.</p><p>I mean, you lost, so they're still living in fear of the dragon. And no one got their gold back. So...</p><p>They wait a few days before sending the next challenger...</p>";
    var playAgain = "<p>Would you like to play again?</p>";

    // Variables for character inventory
    var arrowsInQuiver = 10;
    var cabbagesOnHand = 4;

    // Variables for whether an attack hits
    var swordAttack = Math.floor(Math.random() * 10);
    var arrowAttack = Math.floor(Math.random() * 5);
    var cabbageAttack = Math.floor(Math.random() * 2);

    var dragonSwipesClaws = Math.floor(Math.random() * 10);
    var dragonFlapsWings = Math.floor(Math.random() * 5);
    var dragonBreathesFire = Math.floor(Math.random() * 2);

    // Variables for damage done
    var swordDamage = Math.floor(Math.random() * 3 + 1);
    var arrowDamage = Math.floor(Math.random() * 3 + 1) + 3;
    var cabbageDamage = Math.floor(Math.random() * 3 + 1) + 6;

    var dragonClawDamage = Math.floor(Math.random() * 3 + 1);
    var dragonWingDamage = Math.floor(Math.random() * 3 + 1) + 3;
    var dragonFireDamage = Math.floor(Math.random() * 3 + 1) + 6;

    var yourHealth = 30;
    var dragonHealth = 30;


    function showHP() {
        $("#player-hp").css("display", "inline-block");
        $("#dragon-hp").css("display", "inline-block");
    }

    function updateHP() {
        if(yourHealth > 0) {
            $("#player-hp").html("<p>Your HP: " + yourHealth + "</p>");
        } else {
            $("#player-hp").html("<p>Your HP: 0</p>");
        }

        if (dragonHealth > 0) {
            $("#dragon-hp").html("<p>Dragon HP: " + dragonHealth + "</p>");
        } else {
            $("#dragon-hp").html("<p>Dragon HP: 0</p>");            
        }    
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
                        if(swordAttack) {
                            dragonHealth -= swordDamage;
                            console.log("The dragon now has " + dragonHealth + " HP!");
                            updateHP();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                            } else {
                                swordAttack = Math.floor(Math.random() * 2);
                                swordDamage = Math.floor(Math.random() * 5 + 1);
                            }
                        } else {
                            console.log("You lunge forward with your sword, but swing wide!");
                            swordAttack = Math.floor(Math.random() * 2);
                            swordDamage = Math.floor(Math.random() * 5 + 1);
                        }

                        if(dragonSwipesClaws) {
                            yourHealth -= dragonClawDamage;
                            console.log("The Dragon done gotcha with his claws!");
                            updateHP();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                            } else {
                                dragonSwipesClaws = Math.floor(Math.random() * 2);
                                dragonClawDamage = Math.floor(Math.random() * 7 + 1);
                            }
                        } else {
                            console.log("The Dragon swipes at you with his claws, but you dodge it!");
                            dragonSwipesClaws = Math.floor(Math.random() * 2);
                            dragonClawDamage = Math.floor(Math.random() * 7 + 1);
                        }
                        break;
                    case 'arrows':
                        console.log("Get it, Legolas!");
                        if(arrowAttack) {
                            dragonHealth -= arrowDamage;
                            console.log("You shoot an arrow, and it hits!");
                            updateHP();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                            } else {
                                arrowAttack = Math.floor(Math.random() * 2);
                                arrowDamage = Math.floor(Math.random() * 5 + 1);
                            }
                        } else {
                            console.log("The arrow missed!");
                            arrowAttack = Math.floor(Math.random() * 2);
                            arrowDamage = Math.floor(Math.random() * 5 + 1);
                        }

                        if(dragonBreathesFire) {
                            yourHealth -= dragonFireDamage;
                            console.log("A burst of flame comes from the dragon's mouth. It burns as you run away!");
                            updateHP();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                            } else {
                                dragonBreathesFire = Math.floor(Math.random() * 2);
                                dragonFireDamage = Math.floor(Math.random() * 7 + 1);
                            }
                        } else {
                            console.log("The dragon spews fire from it's mouth, but you scramble and escape the blaze.");
                            dragonBreathesFire = Math.floor(Math.random() * 2);
                            dragonFireDamage = Math.floor(Math.random() * 7 + 1);
                        }
                        break;
                    case 'cabbage':
                        console.log("Cabbage? Really?");
                        if(cabbageAttack) {
                            console.log("The cabbage hits! The dragon screeches in terror!")
                            dragonHealth -= cabbageDamage;
                            updateHP();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                            } else {
                                cabbageAttack = Math.floor(Math.random() * 2);
                                cabbageDamage = Math.floor(Math.random() * 5 + 1);
                            }
                        } else {
                            console.log("The cabbage misses! But the dragon looks concerned...");
                            cabbageAttack = Math.floor(Math.random() * 2);
                            cabbageDamage = Math.floor(Math.random() * 5 + 1);
                        }

                        if (dragonFlapsWings) {
                            console.log("The dragon flaps his wings, and the gust knocks you down!");
                            yourHealth -= dragonWingDamage;
                            updateHP();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                            } else {
                                dragonFlapsWings = Math.floor(Math.random() * 2);
                                dragonWingDamage = Math.floor(Math.random() * 7 + 1);
                            }
                        } else {
                            console.log("The dragon flaps its wings, creating a huge gust of wind! But you stand firm.");
                            dragonFlapsWings = Math.floor(Math.random() * 2);
                            dragonWingDamage = Math.floor(Math.random() * 7 + 1);
                        }
                }
            });
        });
    });
} 


$(document).ready(main);