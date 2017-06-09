// GAME PLAN
// Upon clicking the button, show intro text & button to start the battle
// Slowly cycle through the story, reducing yourHealth, dragonHealth, and relevant stats as the battle continues.
// Once one of you dies, show the appropriate Game Over text, and display a button for them to play again

// NEXT STEPS
// Create more story text options so it's not the same each time
// Choose a different font
// Updating styling on buttons and stats
// When you win, the code still runs an attempted draggon attack. Make that stop.
// Figure out a way to keep the game window a certain size (roughly)

var main = function() {

    var storyZone = $("#story-zone");
    var controlZone = $("#control-zone");

    // Variables for story text
    var introText = "<p>A Dragon has stolen all of the gold from your town!</p><p>Finding the Dragon in the mountain caves nearby, you must fight to win back your town's gold.</p><p>He confidently prepares to defend his treasure as you enter his lair.</p><button id='battle-start'>Let's get it on!</button>";
    
    var swordHitsText = "<p>You lunge forward and stab the dragon with your sword!</p>";
    var swordMissesText = "<p>You stab at the dragon, but he evades your strike!</p>";
    var arrowHitsText = "<p>You notch an arrow in your bow, aim for the heart, and fire! Bullseye!</p>";
    var arrowMissesText = "<p>You notch an arrow in your bow, aim for the heart, and fire! But the arrow sails wide!</p>";
    var cabbageHitsText = "<p>You chuck a head of cabbage at the dragon and it burns his hide! He is allergic to cabbage!</p>";
    var cabbageMissesText = "<p>You toss a head of cabbage at the dragon, but you miss! The dragon looks fearful of the leafy green vegetable...</p>";
    
    var dragonClawsHitText = "<p>The dragon swipes at you with his claws and gashes your armor!</p>";
    var dragonClawsMissText = "<p>The dragon takes a swipe at you, but you duck out of the way just in time!</p>";
    var dragonFireHitsText = "<p>The dragon spews fire from his mouth! You put up your shield, but can feel the heat through your armor.</p>";
    var dragonFireMissesText = "<p>You see fire forming in the dragons throat and run for cover! Your safe from the blaze behind a large rock.</p>";
    var dragonWingsHitText = "<p>Reeling back, the dragon flaps his wings, creating a mighty gust of wind! The wind knocks you back against a rock and you fall heavily on the ground.</p>";
    var dragonWingsMissText = "<p>The dragon flaps his wings, creating a gust of wind to knock you down, but you stand firm!</p>";

    var victoryText = "<p>The Dragon screeches in pain as you land the final blow! You have won!</p><p>You return home to a hero's welcome, and your town is suddenly rich with all of the Dragon's treasure.</p><p>They use some of the gold to make a statue in your honor. Not bad, right?</p>";
    var defeatText = "<p>Your vision blurs as you stumble backwards and fall to the ground, slowly passing into darkness...</p><p>The town remembers you fondly, but they kinda resent you a little bit.</p><p>I mean, you lost, so they're still living in fear of the dragon. And no one got their gold back. So...</p><p>They wait a few days before sending the next challenger...</p>";
    var playAgain = "<p>Would you like to play again?</p>";

    // Variables for character inventory
    var arrowsInQuiver = 7;
    var cabbagesOnHand = 3;

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
                        storyZone.empty();
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
                                swordAttack = Math.floor(Math.random() * 10);
                                swordDamage = Math.floor(Math.random() * 3 + 1);
                            }
                        } else {
                            storyZone.append(swordMissesText);
                            swordAttack = Math.floor(Math.random() * 10);
                            swordDamage = Math.floor(Math.random() * 3 + 1);
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
                                dragonSwipesClaws = Math.floor(Math.random() * 10);
                                dragonClawDamage = Math.floor(Math.random() * 3 + 1);
                            }
                        } else {
                            storyZone.append(dragonClawsMissText);
                            dragonSwipesClaws = Math.floor(Math.random() * 10);
                            dragonClawDamage = Math.floor(Math.random() * 3 + 1);
                        }
                        break;

                    case 'arrows':
                        console.log("Get it, Legolas!");
                        storyZone.empty();
                        arrowsInQuiver --;
                        console.log("You have " + arrowsInQuiver + " arrows left.");

                        if(arrowAttack) {
                            dragonHealth -= arrowDamage;
                            storyZone.append(arrowHitsText);
                            updateStats();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                arrowAttack = Math.floor(Math.random() * 5);
                                arrowDamage = Math.floor(Math.random() * 3 + 1) + 3;
                            }
                        } else {
                            storyZone.append(arrowMissesText);
                            arrowAttack = Math.floor(Math.random() * 5);
                            arrowDamage = Math.floor(Math.random() * 3 + 1) + 3;
                        }

                        if (dragonFlapsWings) {
                            storyZone.append(dragonWingsHitText);
                            yourHealth -= dragonWingDamage;
                            updateStats();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                dragonFlapsWings = Math.floor(Math.random() * 5);
                                dragonWingDamage = Math.floor(Math.random() * 3 + 1) + 3;
                            }
                        } else {
                            storyZone.append(dragonWingsMissText);
                            dragonFlapsWings = Math.floor(Math.random() * 5);
                            dragonWingDamage = Math.floor(Math.random() * 3 + 1) + 3;
                        }
                        break;

                    case 'cabbage':
                        console.log("Cabbage? Really?");
                        storyZone.empty();
                        cabbagesOnHand --;
                        if(cabbageAttack) {
                            storyZone.append(cabbageHitsText);
                            dragonHealth -= cabbageDamage;
                            updateStats();
                            if(dragonHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(victoryText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                cabbageAttack = Math.floor(Math.random() * 2);
                                cabbageDamage = Math.floor(Math.random() * 3 + 1) + 6;
                            }
                        } else {
                            storyZone.append(cabbageMissesText);
                            cabbageAttack = Math.floor(Math.random() * 2);
                            cabbageDamage = Math.floor(Math.random() * 3 + 1) + 6;
                        }
                        if(dragonBreathesFire) {
                            yourHealth -= dragonFireDamage;
                            storyZone.append(dragonFireHitsText);
                            updateStats();
                            if(yourHealth <= 0) {
                                storyZone.empty();
                                storyZone.append(defeatText);
                                controlZone.empty();
                                slaying = false;
                            } else {
                                dragonBreathesFire = Math.floor(Math.random() * 2);
                                dragonFireDamage = Math.floor(Math.random() * 3 + 1) + 6;
                            }
                        } else {
                            storyZone.append(dragonFireMissesText);
                            dragonBreathesFire = Math.floor(Math.random() * 2);
                            dragonFireDamage = Math.floor(Math.random() * 3 + 1) + 6;
                        }
                        break;
                } // Switch Statement
            }); // Attack Buttons
        }); // Start Battle
    }); // Click to play
} // Main function


$(document).ready(main);