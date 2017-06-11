// GAME PLAN
// Upon clicking the button, show intro text & button to start the battle
// Slowly cycle through the story, reducing yourHealth, dragonHealth, and relevant stats as the battle continues.
// Once one of you dies, show the appropriate Game Over text, and display a button for them to play again

// NEXT STEPS
// Create more story text options so it's not the same each time
// Choose a different font
// Add Play Again function

var main = function() {

    // Variables for jQuery selectors
    var storyZone = $("#story-zone");
    var controlZone = $("#control-zone");

    // Variables for story text
    var introText = "<p>A Dragon has stolen all of the gold from your town!</p><p>Finding the Dragon in the mountain caves nearby, you must fight to win back your town's gold.</p><p>He confidently prepares to defend his treasure as you enter his lair.</p><button id='battle-start'>Let's get it on!</button>";
    
    var swordHitsText = "<p>You lunge forward and stab the dragon with your sword!</p>";
    var swordMissesText = "<p>You stab at the dragon, but he evades your strike!</p>";
    var arrowHitsText = "<p>You aim an arrow at the dragon...Bullseye!</p>";
    var arrowMissesText = "<p>You notch an arrow in your bow and fire! But the arrow sails wide!</p>";
    var cabbageHitsText = "<p>You chuck a head of cabbage at the dragon and it burns his hide! He is allergic to cabbage!</p>";
    var cabbageMissesText = "<p>You toss a head of cabbage at the dragon, but you miss!</p>";
    
    var dragonClawsHitText = "<p>The dragon swipes at you with his claws and gashes your armor!</p>";
    var dragonClawsMissText = "<p>The dragon takes a swipe at you, but you duck out of the way just in time!</p>";
    var dragonWingsHitText = "<p>The dragon creates a gust of wind with his wings! You fly back and you fall heavily to the ground.</p>";
    var dragonWingsMissText = "<p>The dragon creates a gust of wind to knock you down, but you stand firm!</p>";
    var dragonFireHitsText = "<p>The dragon spews fire from his mouth! It burns you through your armor.</p>";
    var dragonFireMissesText = "<p>Fire shoots from the Dragon's mouth, but you escape the blaze behind a large rock!</p>";

    var victoryText = "<p>The Dragon screeches in pain as you land the final blow! You have won!</p><p>You return home with the town's gold and an exciting tale of adventure.</p><p>Revered as a hero, you begin to grow restless, and start pondering your next adventure...</p>";
    var defeatText = "<p>Your vision blurs as you stumble backwards and fall to the ground, slowly passing into darkness...</p><p>The town remembers you fondly, but still live in fear of the dragon</p><p>They wait a few weeks before sending the next challenger...</p>";

    // Variables for character inventory
    var arrowsInQuiver = 5;
    var cabbagesOnHand = 3;

    // Variables for weapon choices
    var weaponChoices = "<p>Choose your weapon.</p><button id='sword'>SWORD</button><button id='arrows'>ARROWS</button><button id='cabbage'>CABBAGE</button>";

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

    // DRY Functions
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
            $("#arrows").remove();
        }

        if(cabbagesOnHand > 0) {
            $("#cabbage-inventory").html("Cabbages: " + cabbagesOnHand);
        } else {
            $("#cabbage-inventory").html("Cabbages: 0");
            $("#cabbage").remove();
        }

        if (dragonHealth > 0) {
            $("#dragon-hp").html("Dragon HP: " + dragonHealth);
        } else {
            $("#dragon-hp").html("Dragon HP: 0");
        }
        console.log("Stats updated");
    }

    function showPlayerChoices() {
        controlZone.append(weaponChoices);        
    }

    // Game Code
    $("#click-to-play").click(function() {
        $(this).toggle();
        storyZone.prepend(introText);
        $("#battle-start").click(function() {
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
                            if(dragonHealth <= 0) {
                                controlZone.empty();
                                storyZone.empty();
                                storyZone.append(victoryText);
                            } else {
                                swordAttack = Math.floor(Math.random() * 10);
                                swordDamage = Math.floor(Math.random() * 3 + 1);
                            }
                        } else {
                            storyZone.append(swordMissesText);
                            swordAttack = Math.floor(Math.random() * 10);
                            swordDamage = Math.floor(Math.random() * 3 + 1);
                        }

                        if (dragonHealth > 0) {
                            if(dragonSwipesClaws) {
                                yourHealth -= dragonClawDamage;
                                storyZone.append(dragonClawsHitText);
                                if(yourHealth <= 0) {
                                    controlZone.empty();
                                    storyZone.empty();
                                    storyZone.append(defeatText);
                                } else {
                                    dragonSwipesClaws = Math.floor(Math.random() * 10);
                                    dragonClawDamage = Math.floor(Math.random() * 3 + 1);
                                }
                            } else {
                                storyZone.append(dragonClawsMissText);
                                dragonSwipesClaws = Math.floor(Math.random() * 10);
                                dragonClawDamage = Math.floor(Math.random() * 3 + 1);
                            }
                        }
                        updateStats();
                        break;

                    case 'arrows':
                        console.log("Get it, Legolas!");
                        storyZone.empty();
                        arrowsInQuiver --;

                        if(arrowAttack) {
                            dragonHealth -= arrowDamage;
                            storyZone.append(arrowHitsText);
                            if(dragonHealth <= 0) {
                                controlZone.empty();
                                storyZone.empty();
                                storyZone.append(victoryText);
                            } else {
                                arrowAttack = Math.floor(Math.random() * 5);
                                arrowDamage = Math.floor(Math.random() * 3 + 1) + 3;
                            }
                        } else {
                            storyZone.append(arrowMissesText);
                            arrowAttack = Math.floor(Math.random() * 5);
                            arrowDamage = Math.floor(Math.random() * 3 + 1) + 3;
                        }

                        if (dragonHealth > 0) {
                            if (dragonFlapsWings) {
                                storyZone.append(dragonWingsHitText);
                                yourHealth -= dragonWingDamage;
                                if(yourHealth <= 0) {
                                    controlZone.empty();
                                    storyZone.empty();
                                    storyZone.append(defeatText);
                                } else {
                                    dragonFlapsWings = Math.floor(Math.random() * 5);
                                    dragonWingDamage = Math.floor(Math.random() * 3 + 1) + 3;
                                }
                            } else {
                                storyZone.append(dragonWingsMissText);
                                dragonFlapsWings = Math.floor(Math.random() * 5);
                                dragonWingDamage = Math.floor(Math.random() * 3 + 1) + 3;
                            }
                        }
                        updateStats();
                        break;

                    case 'cabbage':
                        console.log("Cabbage? Really?");
                        storyZone.empty();
                        cabbagesOnHand --;

                        if(cabbageAttack) {
                            storyZone.append(cabbageHitsText);
                            dragonHealth -= cabbageDamage;
                            if(dragonHealth <= 0) {
                                controlZone.empty();
                                storyZone.empty();
                                storyZone.append(victoryText);
                            } else {
                                cabbageAttack = Math.floor(Math.random() * 2);
                                cabbageDamage = Math.floor(Math.random() * 3 + 1) + 6;
                            }
                        } else {
                            storyZone.append(cabbageMissesText);
                            cabbageAttack = Math.floor(Math.random() * 2);
                            cabbageDamage = Math.floor(Math.random() * 3 + 1) + 6;
                        }

                        if (dragonHealth > 0) {
                            if(dragonBreathesFire) {
                                yourHealth -= dragonFireDamage;
                                storyZone.append(dragonFireHitsText);
                                if(yourHealth <= 0) {
                                    controlZone.empty();
                                    storyZone.empty();
                                    storyZone.append(defeatText);
                                } else {
                                    dragonBreathesFire = Math.floor(Math.random() * 2);
                                    dragonFireDamage = Math.floor(Math.random() * 3 + 1) + 6;
                                }
                            } else {
                                storyZone.append(dragonFireMissesText);
                                dragonBreathesFire = Math.floor(Math.random() * 2);
                                dragonFireDamage = Math.floor(Math.random() * 3 + 1) + 6;
                            }
                        updateStats();
                        }
                        break;
                } // Close Switch Statement
            }); // Close Attack Buttons
        }); // Close Start Battle
    }); // Close Click to play
} // Close Main function


$(document).ready(main);