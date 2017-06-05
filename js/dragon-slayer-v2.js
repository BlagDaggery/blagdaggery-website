// GAME PLAN
// Upon clicking the button, show intro text & button to start the battle
// Slowly cycle through the story, reducing yourHealth, dragonHealth, and relevant stats as the battle continues.
// Once one of you dies, show the appropriate Game Over text, and display a button for them to play again
// Use empty(); to clear the contents of the story zone before each new piece of text

// NEXT STEPS
// Start adding in story text
// Figure out a way to keep the game window a certain size (roughly)
// Figure out how you want the player to flow through the different options

var main = function() {

    var storyZone = $("#story-zone");
    var controlZone = $("#control-zone");

    // Variables for story text
    var introText = "<p>A Dragon has stolen all of the gold from your town!</p><p>You have tracked the Dragon to the mountain caves nearby, and must fight to win back your town's gold.</p><p>Undefeated so far, the Dragon confidently prepares to defend his treasure as you enter his lair.</p><button id='battle-start'>Let's get it on!</button>";
    
    var swordHitsText = "<p>You lunge forward and stab the dragon with your sword!</p>";
    var swordMissesText = "<p>You stab at the dragon, but he evades your strike!</p>";
    var arrowHitsText = "<p>You notch an arrow in your bow, aim for the heart, and fire! Bullseye!</p>";
    var arrowMissesText = "<p>You notch an arrow in your bow, aim for the heart, and fire! But the arrow sails wide!</p>";
    var cabbageHitsText = "<p>You pull a head of cabbage from your bag and chuck it at the dragon! The cabbage seems to burn the dragon's hide! Dragons are allergic to cabbage!</p>";
    var cabbageMissesText = "<p>You pull a head of cabbage from your bag and chuck it at the dragon, but the dragon dodges! The dragon looks fearful of the leafy green vegetable...</p>";
    
    var dragonClawsHitText = "<p>The dragon swipes at you with his claws and gashes your armor!</p>";
    var dragonClawsMissText = "<p>The dragon takes a swipe at you, but you duck out of the way just in time!</p>";
    var dragonFireHitsText = "<p>The dragon spews fire from his mouth! You put up your shield, but can feel the heat through your armor.</p>";
    var dragonFireMissesText = "<p>You see fire forming in the dragons throat and run for cover! Your safe from the blaze behind a large rock.</p>";
    var dragonWingsHitText = "<p>Reeling back, the dragon flaps his wings, creating a mighty gust of wind! The wind knocks you back against a rock and you fall heavily on the ground.</p>";
    var dragonWingsMissText = "<p>The dragon flaps his wings, creating a gust of wind to knock you down, but you stand firm!</p>";

    var victoryText = "<p>The Dragon screeches in pain as you land the final blow!</p><p>You have won!</p><p>You return home to a hero's welcome, and your town is suddenly rich with all of the Dragon's treasure.</p><p>They use some of the gold to make a statue in your honor. Not bad, right?</p>";
    var defeatText = "<p>Your vision blurs as you stumble backwards and fall to the ground, slowly passing into darkness...</p><p>The town remembers you fondly, but they kinda resent you a little bit.</p><p>I mean, you lost, so they're still living in fear of the dragon. And no one got their gold back. So...</p><p>They wait a few days before sending the next challenger...</p>";
    var playAgain = "<p>Would you like to play again?</p>";

    // Variables for character inventory
    var arrowsInQuiver = 10;
    var cabbagesOnHand = 4;

    // Variables for weapon choices
    var allThreeWeapons = "<p>Choose your attack.</p><button id='sword'>SWORD</button><button id='arrows'>ARROWS</button><button id='cabbage'>CABBAGE</button>";
    var swordAndArrows = "<p>Choose your attack.</p><button id='sword'>SWORD</button><button id='arrows'>ARROWS</button>";
    var swordAndCabbage = "<p>Choose your attack.</p><button id='sword'>SWORD</button><button id='cabbage'>CABBAGE</button>";
    var justSword = "<p>Choose your attack.</p><button id='sword'>SWORD</button>";

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


    function showStats() {
        $("#player-hp, #arrow-inventory, #cabbage-inventory, #dragon-hp").css("display", "inline-block");
    }

    function updateStats() {
        if(yourHealth > 0) {
            $("#player-hp").html("Your HP: " + yourHealth);
        } else {
            $("#player-hp").html("Your HP: 0");
        }

        if(arrowsInQuiver > 0) {
            $("#arrow-inventory").html("Arrows: " + arrowsInQuiver);
        } else {
            $("#arrow-inventory").html("Arrows: 0");            
        }

        if(cabbagesOnHand > 0) {
            $("#cabbage-inventory").html("Cabbages: " + cabbagesOnHand);
        } else {
            $("#cabbage-inventory").html("Cabbages: 0");            
        }

        if (dragonHealth > 0) {
            $("#dragon-hp").html("Dragon HP: " + dragonHealth);
        } else {
            $("#dragon-hp").html("Dragon HP: 0");
        }    
    }

    function showPlayerChoices() {
        if (arrowsInQuiver > 0 && cabbagesOnHand > 0) {
            controlZone.append(allThreeWeapons);
        } else if (arrowsInQuiver > 0 && cabbagesOnHand <= 0) {
            controlZone.append(swordAndArrows);
        } else if (arrowsInQuiver <= 0 && cabbagesOnHand > 0) {
            controlZone.append(swordAndCabbage);
        } else if (arrowsInQuiver <= 0 && cabbagesOnHand <= 0) {
            controlZone.append(justSword);
        }
    }

    $("#click-to-play").click(function() {
        $(this).toggle();
        storyZone.prepend(introText);
        $("#battle-start").click(function() {
            var slaying = true;
            storyZone.empty();
            console.log("The battle has begun!");
            showStats();
            updateStats();
            showPlayerChoices();
            $("button").click(function() {
                switch(this.id) {
                    case 'sword':
                        console.log("Sword chosen");
                        if(swordAttack) {
                            dragonHealth -= swordDamage;
                            storyZone.append(swordHitsText);
                            updateStats();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                swordAttack = Math.floor(Math.random() * 2);
                                swordDamage = Math.floor(Math.random() * 5 + 1);
                            }
                        } else {
                            storyZone.append(swordMissesText);
                            swordAttack = Math.floor(Math.random() * 2);
                            swordDamage = Math.floor(Math.random() * 5 + 1);
                        }

                        if(dragonSwipesClaws) {
                            yourHealth -= dragonClawDamage;
                            storyZone.append(dragonClawsHitText);
                            updateStats();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                dragonSwipesClaws = Math.floor(Math.random() * 2);
                                dragonClawDamage = Math.floor(Math.random() * 7 + 1);
                            }
                        } else {
                            storyZone.append(dragonClawsMissText);
                            dragonSwipesClaws = Math.floor(Math.random() * 2);
                            dragonClawDamage = Math.floor(Math.random() * 7 + 1);
                        }
                        break;

                    case 'arrows':
                        console.log("Get it, Legolas!");
                        arrowsInQuiver --;
                        console.log("You have " + arrowsInQuiver + " arrows left.");

                        if(arrowAttack) {
                            dragonHealth -= arrowDamage;
                            console.log("You shoot an arrow, and it hits!");
                            updateStats();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                arrowAttack = Math.floor(Math.random() * 2);
                                arrowDamage = Math.floor(Math.random() * 5 + 1);
                            }
                        } else {
                            console.log("The arrow missed!");
                            arrowAttack = Math.floor(Math.random() * 2);
                            arrowDamage = Math.floor(Math.random() * 5 + 1);
                        }

                        if (dragonFlapsWings) {
                            console.log("The dragon flaps his wings, and the gust knocks you down!");
                            yourHealth -= dragonWingDamage;
                            updateStats();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                dragonFlapsWings = Math.floor(Math.random() * 2);
                                dragonWingDamage = Math.floor(Math.random() * 7 + 1);
                            }
                        } else {
                            console.log("The dragon flaps its wings, creating a huge gust of wind! But you stand firm.");
                            dragonFlapsWings = Math.floor(Math.random() * 2);
                            dragonWingDamage = Math.floor(Math.random() * 7 + 1);
                        }
                        break;

                    case 'cabbage':
                        console.log("Cabbage? Really?");
                        cabbagesOnHand --;
                        if(cabbageAttack) {
                            console.log("The cabbage hits! The dragon screeches in terror!");
                            dragonHealth -= cabbageDamage;
                            updateStats();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                cabbageAttack = Math.floor(Math.random() * 2);
                                cabbageDamage = Math.floor(Math.random() * 5 + 1);
                            }
                        } else {
                            console.log("The cabbage misses! But the dragon looks concerned...");
                            cabbageAttack = Math.floor(Math.random() * 2);
                            cabbageDamage = Math.floor(Math.random() * 5 + 1);
                        }
                        if(dragonBreathesFire) {
                            yourHealth -= dragonFireDamage;
                            console.log("A burst of flame comes from the dragon's mouth. It burns as you run away!");
                            updateStats();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                                controlZone.empty();
                                slaying = false;
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
                } // Switch Statement
            }); // Attack Buttons
        }); // Start Battle
    }); // Click to play
} // Main function


$(document).ready(main);