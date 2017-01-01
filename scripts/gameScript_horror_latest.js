$("#content").hide();
$("#buttonOptions").hide();
$("#buttonReveal").hide();
$("#buttonYes").hide();
$("#coffins").hide();
$("#content").removeClass("hiddenstuff");
$("#content").show();
/*
setTimeout(function{
    $.getScript("scripts/gameScript.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });},100);
*/

//instructions array
var instructionArray = new Array();

//yes_options controls the buttons on the left side's text
var yes_options = new Array();

//no_options controls the buttons on the right side's text
var no_options = new Array();
var failArray = new Array();
var coffinArray = new Array();

var idleTime = 0;
var delay_value = 10;

var total_calls = 0;
var sine_wave = 0;
var calls_left = 0;
var next_chara = new Array();
var keep_iter = 0;
var iterate = 0;
var type_speed = 0;
var name = "";
var skip_text = false;
var text_timer = new Array();
var current_sentence = "";
var skippable = false;
var single_callback = false;
var clickable = false;
var clear_callback = function clear_callback() { };

// keep track of total correct choices and total deaths for performance evaluation when player wins
var total_correct_choices = 0;
var total_deaths = 0;

//var last_print = 0;
//vars that refer to sound elements
var s_pistol = "pistol";
var s_rifle = "rifle_shot";
var s_pump_shotgun = "pump_shotgun";
var s_axe = "axe";
var s_stab = "stab";
var s_spike = "spike";
var s_growl = "growl";
var s_chomp = "chomp";
var s_door_wood = "door_wood";
var s_door_stone = "door_stone";
var s_door_metal = "door_metal";
var s_window_open = "window_open";
var s_scream_man = "male_scream";
var s_scream_woman = "female_scream";
var s_rustle = "rustle"; /* Or "rustle" couldn't decide, have to play the game again for context */
var s_coffin_creaky = "coffin_creak";
var s_coffin_bomb = "coffin_bomb";
var s_fire = "fire";
var s_fisticuffs = "fisticuffs";
var s_wind = "wind";
var s_wind_outside = "wind_outside";
var s_footsteps_outside = "footsteps_outside";
var s_footsteps_wood = "footsteps_wood";
var s_footsteps_stone = "footsteps_stone";
var s_footsteps_metal = "footsteps_metal";
var s_footsteps_frantic = "footsteps_frantic";
var s_sobbing = "sobbing";
var s_shotgun_shot = "shotgun_shot";
var s_floor_creak = "floor_creak"
var s_decapitation = "decapitation";
var s_tearing = "tearing";
var s_woosh = "woosh";
var s_man_growl = "man_growl";
var s_long_heartbeat = "long_heartbeat";
var s_slow_heartbeat = "slow_heartbeat";
var s_fast_heartbeat = "fast_heartbeat";
var s_crowd_laughing = "crowd_laughing";
var s_rage_of_blades = "rage_of_blades";
var s_locked_door = "locked_door";
var s_pin_drop = "pin_drop";
var s_walking_away = "walking_away";
var s_door_unlock = "door_unlock";
var s_walking_gravel = "walking_gravel";
var s_tense = "tense";
var s_tense2 = "tense2";
var s_tense3 = "tense3";
var s_panic = "panic";
var s_demon_girl = "demon_girl";
var s_stair_climb = "stair_climb";
var s_flesh_split = "flesh_split";
var s_blood_drip = "blood_drip";
var s_kick_door_down = "kick_door_down";
var s_gun_fight = "gun_fight";
var s_men_screaming = "men_screaming";
var s_threeshots = "threeshots";
var s_thump = "thump";
var s_yelp = "yelp";
var s_begging = "begging";
var s_guncock = "guncock";
var s_earthquake = "earthquake";
var s_metal_latch = "metal_latch";
var s_move_coffin = "move_coffin";
var s_punch = "punch";
var s_click = "click";
var s_bulletwhiz = "bulletwhiz";
var s_dog_eating = "dog_eating";
var s_man_chuckle = "man_chuckle";
var s_running2 = "running2";
var s_pistol2 = "pistol2";
var s_kicking_fence = "kicking_fence";
var s_bullet_impacts = "bullet_impacts";
var s_delayedshot = "delayedshot";
var s_beating = "beating";
var s_nosound = "silence";

var s_page_turn = "page_turn";

//var done_typing = false;
//var started_typing = false;

//this function pair is from the original game; makes lightning flash and creates the creepy laugh after the user has clicked
$(document).ready(function(){
    var interval = setInterval(timerIncrement, 60000);
/*
    Removing this listener because another keydown listener that does
	the same thing is added near the end of this file.  The duplication
	was causing the part of the story sentence to be printed twice,
	once in spooky fashion and once skipped.
	
    document.addEventListener("keydown", function (event) {
        //console.log("I\'M PUSHING KEYS!!!!");
        //console.log("skippable = " + skippable);
        //console.log("skip_text = " + skip_text);
        //console.log("single_callback = " + single_callback);

        var new_sentence = current_sentence.slice(keep_iter)+"";
        //console.log(current_sentence);
        //console.log(current_sentence.slice(keep_iter));
        //console.log(new_sentence);
        skip_text = true;
        if (skippable == true && single_callback == false) {
            //console.log("I\'M IN YOUR LOOP");
            if (text_timer.length != null || text_timer.length != 0) {
                for (var makeloop = 0; makeloop < text_timer.length; makeloop++) {
                    clearTimeout(text_timer[makeloop]);
                    //console.log("i'm clearing timeouts!");
                    //console.log("x = " + makeloop);
                }

                var break_check = new_sentence.indexOf("|");
                //console.log("break_check = " + break_check);
                if (break_check != -1){
                    //console.log("break_check = " + break_check);
                    while (break_check != -1){
                        new_sentence = new_sentence.replace("|","<br>");
                        break_check = new_sentence.indexOf("|");
                    }
                }
                //console.log("passed break check");
                $("#instructions").append(new_sentence);
                skip_text = false;
                text_timer = [];
                keep_iter = 0;
                iterate = 0;
                current_sentence = "";
                single_callback = true;
                calls_left = 0;
                clear_callback();
            }
        }
    });
*/
	start_game();
	//start_game();
});

function timerIncrement(){
    idleTime = idleTime +1;
    if (idleTime > 5) {
        //document.getElementById('laugh').play();
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},0);
        setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},100);
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},200);
        setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},300);
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},400);
    }
}


//note: the new game option simply deletes local storage.
//so save game checks can just look for storage
//notes included to explain program flow


function startScrollPageDownLoop() {
    scrollDownPageLoop = window.setInterval(scrollPageDown, 750);
}

function endScrollPageDownLoop() {
    scrollPageDown();
    scrollDownPageLoop && window.clearInterval(scrollDownPageLoop);
}

function scrollPageDown() {
    var bottomOfScreen = $(document).height();
    var bottomOfPage = $(window).scrollTop() + $(window).height();
    if(bottomOfPage < bottomOfScreen) {
        $(window).scrollTop((bottomOfPage + bottomOfScreen) + $(window).height());
    }
}

// FUNCTION LIST
//function horror(flag_save, flag_fail_yes, flag_fail_no, link_yes, link_no)
/*
    this function is a constructor for an object containing data about what to do in the story at each point
    these objects will be held in an array with the index being equivalent to each instruction set.

    flag_save will tell the program to save data at this checkpoint so that it may be continued from

    flag_fail_yes and flag_fail_no tell the program (if true):
        this option results in failure
        pull text from failArray, not instructionArray

    link_yes and link_no tell the program where to go for the next instruction set


*/

function horror(flag_save, flag_fail_yes, flag_fail_no, link_yes, link_no,coffin_yes,coffin_no) {
    this.savePoint = flag_save;
    this.failYes = flag_fail_yes;
    this.failNo = flag_fail_no;
    this.linkYes = link_yes;
    this.linkNo = link_no;
    this.coffinYes = coffin_yes;
    this.coffinNo = coffin_no;
}



//this function will play a sound, specified by element id, which is a string value. laugh makes a spooky laugh happen, for example.
function play_sound(sound_id){
	if (sound_id != "silence") {
    		document.getElementById(sound_id).play();
	}
}

//this is an object, that will help point to sounds at every part of story mode.
//it will do this by creating an array of these elements, where the index of the action_sound corresponds to the value of the story cursor
//horror_sound is the array that holds our values
function action_sound(sound_yes,sound_no) {
    //sound_yes would be a pointer to a sound element that needs to be played by the LEFT button (yes_button by old id)
    this.sound_yes = sound_yes;
    //sound_no would be a pointer to a sound element that needs to be played by the RIGHT button (no_button by old id)
    this.sound_no = sound_no;
}

//this is an object, to be held in an array. this allows sounds to be played at a specific character in printout.
//the array will be searched at the start of dramatic parse, and will flag whether or not a sound needs to be played in that paragraph.
// the array's indexes will correspond to the value of the story cursor
function scary_sound(which_sound,char_index_to_play) {
    this.sound = which_sound;
    this.char_index = char_index_to_play;
}

var horror_info = new Array();
var horror_sound_action = new Array();
var horror_sound_scary = new Array();
var horror_sound_death = new Array();


// Initialize the story's state machine.
// Making this a function so name can be initialized before state machine
// (which uses name) is set up.
function initialize_choice_arrays () {
//instruction zero:
/*
    Selecting yes_option[0] will result in failArray[0]
    Selecting no_option[0] will advance to instructionArray[1]
*/
instructionArray[0] = "I awoke. Dizzied and surrounded by dark. My head was spinning and there was a sharp pain in the upper right side of my skull.  What am I doing here? \"Where is here?\" I thought. First things first, orient myself. I couldn't remember what had happened prior to my unconsciousness. I stood up and looked ahead. There was a vague outline of a path that appeared to lead up to a house. I could barely make out an old mansion. I looked behind myself and saw nothing but black. I heard what sounded like footsteps walking toward me from the rear.";
yes_options[0] = "INVESTIGATE THE FOOTSTEPS";
no_options[0] = "WALK TOWARD THE HOUSE";
failArray[0] = "I turned around and walked away from the house. A large figure walked toward me on the path. In its hand I saw what appeared to be an ax. \"Hello?\" I ventured. No response, just a quickened pace. Its arm lifted the weapon high into the air. I turned to run but I was too late. The ax brutally removed my head from its shoulders. This is the end of my story.";
horror_info[0] = new horror(true,true,false,0,1,false,false);
horror_sound_action[0] = new action_sound(s_footsteps_outside,s_footsteps_outside);
//this will make the wind blow when the character asks "Where is here?"
//              (note, i determined this by finding the character index in code of the point i wanted it played, and subtracting the value of characters outside the string.)
//              (simply put, the character i subtracted 26 (character index of start of string in code) from 176, the place of teh spot desired. )
horror_sound_scary[0] = new scary_sound(s_wind,152);
//this will play the sound of the axe killing the character after the sentence "but i was too late"
horror_sound_death[0] = new scary_sound(s_decapitation,278);

//instruction one:
/*
    This is a checkpoint.
    Selecting yes_option[1] will advance to instructionArray[2]
    Selecting no_option[1] will advance to instructionArray[3]
*/
instructionArray[1] = "I made my way up to the house. It appeared to be old and in need of repairs. Regardless, it held a certain beauty. There looked to be about four stories, each floor big enough to contain a large family. Something gleamed to my left on the path. I looked over and saw a hatchet.";
yes_options[1] = "LEAVE THE HATCHET";
no_options[1] = "PICK UP THE HATCHET";
horror_info[1] = new horror(true,false,false,2,3,false,false);
horror_sound_action[1] = new action_sound(s_footsteps_outside,s_footsteps_outside);
horror_sound_scary[1] = new scary_sound(s_axe,-1);
horror_sound_death[1] = new scary_sound(s_axe,30);

//instruction two:
/*
    Selecting yes_option[2] will result in failArray[1]
    Selecting no_option[2] will result in failArray[2]
*/
instructionArray[2] = "I left the hatchet and continued on toward the house. As I climbed the porch, the planks protested my presence through sharp whining. I reached for the door and heard rustling behind me. I swiveled my head and saw a dark figure hulking toward me. I couldn't make out its eyes but noticed an ax in its hand. I said, \"Hello?\"... no response. It then swung an ax in my direction and growled. I was in danger.";
yes_options[2] = "ATTACK";
no_options[2] = "RUN";
failArray[1] = "I ran at it, swinging my fists. It stopped me with ease through use of a sharpened ax. The last thing I saw was red on silver. This is the end of my story.";
failArray[2] = "I attempted to run and heard a whoosh. The ax tore through the upper section of my spine. I could feel my shoulder blades separating. This is the end of my story...";
horror_info[2] = new horror(false,true,true,1,2,false,false);
horror_sound_action[2] = new action_sound(s_rustle,s_rustle);
horror_sound_scary[2] = new scary_sound(s_floor_creak,89);
horror_sound_death[2] = new scary_sound(s_stab,120); /* CAN BARELY HEAR */

//instruction three:
/*
    Selecting yes_option[3] will advance to instructionArray[4]
    Selecting no_option[3] will result in failArray[3]
*/
instructionArray[3] = "I picked the hatchet up and continued on toward the house. As I climbed the porch, the planks protested my presence through sharp whining. I reached for the door and heard rustling behind me. I swiveled my head and saw a dark figure hulking toward me. I couldn't make out its eyes but noticed an ax in its hand. I said, \"Hello?\"... no response. It then swung an ax in my direction and growled. I knew at this point I was in danger.";
yes_options[3] = "ATTACK";
no_options[3] = "RUN";
failArray[3] = "I attempted to run and heard a whoosh. The ax tore through the upper section of my spine. I could feel my shoulder blades separating. This is the end of my story...";
horror_info[3] = new horror(false, false, true, 4, 3, false, false);
horror_sound_action[3] = new action_sound(s_rustle,s_rustle);
horror_sound_scary[3] = new scary_sound(s_floor_creak,94);
horror_sound_death[3] = new scary_sound(s_stab,86); /* CAN BARELY HEAR */

//instruction four:
/*
    Selecting yes_option[4] will advance to instructionArray[5]
    Selecting no_option[4] will advance to instructionArray[6]
*/
instructionArray[4] = "I ran at it, it swung an ax and I ducked. I swung my hatchet into its throat. It let out a yowl and fell in a heap. It had ceased breathing and I picked up the ax.";
yes_options[4] = "HEAD TOWARDS THE HOUSE";
no_options[4] = "EXAMINE THE BODY";
horror_info[4] = new horror(false, false, false, 5, 6, false, false);
horror_sound_action[4] = new action_sound(s_fast_heartbeat,s_fast_heartbeat); /* CAN BARELY HEAR */
horror_sound_scary[4] = new scary_sound(s_man_growl,84); /* CAN BARELY HEAR */
horror_sound_death[4] = new scary_sound(s_axe,30);

//instruction five:
/*
    Selecting yes_option[5] will advance to instructionArray[7]
    Selecting no_option[5] will result in failArray[4]
    failArray is now at -1 place (gap elimination)
*/
instructionArray[5] = "As I made my way back to the porch, I wondered why I was attacked and I was thankful for having a weapon. \"Why was he trying to kill me?\" I wondered. I reached the porch. I tried to open the front door but the door was locked. If I had tried running from my attacker earlier, I would have been met with a latched door. There was a window on the right and one on the left. I could hear more rustling in the distance.";
yes_options[5] = "OPEN A WINDOW";
no_options[5] = "STAY OUTSIDE THE HOUSE";
failArray[4] = "I stood on the porch with an ax and a hatchet. A couple minutes passed and several large men with weapons of various assortments arrived at the porch. I attempted to fight them off, regretting not having climbed through a window, but there were too many. I couldn't tell you if it was blades or bludgeoning that killed me. This is the end of my story."
horror_info[5] = new horror(false, false, true, 7, 4, false, false);
horror_sound_action[5] = new action_sound(s_slow_heartbeat,s_slow_heartbeat); /* CAN BARELY HEAR */
horror_sound_scary[5] = new scary_sound(s_locked_door,224);
horror_sound_death[5] = new scary_sound(s_rage_of_blades,164);

//instruction six:
/*
    Selecting yes_option[6] will advance to instructionArray[7]
    Selecting no_option[6] will result in failArray[5]
*/
instructionArray[6] = "I turned the face to view it. It was a man. He appeared dirty and unshaven. In his pocket, I found a picture...The picture was of me! Underneath the photo was the word \"KILL\". \"Well, that explains the ax.\" I muttered. I made my way back to the porch, thankful I had weapons. I reached the porch. I tried to open the front door but the door was locked. If I had tried running from my attacker earlier, I would have been met with a latched door. There was a window on the right and one on the left. I could hear more rustling in the distance.";
yes_options[6] = "OPEN A WINDOW";
no_options[6] = "STAY OUTSIDE THE HOUSE";
failArray[5] = "I stood on the porch with an ax and a hatchet. A couple minutes passed and several large men with weapons of various assortments arrived at the porch. I attempted to fight them off, regretting not having climbed through a window, but there were too many. I couldn't tell you if it was blades or bludgeoning that killed me. This is the end of my story.";
horror_info[6] = new horror(false, false, true, 7, 5, false, false);
horror_sound_action[6] = new action_sound(s_slow_heartbeat,s_slow_heartbeat); /* CAN BARELY HEAR */
horror_sound_scary[6] = new scary_sound(s_locked_door,351);
horror_sound_death[6] = new scary_sound(s_rage_of_blades,153);

//instruction seven:
/*
    illusion of choice.
    Selecting yes_option[7] will advance to instructionArray[8]
    Selecting no_option[7] will advance to instructionArray[8]
*/
instructionArray[7] = "There are two windows. Which window do I open?";
yes_options[7] = "OPEN THE LEFT WINDOW";
no_options[7] = "OPEN THE RIGHT WINDOW";
horror_info[7] = new horror(false, false, false, 8, 8, false, false);
horror_sound_action[7] = new action_sound(s_window_open,s_window_open);
horror_sound_scary[7] = new scary_sound(s_axe,-1);
horror_sound_death[7] = new scary_sound(s_axe,30);

//instruction eight:
/*
    This is a checkpoint.
    Selecting yes_option[8] will result in failArray[6]
    Selecting no_option[8] will advance to instructionArray[9]
    failArray is now at -2 places (gap elimination)
*/
instructionArray[8] = "I messed around with the window and it opened with no resistance. I climbed inside and shut the window behind me. For good measure, I locked both windows. I took a moment and viewed the room I was in. It was a large hall. Suddenly a memory flashed... I am an investigator. I was on a major case. What was that case about...? Bang! A loud noise from the next room over. Two doors. One door leading to the noise and another door leading away from it.";
yes_options[8] = "OPEN THE DOOR LEADING TOWARD THE NOISE";
no_options[8] = "GO THROUGH THE DOOR LEADING AWAY FROM THE NOISE";
failArray[6] = "I bravely opened the door that led to the noise. The mystery was instantly solved. There stood a man with a large shotgun in his hands. He wasted no time in taking aim at my body. Not that aim mattered with a gun like that. I quickly threw my hatchet at him. He moved to the left but my hatchet cut his thigh. It delayed the shooter slightly but didn't stop him. Pow! The shot tore through my midsection. This is the end of my story.";
horror_info[8] = new horror(true, true, false, 6, 9, false, false);
horror_sound_action[8] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[8] = new scary_sound(s_door_metal,331);
horror_sound_death[8] = new scary_sound(s_shotgun_shot,362);

//instruction nine:
/*
    Selecting yes_option[9] will advance to instructionArray[10]
    Selecting no_option[9] will advance to instructionArray[10]
*/
instructionArray[9] = "I scrambled away from the banging sound coming from the other door behind me. I passed through door in front of me and found myself in a large dining room. There were lit candles on a long dark wooden table. The table was set but no food was present. I knew I had to leave this room because it was apparent someone had recently been here. There was a closet and other random furniture and items in the room. I then heard footsteps coming toward the door I had just entered through. There was a clicking sound which I likened to a shotgun being loaded.";
yes_options[9] = "HIDE UNDER THE TABLE";
no_options[9] = "HIDE IN THE CLOSET";
horror_info[9] = new horror(false, false, false, 10, 10, false, false);
horror_sound_action[9] = new action_sound(s_long_heartbeat,s_long_heartbeat);
horror_sound_scary[9] = new scary_sound(s_pump_shotgun,488);
horror_sound_death[9] = new scary_sound(s_axe,30);

//instruction ten:
/*
    Selecting yes_options[10] will advance to instructionArray[11]
    Selecting no_options[10] will result in failArray[7]
    failArray is now at -3 places (gap elimination)
*/
instructionArray[10] = "I hid and a man entered the room. He had a white shirt on with red stains. He wore a torn sack on his head and carried a double barreled shotgun. I held my breath. Lucky for me the man quickly stepped through the kitchen. He knocked over some chairs and arrived at a staircase and a door. He chose the door and exited the room. I waited until I no longer heard him. \"I need a gun\" I thought.";
yes_options[10] = "GO UP THE STAIRS";
no_options[10] = "FOLLOW THE MAN WITH THE SHOTGUN";
failArray[7] = "I opened the door. Despite my attempts to be quiet, it creaked loudly. I heard shouting and heavy footsteps. The man with the shotgun appeared and before I could defend myself, he blew my head off with a hail of bullets. This is the end of my story.";
horror_info[10] = new horror(false, false, true, 11, 7, false, false);
horror_sound_action[10] = new action_sound(s_stair_climb,s_door_wood);
horror_sound_scary[10] = new scary_sound(s_walking_away,153);
horror_sound_death[10] = new scary_sound(s_shotgun_shot,219);

//instruction eleven:
/*
    selecting yes_options[11] will result in failArray[8]
    selecting no_options[11] will advance to instractionArray[12]

*/
instructionArray[11] = "I made my way up the staircase to what appeared to be the second floor of the house. There was a long hallway ahead of me. There was a table with a lit candle on it. I saw what looked to be a folder. There was a single sheet of lined paper on it. |A scrawled quote was written, \"Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.\" -Sigmund Freud. |\"Well that\'\'s a load of crap\" I thought to myself. I paused and contemplated my current situation. I had a fleeting thought, \"Maybe I should just burn this house down...\"";
yes_options[11] = "USE THE CANDLE TO START A FIRE";
no_options[11] = "KEEP EXPLORING THE HALLWAY";
failArray[8] = "I lit the paper on fire and threw it on the floor. I then used the candle to light the wallpaper on fire. It was peeling and dry and made for highly flammable material. The house began to burn. I made my way away from the fire and hit a locked door at the end of the hallway. I turned back to pass through the fire but it was too large. I was trapped. I tried to run through the fire but it burned me. I ran back to the door and tried to kick it in, to no avail. There was no escaping. My choice ended with my body being burnt alive. A terrible, overly long experience of the most unimaginable pain. This is the end of my story.";
horror_info[11] = new horror(false, true, false, 8, 12, false, false);
horror_sound_action[11] = new action_sound(s_demon_girl,s_page_turn);
horror_sound_scary[11] = new scary_sound(s_tense3,592);
horror_sound_death[11] = new scary_sound(s_fire,336);

//instruction twelve:
/*
    selecting yes_options[12] will advance to instructionArray[13]
    selecting no_options[12] will result in failArray[9]

*/
instructionArray[12] = "\"Yeah, I shouldn\'t start a fire\", I thought as I walked forward. First I heard a lock click at the end of the hallway and then I heard a shrill scream. |It sounded like a woman yelling from behind the door. \"Help!! He\'s going to kill me!\"";
yes_options[12] = "RESCUE THE WOMAN";
no_options[12] = "LEAVE HER";
failArray[9] = "I turned around and ran away from her voice. I heard a crushing sound accompanied with a final scream, followed by silence. I continued running, I reached the stairs, headed down and hit the dining room. I was met with five people in red, priest-like robes. I stopped short. They were holding swords. I yelled at them \"What the hell is going on here?!\" and I turned around again. I ran straight into a man with no shirt. He was completely bald and holding an ax. I swung at him with my hatchet and he hit my wrist. My hatchet dropped. I raised my ax but wasn\'\'t fast enough. His ax came down right in the top center of my head. This is the end of my story.";
horror_info[12] = new horror(false, false, true, 13, 9, false, false);
horror_sound_action[12] = new action_sound(s_tense,s_tense);
horror_sound_scary[12] = new scary_sound(s_scream_woman,154);
horror_sound_death[12] = new scary_sound(s_flesh_split,629);

//instruction thirteen:
/*
    This is a checkpoint.
    selecting yes_options[13] will advance to instructionArray[14]
    selecting no_options[13] will advance to instructionArray[15]

*/
instructionArray[13] = "I boldly opened the door. I saw a woman. There was a man with a sledge hammer walking toward her aggressively. The woman had blonde hair and her face had some blood on it. She was my age and looked terrified. \"Hey!\" I yelled at the man, \"Leave her alone!\" The man was in stained overalls and had no shoes on. He turned his attention to me and headed my way. I gripped my ax and hatchet tightly in each hand. The man swung his sledgehammer at me, I quickly ducked and swung my ax deep into his chin. The man grunted and fell to the ground.";
yes_options[13] = "TALK WITH THE WOMAN";
no_options[13] = "INSPECT THE BODY";
horror_info[13] = new horror(true, false, false, 14, 15, false, false);
horror_sound_action[13] = new action_sound(s_fast_heartbeat,s_fast_heartbeat);
horror_sound_scary[13] = new scary_sound(s_flesh_split,496);
horror_sound_death[13] = new scary_sound(s_axe,30);

//instruction fourteen
/*
    Selecting yes_options[14] will advance to instructionArray[17]
    Selecting no_options[14] will advance to instructionArray[18]

*/
instructionArray[14] = "I asked the woman, \"How did you end up here and what the hell is going on?\" |She stared at me, she looked half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'\'t remember how I got here. This place is full of psychotics who seem to want to murder us.\" she said. \"What\'\'s your name?\" |\"My name is " + name + ".\" |\"Hello, " + name + ", my name is Jessica.\" she replied. |\"I also don\'t know how I ended up here. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on it.\" |Jessica responded with, \"We should get out of here together.\" |\"Can I trust her?\" I thought to myself.";
yes_options[14] = "YES, LEAVE WITH THE WOMAN";
no_options[14] = "NO, LEAVE HER BEHIND";
horror_info[14] = new horror(false, false, false, 17, 18, false, false);
horror_sound_action[14] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[14] = new scary_sound(s_axe,-1);
horror_sound_death[14] = new scary_sound(s_axe,30);

//instruction fifteen
/*
    Selecting yes_options[15] will advance to instructionArray[16]
    Selecting no_options[15] will result in failArray[10]
*/
instructionArray[15] = "The woman watched me from the corner of the room. I searched the man's pockets. A picture of me with KILL written on it. I also found prescription psychotropic pills. I asked the woman, \"How did you end up here and what the hell is going on?\" |She stared at me, she looked half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'\'t remember how I got here. This place is full of psychotics who seem to want to murder us.\" she said.";
yes_options[15] = "TALK MORE WITH THE WOMAN";
no_options[15] = "LEAVE THE ROOM";
failArray[10] = "I left the woman and re-entered the hallway I had come from. I walked right into a large man. He grinned and then everything went black. The last thing I felt was explosive pain on the top of my head. This is the end of my story.";
horror_info[15] = new horror(false, false, true, 16, 10, false, false);
horror_sound_action[15] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[15] = new scary_sound(s_axe,-1);
horror_sound_death[15] = new scary_sound(s_panic,93);

//instruction sixteen
/*
    Selecting yes_options[16] will advance to instructionArray[17]
    Selecting no_options[16] will advance to instructionArray[18]
*/
instructionArray[16] = "\"What\'s your name?\" she asked. |\"My name is " + name + ".\" I replied. |\"Hello, " + name + ", my name is Jessica.\" she replied. |\"I also don\'t know how I ended up here. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on it.\" |Jessica responded with, \"We should get out of here together.\" |\"Can I trust her?\" I thought to myself.";
yes_options[16] = "YES, LEAVE WITH THE WOMAN";
no_options[16] = "NO, LEAVE HER BEHIND";
horror_info[16] = new horror(false, false, false, 17, 18, false, false);
horror_sound_action[16] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[16] = new scary_sound(s_axe,-1);
horror_sound_death[16] = new scary_sound(s_axe,30);

//instruction seventeen
/*
    Selecting yes_options[17] will advance to instructionArray[19]
    selecting no_options[17] will result in failArray[11]
*/
instructionArray[17] = "\"Okay. I\'ll leave with you. But who are you?\" I asked, \"I don\'\'t know the first thing about you.\" |\"I woke up in here. Last thing I remember is being at work and-\" she began. |\"Shhhh!\" I snapped. I heard footsteps approaching the door...";
yes_options[17] = "GIVE JESSICA MY HATCHET";
no_options[17] = "KEEP BOTH WEAPONS FOR MYSELF";
failArray[11] = "A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand. Jessica was near him. He didn\'t notice her. She jumped on his back. He aimed his gun at me and pulled the trigger. This is the end of my story.";
horror_info[17] = new horror(false, false, true, 19, 11, false, false);
horror_sound_action[17] = new action_sound(s_panic,s_panic);
horror_sound_scary[17] = new scary_sound(s_footsteps_wood,185);
horror_sound_death[17] = new scary_sound(s_pistol,231);

//instruction eighteen
/*
    Selecting yes_options[18] will advance to instructionArray[19]
    Selecting no_options[18] will result in failArray[12]
*/
instructionArray[18] = "\"No, I\'m heading out alone. You\'\'ll only be a burden.\" I said. |The woman glared and said, \"I\'m sorry. But we are not separating. You just saved my life and both of our chances of survival are increased by me coming with you.\" |I looked at her, considered arguing but she looked determined. I gave up. \"Okay. I\'ll leave with you. But who are you?\" I asked, \"I don\'t know the first thing about you.\" |\"I woke up in here,\" she began. \"The last thing I remember is being at work and-\" |\"Shhhh!\" I snapped. I heard footsteps approaching the door...";
yes_options[18] = "GIVE JESSICA MY HATCHET";
no_options[18] = "KEEP BOTH WEAPONS FOR MYSELF";
failArray[12] = "A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand. Jessica was near him. He didn\'t notice her. She jumped on his back. He aimed his gun at me and pulled the trigger. This is the end of my story.";
horror_info[18] = new horror(false, false, true, 19, 12, false, false);
horror_sound_action[18] = new action_sound(s_panic,s_panic);
horror_sound_scary[18] = new scary_sound(s_footsteps_wood,501);
horror_sound_death[18] = new scary_sound(s_pistol,231);

//instruction nineteen
/*
    Selecting yes_options[19] will advance to instructionArray[20]
    Selecting no_options[19] will result in failArray[13]
*/
instructionArray[19] = "I threw my hatchet on the floor near Jessica and said, \"Take this.\" |A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand. Jessica was near him. He didn\'t notice her.";
yes_options[19] = "DODGE HIM";
no_options[19] = "ATTACK HIM";
failArray[13] = "I ran toward the man. Jessica jumped on his back. He struggled and aimed his gun at me. He pulled the trigger. This is the end of my story.";
horror_info[19] = new horror(false, false, true, 20, 13, false, false);
horror_sound_action[19] = new action_sound(s_woosh,s_panic);
horror_sound_scary[19] = new scary_sound(s_kick_door_down,78);
horror_sound_death[19] = new scary_sound(s_pistol,110);

//instruction twenty
/*
    Selecting yes_options[20] will advance to instructionArray[21]
    Selecting no_options[20] will result in failArray[14]
*/
instructionArray[20] = "I moved backward. He took careful aim at my head and - crunch! Jessica\'s hatchet sunk into the back of his head, killing him instantly. She stared at me for a couple seconds. I walked over and picked up the pistol. I checked it, it was loaded and appeared to hold six bullets. \"Well done,\" I said. \"Now let\'s get out of here.\"";
yes_options[20] = "EXPLORE THE BACK OF THE ROOM";
no_options[20] = "HEAD OUT THE DOOR I CAME IN";
failArray[14] = "Jessica and I went out the door. In the hallway was a crowd of men, wearing similar red robes to the man with the pistol. I immediately began firing my pistol but there was a problem; they had guns too. This is the end of my story.";
horror_info[20] = new horror(false, false, true, 21, 14, false, false);
horror_sound_action[20] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[20] = new scary_sound(s_stab,61);
horror_sound_death[20] = new scary_sound(s_gun_fight,121);

//instruction twentyone
/*
    illusion of choice.
    Both options will lead to instruction array[22]

*/
instructionArray[21] = "We headed to the back of the room. Jessica found a flashlight. There was a small doorway. I opened it and saw a staircase leading up. It was dark. I decided to cover our path, so I moved a bookshelf in front of the door. I left enough room for us to squeeze in. I shut the door behind us.";
yes_options[21] = "HEAD UP FIRST";
no_options[21] = "HAVE JESSICA LEAD";
horror_info[21] = new horror(false, false, false, 22, 22, false, false);
horror_sound_action[21] = new action_sound(s_tense2,s_tense2);
horror_sound_scary[21] = new scary_sound(s_axe,-1);
horror_sound_death[21] = new scary_sound(s_axe,30);

//instruction twentytwo
/*
    This is a checkpoint.
    Selecting yes_options[22] will result in failArray[15]
    Selecting no_options[22] will advance to instructionArray[23]
*/
instructionArray[22] = "We headed up. The stairs creaked. There were spiderwebs and it smelled like rotted wood. Ahead of us there was a skittering sound. Jessica gasped. I put my hand on her mouth and whispered for her to be quiet. Her skin was ice cold. I grabbed the flashlight and told Jessica to stay where she was. I walked ahead and reached the top of the stairs. We were in a library. The books were covered in dust and cobwebs. They appeared to be on a variety of subjects. I looked up and saw large spikes hanging from the ceiling. Very odd. I then panned the flashlight left to right and stopped my flashlight on a body.";
yes_options[22] = "INSPECT THE BOOKS";
no_options[22] = "INSPECT THE BODY";
failArray[15] = "I called Jessica over. We walked over to the books. I picked one up. It was then I realized that the book triggered the spikes. Faster than I could react, the spikes fell from the ceiling. Jessica and I were impaled from above and this is the end of my story.";
horror_info[22] = new horror(true, true, false, 15, 23, false, false);
horror_sound_action[22] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[22] = new scary_sound(s_door_wood,37);
horror_sound_death[22] = new scary_sound(s_flesh_split,189);

//instruction twentythree
/*
    Selecting yes_options[23] will advance to instructionArray[24]
    Selecting no_options[23] will result in failArray[16]
*/
instructionArray[23] = "I called Jessica over. This time she didn\'t gasp. We walked over to the body. It was on a metal table - out of space in the library. The body was a dead man. It appeared the top of his head and shoulders had been impaled. |The corpse held a book in its hand - \"Boy\" by Roald Dahl. |Blood dripped from the table onto the floor. There was a bloodied note next to the body.";
yes_options[23] = "READ THE NOTE";
no_options[23] = "INSPECT THE BOOKS";
failArray[16] = "We walked over to the books. I picked one up. It was then I realized the reason for the spikes. Faster than I could react, the spikes fell from the ceiling. Jessica and I were impaled from above. This is the end of my story.";
horror_info[23] = new horror(false, false, true, 24, 16, false, false);
horror_sound_action[23] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[23] = new scary_sound(s_blood_drip,140);
horror_sound_death[23] = new scary_sound(s_flesh_split,157);

//instruction twentyfour
/*
    Selecting yes_options[24] will advance to instructionArray[25]
    Selecting no_options[24] will result in failArray[17]
*/
instructionArray[24] = "The note said \"Death from above - avoid the books\". |Something suddenly dropped onto my cheek from the ceiling. Cold. Wet. It was blood. I looked up, the spikes above the body were red with blood. It appeared that the books triggered the spikes somehow. |\"Jessica, we need to leave this library.\" I said.";
yes_options[24] = "HEAD TOWARD THE UNEXPLORED DOOR";
no_options[24] = "GO BACK FROM WHERE WE CAME";
failArray[17] = "We headed back toward the staircase we came in on. We got to the top of the stairs and began walking down. A man burst through the door at the bottom of the staircase and shot at us. I caught three bullets and saw Jessica go down as well. This is the end of my story.";
horror_info[24] = new horror(false, false, true, 25, 17, false, false);
horror_sound_action[24] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[24] = new scary_sound(s_blood_drip,61);
horror_sound_death[24] = new scary_sound(s_shotgun_shot,182);

//instruction twentyfive
/*
    Selecting yes_options[25] will result in failArray[18]
    Selecting no_options[25] will advance to instructionArray[26]
*/
instructionArray[25] = "We ran toward the doorway on the opposite side of the room from where we came in. There was a crash and footsteps up the stairway we had been on moments before. Hooded men entered the room with weapons leveled.";
yes_options[25] = "GO FOR THE DOOR";
no_options[25] = "GRAB A BOOK";
failArray[18] = "I ran toward the door and was shot in the back. I saw Jessica go down as well. A bullet had torn through her head. I felt an unbearable pain and burning in my lower back. I grabbed a book, the spikes came down. I figured if I was going, I was taking them with me. This is the end of my story.";
horror_info[25] = new horror(false, true, false, 18, 26, false, false);
horror_sound_action[25] = new action_sound(s_pistol,s_nosound);
horror_sound_scary[25] = new scary_sound(s_kick_door_down,105);
horror_sound_death[25] = new scary_sound(s_flesh_split,210);

//structure here gets a little strange
/*
 paths:
 26 -> 27
       27 -> 32

       27 -> 29
             29 -> 30
                   30 -> 32
             29 -> 31
                   31 -> 32
 26 -> 28
       28 - > 30
              30 -> 32
       28 - > 31
              31 -> 32


*/

//instruction twentysix
/*
    Selecting yes_options[26] will advance to instructionArray[27]
    Selecting no_options[26] will advance to instructionArray[28]
*/
instructionArray[26] = "Against my better judgement, I grabbed a book off the shelf and dove toward the door. Jessica was slightly ahead of me. The spikes on the ceiling came down swiftly. There was terrible screaming and then silence. We barely made it out from under the deadly spikes and got through the door. We were alive. I turned back to find the group of men behind us stabbed to death from the spikes. The spikes slowly rose back to the ceiling. And seven dead bodies fell to the floor. A floor saturated with red.";
yes_options[26] = "CHECK OUT THE ROOM";
no_options[26] = "TALK TO JESSICA";
horror_info[26] = new horror(false, false, false, 27, 28, false, false);
horror_sound_action[26] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[26] = new scary_sound(s_men_screaming,172);
horror_sound_death[26] = new scary_sound(s_axe,30);

//instruction twentyseven
/*
    Selecting yes_options[27] will advance to instructionArray[32]
    Selecting no_options[27] will advance to instructionArray[29]
*/
instructionArray[27] = "I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed a new door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole.";
yes_options[27] = "OPEN THE DOOR";
no_options[27] = "TALK TO JESSICA";
horror_info[27] = new horror(true, false, false, 32, 29, false, false);
horror_sound_action[27] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[27] = new scary_sound(s_tense3,247);
horror_sound_death[27] = new scary_sound(s_axe,30);

//instruction twentyeight
/*
 selecting yes_options[28] will advance to instructionArray[30]
 selecting no_options[28] will advance to instructionarray[31]
*/
instructionArray[28] = "\"This is utter madness.\" I said, \"It\'s like we\'re inside an unreal horror movie.\" |\"We need to get away - call the police,\" Jessica said. |\"Why are these psychotic people trying to kill us?\" I asked. \"And how did you get here?\" |Jessica responded, \"I was in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up; I managed my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiled. A smile - shockingly out-of-place in this nightmare.";
yes_options[28] = "SCAN THE ROOM";
no_options[28] = "SEARCH FOR A DOOR OUT";
horror_info[28] = new horror(false, false, false, 30, 31, false, false);
horror_sound_action[28] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[28] = new scary_sound(s_axe,-1);
horror_sound_death[28] = new scary_sound(s_axe,30);

//instruction twentynine
/*
 selecting yes_options[29] will advance to instructionArray[30]
 selecting no_options[29] will advance to instructionarray[31]
*/
instructionArray[29] = "\"This is utter madness.\" I said, \"It\'s like we\'re inside an unreal horror movie.\" |\"We need to get away. Call the police.\" Jessica said. |\"Why are these psychotic people trying to kill us?\" I asked. \"How did you get here?\" |Jessica responded, \"I was in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up; I managed my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiled. A smile - shockingly out-of-place in this nightmare.";
yes_options[29] = "SCAN THE ROOM";
no_options[29] = "SEARCH FOR A DOOR OUT";
horror_info[29] = new horror(false, false, false, 30, 31, false, false);
horror_sound_action[29] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[29] = new scary_sound(s_axe,-1);
horror_sound_death[29] = new scary_sound(s_axe,30);

//instruction thirty
/*
    selecting yes_options[30] will advance to instructionArray[32]
    selecting no_options[30] will advance to instructionArray[32]
*/
instructionArray[30] = "I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed an unventured door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole.";
yes_options[30] = "GO THROUGH THE DOOR";
no_options[30] = "FOLLOW JESSICA";
horror_info[30] = new horror(false, false, false, 32, 32, false, false);
horror_sound_action[30] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[30] = new scary_sound(s_tense3,255);
horror_sound_death[30] = new scary_sound(s_axe,30);

//instruction thirtyone
/*
    selecting yes_options[31] will advance to instructionArray[32]
    selecting no_options[31] will advance to instructionArray[32]
*/
instructionArray[31] = "I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed an unventured door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole.";
yes_options[31] = "GO THROUGH THE DOOR";
no_options[31] = "FOLLOW JESSICA";
horror_info[31] = new horror(false, false, false, 32, 32, false, false);
horror_sound_action[31] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[31] = new scary_sound(s_tense3,255);
horror_sound_death[31] = new scary_sound(s_axe,30);

//instruction thirty two
//all paths have rejoined at this point.
/*
    This is a checkpoint.
    selecting yes_options[32] will advance to instructionArray[33]
    selecting no_options[32] will advance to instructionArray[34]
*/
instructionArray[32] = "We entered the door and what I saw shocked me. A brand-new, stainless steel laboratory was in front of us. It was exceptionally bright and vast. I immediately saw a doctor operating on someone. There were two individuals in white surrounding him. Everyone was staring at Jessica and I. And they were smiling. But something was off with their smiles. The corners of their mouths were sewn upwards. The stitches held a permanent, forced smile on their cheeks. They also had blood on their hands and the front of their clothes.";
yes_options[32] = "IGNORE THEM";
no_options[32] = "TALK WITH THEM";
horror_info[32] = new horror(true, false, false, 33, 34, false, false);
horror_sound_action[32] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[32] = new scary_sound(s_tense,200);
horror_sound_death[32] = new scary_sound(s_axe,30);

//instruction thirtythree
/*
    selecting yes_options[33] will result in failArray[19]
    selecting no_options[33] will advance to instructionArray[34]
*/
instructionArray[33] = "Due to their utter creepiness, I ignored the group. I walked around the other side of the room. Looking for an exit. I then noticed it. The only exit was by the surgical team. They were still staring. Hands moving as they performed the action of surgery - smiling right at us. I had no choice but to confront them...";
yes_options[33] = "ATTACK THEM";
no_options[33] = "TALK WITH THEM";
failArray[19] = "I pulled out my pistol and methodically shot the three of them. Boom, boom, boom. Three head shots. I heard a bang from behind me and turned just as I felt a crushing blow on the left side of my head. I couldn't make out my attacker. This is the end of my story.";
horror_info[33] = new horror(false, true, false, 19, 34, false, false);
horror_sound_action[33] = new action_sound(s_tense,s_tense);
horror_sound_scary[33] = new scary_sound(s_tense,7);
horror_sound_death[33] = new scary_sound(s_threeshots,65);

//instruction thirtyfour
/*
    selecting yes_options[34] will advance to instructionArray[35]
    selecting no_options[34] will result in failArray[20]
*/
instructionArray[34] = "I walked closer and asked the surgeon, \"What happened to your face?\". He stared at me, making odd sounds. |Jessica screamed, \"They have no tongues!\" She was right, none of these individuals had tongues. |\"What the...\" I said as I looked down at the patient they were operating on. His brain was exposed. It appeared they were performing a brain surgery. But I noticed the patient wasn\'t breathing. He also stunk. \"He\'s dead. Why are you operating on a corpse?\". The surgeon\'s eyes flashed and he pointed at the door behind him. His assistants stood staring. It was evident they wanted us to leave...";
yes_options[34] = "LEAVE THE ROOM";
no_options[34] = "ATTACK THEM";
failArray[20] = "I pulled out my pistol and methodically shot the three of them. Boom, boom, boom. Three head shots. I heard a bang from behind me and turned just as I felt a crushing blow on the left side of my head. I couldn't make out my attacker. This is the end of my story.";
horror_info[34] = new horror(false, false, true, 35, 20, false, false);
horror_sound_action[34] = new action_sound(s_tense,s_tense);
horror_sound_scary[34] = new scary_sound(s_threeshots,-1);
horror_sound_death[34] = new scary_sound(s_threeshots,65);

//instruction thirtyfive
/*
    selecting yes_options[35] will advance to instructionArray[36]
    selecting no_options[35] will advance to instructionArray[37]
*/
instructionArray[35] = "I opened the door, let Jessica in and shut it behind us. I then locked it. Glad to be away from that room. |\"This is a nightmare.\" I said. |Jessica fell to the floor and rested against the wall. I sat next to her. She was shaking. |\"What...is...happening...here?\" she trembled. |\"I\'ve never heard of or seen such filth and such depravity...\" |She asked me, \"What were those people doing? Why were they disfigured?\" |I looked at her and tried to think of something comforting to say. But nothing intelligent entered my mind. I sat, confused and upset.";
yes_options[35] = "SIT IN SILENCE";
no_options[35] = "TALK WITH JESSICA";
horror_info[35] = new horror(true, false, false, 36, 37, false, false);
horror_sound_action[35] = new action_sound(s_sobbing,s_nosound);
horror_sound_scary[35] = new scary_sound(s_sobbing,-1);
horror_sound_death[35] = new scary_sound(s_axe,30);

//instruction thirtysix
/*
    selecting yes_options[36] will advance to instructionArray[38]
    selecting no_options[36] will result in failArray[21]
*/
instructionArray[36] = "I looked around the room we were in. It was small and undecorated. It was wild to me that this \'house\' had so many elements. It didn't mesh well; a library, an old-fashioned dining room, a laboratory... I still didn't know where I was or how I got here exactly. \"We need to get out of this torment.\" I looked over the room. It was small. There were two doors. One door with light coming from the bottom. The other door had a cool breeze and no light on the bottom.";
yes_options[36] = "ENTER THE ROOM WITH THE BREEZE";
no_options[36] = "ENTER THE DOOR WITH THE LIGHT";
failArray[21] = "I stood up, grabbed Jessica\'s hand and lifted her to a standing position. We walked to the door and opened it. It was a mistake. In front of us was a large conference table with about 30 people at it. They held an assortment of weapons. I mustered my words and began saying, \"Please don\'t kill-\". This is the end of my story.";
horror_info[36] = new horror(false, false, true, 38, 21, false, false);
horror_sound_action[36] = new action_sound(s_pin_drop,s_pin_drop);
horror_sound_scary[36] = new scary_sound(s_tense2,208);
horror_sound_death[36] = new scary_sound(s_pistol,297);

//instruction thirtyseven
/*
    selecting yes_options[37] will advance to instructionArray[38]
    selecting no_options[37] will result in failArray[22]
*/
instructionArray[37] = "\"Look Jessica,\" I said, \"I have no idea what\'s going on in this place. I\'ve never experienced anything remotely like this. Do you know how you got here?\" |\"The last memory I had was being at work,\" she answered, \"And then I awoke on a path outside this house. I don\'t know how or why I arrived here. I\'m just trying to stay alive.\". |I acknowledged her. I wanted to find out more but knew that we couldn\'t sit here any longer. \"We need to get out of this torment.\" I looked over the room. It was small. There were two doors. One door with light coming from the bottom. The other door had a cool breeze and no light on the bottom.";
yes_options[37] = "ENTER THE ROOM WITH THE BREEZE";
no_options[37] = "ENTER THE DOOR WITH THE LIGHT";
failArray[22] = "I stood up, grabbed Jessica\'s hand and lifted her to a standing position. We walked to the door and opened it. It was a mistake. In front of us was a large conference table with about 30 people at it. They held an assortment of weapons. I mustered my words and began saying, \"Please don\'t kill-\". This is the end of my story.";
horror_info[37] = new horror(false, false, true, 38, 22, false, false);
horror_sound_action[37] = new action_sound(s_pin_drop,s_pin_drop);
horror_sound_scary[37] = new scary_sound(s_tense2,545);
horror_sound_death[37] = new scary_sound(s_pistol,297);

//instruction thirtyeight
/*
    selecting yes_options[38] will result in failArray[23]
    selecting no_options[38] will advance to instructionArray[39]
*/
instructionArray[38] = "I stood up, grabbed Jessica's hand and lifted her to a standing position. We walked to the door and opened it. I blinked. We were outside! I scanned the area. Wait... We were outside but we weren't outside. We were in an outdoor corridor. To my left was the exterior of the house, to my right was a 15 foot tall fence with brutal spikes at the top and in front of us was a path that appeared to lead to another door.";
yes_options[38] = "CLIMB THE FENCE";
no_options[38] = "TAKE THE PATH TO THE DOOR";
failArray[23] = "I walked over the fence and gripped the bars. |\"Are you sure that\'s a good idea?\" Jessica asked. She eyed the spikes at the top. |\"I\'m a good climber.\" I replied, \"I\'ll figure something out.\" |\"Okay,\" she said, \"But I can\'t climb it, so what happens when you get over?\" |\"I said I\'d figure it out!\" I snapped back. |I handed her my pistol and began making my way up the fence. The bars were slightly rusted, which helped my grip. I made it to the top, sweating and out of breath. I reached over the spikes and pulled. I slipped and fell forward. I heard Jessica yell and then felt the rusted spikes impale my throat and upper body. This is the end of my story.";
horror_info[38] = new horror(false, true, false, 23, 39, false, false);
horror_sound_action[38] = new action_sound(s_wind,s_wind);
horror_sound_scary[38] = new scary_sound(s_wind,116);
horror_sound_death[38] = new scary_sound(s_stab,622);

//instruction thirtyeight
/*
    selecting yes_options[39] will advance to instructionArray[40]
    selecting no_options[39] will result in failArray[24]
*/
instructionArray[39] = "Jessica breathed a sigh of relief. \"Thank goodness you\'re not going to climb that fence. That would be a death wish!\" |I chuckled. We made our way down the dark path, gravel crunching under our feet. I reached the door and turned the handle. It was locked.";
yes_options[39] = "LOOK FOR THE KEY";
no_options[39] = "KICK THE DOOR DOWN";
failArray[24] = "\"I have always wanted to do this,\" I said to Jessica. |She grinned. I lifted my leg and kicked the door. Bang! It cracked near the handle but didn\'t give. I lifted my leg for a second blow and heard a noise behind us. The door we had entered from opened. I turned to see a crowd of people pouring out. |\"They heard us!\" Jessica yelled. She held her hatchet up and I pulled out my pistol. We didn\'t stand a chance, we were outmanned and outgunned. The last thing I saw was a barrel of a shotgun. This is the end of my story.";
horror_info[39] = new horror(false, false, true, 40, 24, false, false);
horror_sound_action[39] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[39] = new scary_sound(s_walking_gravel,175);
horror_sound_death[39] = new scary_sound(s_kick_door_down,108);

//instruction forty
/*
    selecting yes_options[40] will advance to instructionArray[41]
    selecting no_options[40] will advance to instructionArray[42]

*/
instructionArray[40] = "\"Jessica, help me find the key.\" I said. |I looked on the path. Jessica lifted the door mat and what do you know? There was a key. It was an old-fashioned, large fancy-looking key. |\"You\'re welcome,\" she winked as she handed it to me. |I tried it and it worked! The door clicked and opened. Immediately something jumped on top of me and knocked me on my back.";
yes_options[40] = "CALL FOR HELP";
no_options[40] = "ATTACK WHATEVER WAS ON TOP OF ME";
horror_info[40] = new horror(true, false, false, 41, 42, false, false);
horror_sound_action[40] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[40] = new scary_sound(s_thump,344);
horror_sound_death[40] = new scary_sound(s_axe,30);

//instruction fortyone
/*
    selecting yes_options[41] will advance to instructionArray[43]
    selecting no_options[41] will result in DEATH (failArray[25])
*/
instructionArray[41] = "I yelled for Jessica. She swung her hatchet, there was a shrill yelp and blood splattered across my face. I quickly wiped my eyes and stood to my feet, pistol at the ready. On the floor, there was a dead dog, half of its neck sliced through. It was a wolf-like dog, large and, by all appearances, hungry. |\"Really?\" I asked, \"Crazy people and now a killer dog...\". I looked to Jessica, she was panting and her hatchet dripped. \"Thank you.\" |She nodded in response. In the corner there was a set of television screens. |\"I think it\'s a security system.\" I said to Jessica and myself.";
yes_options[41] = "TURN THE SCREENS ON";
no_options[41] = "LEAVE THEM BE";
failArray[25] = "I didn\'t turn on security camera screens. Jessica and I scanned the room. I searched a nearby bookcase. There were books on human anatomy and neurology. I picked up one entitled \"Brains and Minds\" and flipped through. There were diagrams of different section of the brains indicating where to cut to supposedly affect behavior. |\"Jessica, you have to see -\" |I turned my head and saw Jessica being held from behind by a tall man. How did I not hear him? He had a knife to her throat. I raised my weapon and while staring directly at me, the man ran the knife through the front of her neck. Jessica died. I took my ax and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. This is the end of my story.";
horror_info[41] = new horror(false, false, true, 43, 25, false, false);
horror_sound_action[41] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[41] = new scary_sound(s_yelp,72);
horror_sound_death[41] = new scary_sound(s_stab,719);

//instruction fortytwo
/*
    selecting yes_options[42] will advance to instructionArray[43]
    selecting no_options[42] will result in DEATH (failArray[26])
*/
instructionArray[42] = "I pushed my hands against the heavy attacker. Jessica swung her hatchet, there was a shrill yelp and blood splattered across my face. I quickly wiped my eyes and stood to my feet, pistol at the ready. On the floor, there was a dead dog, half of its neck sliced through. It was a wolf-like dog, large and, by all appearances, hungry. |\"Really?\" I asked. \"Crazy people and now a killer dog...\" I looked to Jessica, she was panting and her hatchet dripped. \"Thank you.\" |She nodded in response. In the corner there was a set of television screens. |\"I think it\'s a security system.\" I said to Jessica and myself.";
yes_options[42] = "TURN THE SCREENS ON";
no_options[42] = "LEAVE THEM BE";
failArray[26] = "I didn\'t turn on security camera screens. Jessica and I scanned the room. I searched a nearby bookcase. There were books on human anatomy and neurology. I picked up one entitled \"Brains and Minds\" and flipped through. There were diagrams of different section of the brains indicating where to cut to supposedly affect behavior. |\"Jessica, you have to see -\" |I turned my head and saw Jessica being held from behind by a tall man. How did I not hear him? He had a knife to her throat. I raised my weapon and while staring directly at me, the man ran the knife through the front of her neck. Jessica died. I took my ax and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. This is the end of my story.";
horror_info[42] = new horror(false, false, true, 43, 26, false, false);
horror_sound_action[42] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[42] = new scary_sound(s_yelp,100);
horror_sound_death[42] = new scary_sound(s_stab,719);

//instruction fortythree
/*
    selecting yes_options[43] will advance to instructionArray[44]
    selecting no_options[43] will result in DEATH (failArray[27])
*/
instructionArray[43] = "I turned the security system screens on. There were eight screens. I could see some areas where we had been and a couple we had not. Suddenly there was a tall figure on one of the screens. He was coming up the path we had just walked on. He held a long butcher\'s knife in his right hand. I couldn\'t make out his face. |\"Jessica!\" I hissed, \"Someone\'s coming.\"";
yes_options[43] = "HIDE";
no_options[43] = "PREPARE TO ATTACK";
failArray[27] = "\"Get your weapon ready.\" I told Jessica. |I stood by the door readied. I heard a small noise and turned my head and saw Jessica being held from behind my a tall man. He had a knife to her throat. How did he get by us? How did we not see or hear him? I raised my weapon and while staring directly at me, the man ran the knife through the front of her neck. Jessica died. I took my ax and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. This is the end of my story.";
horror_info[43] = new horror(false, false, true, 44, 27, false, false);
horror_sound_action[43] = new action_sound(s_tense,s_begging);
horror_sound_scary[43] = new scary_sound(s_panic,193);
horror_sound_death[43] = new scary_sound(s_pistol,545);

//instruction fortyfour
/*
    selecting yes_options[44] will advance to instructionArray[45]
    selecting no_options[44] will result in DEATH (failArray[28])
*/
instructionArray[44] = "\"We need to hide, now!\" I hissed at Jessica. |There was a stand-alone closet that had thin horizontal slats. I pulled Jessica inside and shut the doors just in time. The man entered the room. He immediately walked over to the screens and looked them over. He began walking around the room and appeared to be looking for us. He walked in front of our closet and looked at the doors. We held our breath. Can he see us?";
yes_options[44] = "WAIT IT OUT";
no_options[44] = "ATTACK";
failArray[28] = "I took my ax, smashed opened the closet doors and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. This is the end of my story.";
horror_info[44] = new horror(false, false, true, 45, 28, false, false);
horror_sound_action[44] = new action_sound(s_fast_heartbeat,s_kick_door_down);
horror_sound_scary[44] = new scary_sound(s_stab,-1);
horror_sound_death[44] = new scary_sound(s_pistol,206);

//instruction fortyfive
/*
    selecting yes_options[45] will advance to instructionArray[46]
    selecting no_options[45] will advance to instructionArray[47]
*/
instructionArray[45] = "My heart raced. I hoped he wouldn't hear it pounding. After what was merely two seconds but seemed like an eternity he continued walking. He finished his circle of the room. He paused at the door he came in. Glanced back over toward our closet. And then he left the room. Jessica and I simultaneously breathed sighs of relief. We exited the closet.";
yes_options[45] = "LOOK AT SECURITY SCREENS AGAIN";
no_options[45] = "SEARCH THE ROOM";
horror_info[45] = new horror(true, false, false, 46, 47, false, false);
horror_sound_action[45] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[45] = new scary_sound(s_slow_heartbeat,12);
horror_sound_death[45] = new scary_sound(s_axe,30);

//instruction fortysix
/*
    selecting yes_options[46] will result in DEATH [29]
    selecting no_options[46] will advance to instructionArray[48]
*/
instructionArray[46] = "I took a look at the security cameras again. Behind us, in the path we came from there was huddle of men. There were three of them and they appeared to be talking and pointing. The screens showed that the room ahead of us had no one in it but contained several coffins!";
yes_options[46] = "MOVE BACKWARD";
no_options[46] = "MOVE FORWARD";
failArray[29] = "I readied my gun, opened the door and opened fire on the three men. Bam! One down. Bam! Another down. The third one had made his way close to me and grabbed for the gun. There was a struggle. He was twice my size and overpowered me. Bam! A shot went off. I heard a noise. Jessica had fallen to the ground - blood rushing out of her head. And then... Bam! This is the end of my story.";
horror_info[46] = new horror(false, true, false, 29, 48, false, false);
horror_sound_action[46] = new action_sound(s_guncock,s_door_wood);
horror_sound_scary[46] = new scary_sound(s_axe,-1);
horror_sound_death[46] = new scary_sound(s_pistol,234);


//instruction fortyseven
/*
    selecting yes_options[47] will result in DEATH [30]
    selecting no_options[47] will advance to instructionArray[48]
*/
instructionArray[47] = "I glanced around the room and saw nothing of interest. So I took a look at the security cameras again. Behind us, in the path we came from, there was a huddle of men. There were three of them and they appeared to be talking and pointing. The screens showed that the room ahead of us had no one in it but contained several coffins!";
yes_options[47] = "MOVE BACKWARD";
no_options[47] = "MOVE FORWARD";
failArray[30] = "I readied my gun, opened the door and opened fire on the three men. Bam! One down. Bam! Another down. The third one had made his way close to me and grabbed for the gun. There was a struggle. He was twice my size and overpowered me. Bam! A shot went off. I heard a noise. Jessica had fallen to the ground - blood rushing out of her head. And then... Bam! This is the end of my story.";
horror_info[47] = new horror(false, true, false, 30, 48, false, false);
horror_sound_action[47] = new action_sound(s_guncock,s_door_wood);
horror_sound_scary[47] = new scary_sound(s_axe,-1);
horror_sound_death[47] = new scary_sound(s_pistol,234);

//instruction forty eight
/*
selecting yes_options[48] will advance to instructionArray[49]
selecting no_options[48] will advance to coffinArray[0]
*/
instructionArray[48] = "Jessica and I opened the door and made our way into the coffined room. It was rancid. The floor was concrete and the walls and ceiling were stone. Each coffin was numbered with gold lettering; 1-17. Jessica eyed the room with her hand on her face. On one of the walls I saw what looked to be hand-smeared blood. |The blood messily spelled out three sets of numbers; \"3\" \"17\" \"5\"...";
yes_options[48] = "CONTINUE CHECKING THE ROOM";
no_options[48] = "OPEN A COFFIN";
horror_info[48] = new horror(false, false, false, 49, 0, false, true);
horror_sound_action[48] = new action_sound(s_blood_drip,s_coffin_creaky);
horror_sound_scary[48] = new scary_sound(s_blood_drip,78);
horror_sound_death[48] = new scary_sound(s_axe,30);

//instruction fortynine
/*
    selecting yes_options[49] will result in failArray[31]
    selecting no_options[49] will advance to coffinArray[0]
*/
instructionArray[49] = "I looked over the walls and it looked like we were in a dead end (no pun intended). The only door in the room was the one we entered through. |Jessica ran her hand against the wall. \"It\'s damp.\" she said.";
yes_options[49] = "LEAVE THROUGH THE DOOR I ENTERED";
no_options[49] = "OPEN A COFFIN";
failArray[31] = "Because we couldn't find a way, Jessica and I left the room the way we came in. And it seemed the three men we had seen earlier on the security displays had caught up with us. Jessica jumped in front of me swinging her hatchet. She didn't stand a chance. The last thing I saw was the barrel of a gun. This is the end of my story.";
horror_info[49] = new horror(false, true, false, 31, 0, false, true);
horror_sound_action[49] = new action_sound(s_door_unlock,s_coffin_creaky);
horror_sound_scary[49] = new scary_sound(s_blood_drip,90);
horror_sound_death[49] = new scary_sound(s_shotgun_shot,300);


//instruction coffin zero
/*
this message is the intro to the coffin mini game, and advances upon completion
*/
coffinArray[0] = "I decided to open one of the caskets. Hopefully there was nothing inside...";

// failure to select the proper coffin results in failArray[32]
// success advances coffinArray[2]
coffinArray[1] = "Which coffin do I open first? Choose a number from 1-17";
failArray[32] = "I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...This is the end of my story.";

// advance after text coffinArray[3]
coffinArray[2] = "I reached down and opened the lid. There was a note. On it was scrawled \"first step on your path downward.\"";

// failure to select the proper coffin results in failArray[33]
// success advances coffinArray[4]
coffinArray[3] = "Which coffin do I open second? Choose a number from 1-17";
failArray[33] = "I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...This is the end of my story.";

// advance after text coffinArray[5]
coffinArray[4] = "I reached down and opened the lid. There was another note. \"One more motion toward the depths below.\"";

// failure to select the proper coffin results in failArray[34]
// success advances instructionArray[50]
coffinArray[5] = "Which coffin do I open third? Choose a number from 1-17";
failArray[34] = "I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...This is the end of my story.";

// instruction fifty
/*
    yesOption = advance to instruction array 51
    noOption = failarray[35]
*/
instructionArray[50] = "I opened the coffin with the gold letter 5 on top. The floor began to shake. Dust fell from the walls and ceiling. Step by step, a rough staircase began to form. Jessica grabbed me and pulled me back. It was extremely loud and I glanced at the door, convinced that we would be heard.";
yes_options[50] = "BLOCK THE DOOR WITH A COFFIN";
no_options[50] = "HIDE IN A COFFIN";
failArray[35] = "Jessica and I hid in separate coffins. The stairs finished moving into place just as three large men bursted into the room. We were easily found and I hit one with an ax. The second one began strangling Jessica. The last man had opened fire at us. I don't know what happened to Jessica. This is the end of my story.";
horror_info[50] = new horror(true, false, true, 51, 35, false, false);
horror_sound_action[50] = new action_sound(s_move_coffin,s_metal_latch);
horror_sound_scary[50] = new scary_sound(s_earthquake,82);
horror_sound_death[50] = new scary_sound(s_kick_door_down,103);

//instruction fifty one
/*
    yesOption = advance to instruction array 52
    noOption = advance to instruction array 53
*/
instructionArray[51] = "We pushed a coffin against the door. It was very heavy and I broke a sweat. The stairs finished moving into place and there was a pounding at the door. I really had no choice. We headed down the stairs. The stairs were made of stone. There was no light on the staircase but I could make out a dim glow at the bottom. The pounding above continued but the door was thick and the coffin heavy. I looked at Jessica. She was dirty and sweaty. I realized that I must look like a mess. But in times like these, appearance is the least concern. |\"Well we can\'t seem to get a moment\'s peace and there are men wanting to kill us who are slamming away above.\" Jessica said. |\"I hate this place. And at the risk of sounding trite, I just want to go home. To top it all off, I hate the dark.\" I grunted.";
yes_options[51] = "CONTINUE DOWN THE STAIRS";
no_options[51] = "SIT DOWN";
horror_info[51] = new horror(false, false, false, 52, 53, false, false);
horror_sound_action[51] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[51] = new scary_sound(s_move_coffin,11);
horror_sound_death[51] = new scary_sound(s_axe,30);

//instruction fifty two
/*
    yesOption = advance to instruction array 54
    noOption = failarray[36]
*/
instructionArray[52] = "I arrived at the bottom of the stairs. In front of me was a disgusting sight. There was a man with a bloodied butcher\'s frock, a dustmask and a cleaver. On the table next to him was a gutted corpse.";
yes_options[52] = "ATTACK";
no_options[52] = "TALK";
failArray[36] = "\"What is happen-\" I started. |The man moved quickly and his cleaver struck me in the side of the head. The first blow knocked me down. I attempted to raise my weapon but my arm wouldn\'t move. He struck me again. This is the end of my story.";
horror_info[52] = new horror(false, false, true, 54, 36, false, false);
horror_sound_action[52] = new action_sound(s_pin_drop,s_thump);
horror_sound_scary[52] = new scary_sound(s_tense3,109);
horror_sound_death[52] = new scary_sound(s_flesh_split,17);

//instruction fifty three
/*
    yesOption = advance to instruction array 54
    noOption = failarray[37]
*/
instructionArray[53] = "I was tired. I sat down on the cold, hard stairs. |Jessica immediately pulled at me, \"What the hell are you doing?\" she asked. |\"There are people trying to get at us!\" |I stood up and made my way down the stairs. We arrived at the bottom of the stairs. In front of me was a disgusting sight. There was a man with a bloodied butcher\'s frock, a dustmask and a cleaver. On the table next to him was a gutted corpse.";
yes_options[53] = "ATTACK";
no_options[53] = "TALK";
failArray[37] = "\"What is happen-\" I started. |The man moved quickly and his cleaver struck me in the side of the head. The first blow knocked me down. I attempted to raise my weapon but my arm wouldn\'t move. He struck me again. This is the end of my story.";
horror_info[53] = new horror(false, false, true, 54, 37, false, false);
horror_sound_action[53] = new action_sound(s_pin_drop,s_thump);
horror_sound_scary[53] = new scary_sound(s_tense3,304);
horror_sound_death[53] = new scary_sound(s_flesh_split,17);

//instruction fiftyfour
/*
    yesOption = failarray[38]
    noOption = advanbce to instruction array 55
*/
instructionArray[54] = "Without delay, I raised my pistol and shot him between the eyes. He collapsed several feet backward and landed flat on his back. Suddenly another person entered the room. He had a long knife.";
yes_options[54] = "SHOOT";
no_options[54] = "ORDER HIM TO DROP KNIFE";
failArray[38] = "I pulled the trigger. Bam! He dodged to the left and I missed! I attempted another shot but he was upon me. His knife slid deep into my right eye. The pain was deathly. I saw red. This is the end of my story.";
horror_info[54] = new horror(false, true, false, 38, 55, false, false);
horror_sound_action[54] = new action_sound(s_pistol,s_nosound);
horror_sound_scary[54] = new scary_sound(s_pistol,70);
horror_sound_death[54] = new scary_sound(s_stab,119);

//instruction fifty five
/*
    yesOption = advance to instruction array 56
    noOption = failarray[39]
*/
instructionArray[55] = "I yelled, \"Drop the knife, I have a gun!\" |He glanced at me and set the knife down. He then said, \"Where the moon shines exists the deepest lord of nightly experiences. At times, I eat all but glory.\" |He fell on the floor and rocked back and forth. Rope lay nearby. Jessica clicked the flashlight off and bravely picked up his knife.";
yes_options[55] = "TIE HIM UP";
no_options[55] = "WALK PAST HIM";
failArray[39] = "I figured he was insane and continued past him. I heard a rapid shuffling and felt a sharp sting in the back of my neck.The stinging became an unbearable pain. I coughed blood. The man had stabbed me in the back of the neck. This is the end of my story.";
horror_info[55] = new horror(false, false, true, 56, 39, false, false);
horror_sound_action[55] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[55] = new scary_sound(s_tense2,108);
horror_sound_death[55] = new scary_sound(s_stab,119);

//instruction fifty six
/*
    yesOption = advance to instruction array 57
    noOption = advance to instruction array 58
*/
instructionArray[56] = "I grabbed the rope. I had learned knots as a child. I couldn't recall all the names but I remembered how to tie the knots I felt were useful. I grabbed the man's arm and he struggled. He took a swing at me and I brought the butt of my pistol on the back of his head. He yelped but continued struggling. I hit him again on the top of his head and knocked him unconscious. I tied him to the leg of a nearby table that was secured to the floor, arms behind his back.";
yes_options[56] = "SEARCH THE ROOM";
no_options[56] = "LOOK FOR A WAY OUT";
horror_info[56] = new horror(true, false, false, 57, 58, false, false);
horror_sound_action[56] = new action_sound(s_pin_drop,s_pin_drop);
horror_sound_scary[56] = new scary_sound(s_punch,248);
horror_sound_death[56] = new scary_sound(s_axe,30);

//instruction fifty seven
/*
    yesOption = advance to instruction array 59
    noOption = advance to instruction array 60
*/
instructionArray[57] = "I finally had a moment to scan the room. The butcher lay in a pool of mixed blood on the floor. There were two doors. One on the left and another further to my right.";
yes_options[57] = "OPEN THE DOOR TO THE LEFT";
no_options[57] = "OPEN THE DOOR TO THE RIGHT";
horror_info[57] = new horror(false, false, false, 59, 60, false, false);
horror_sound_action[57] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[57] = new scary_sound(s_blood_drip,47);
horror_sound_death[57] = new scary_sound(s_axe,30);

//instruction fifty eight
/*
    yesOption = advance to instruction array 59
    noOption = advance to instruction array 60
*/
instructionArray[58] = "I looked around the room. The butcher lay in a pool of mixed blood on the floor. There were two doors. One on the left and another further to my right.";
yes_options[58] = "OPEN THE DOOR TO THE LEFT";
no_options[58] = "OPEN THE DOOR TO THE RIGHT";
horror_info[58] = new horror(false, false, false, 59, 60, false, false);
horror_sound_action[58] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[58] = new scary_sound(s_blood_drip,47);
horror_sound_death[58] = new scary_sound(s_axe,30);

//instruction fifty nine
/*
    yesOption = failarray[40]
    noOption = advance to instruction array 61
*/
instructionArray[59] = "I opened the door on the left. It was a closet. Inside was some clean clothing. I was filthy and decided to change my clothes. Jessica turned away. The fresh attire was nice. Jessica and I traded places and she changed into a clean shirt. Left with no other options besides going backwards, we headed out the door on the right. I opened the right door and in front of me was pitch black. I asked Jessica to pass me the flashlight and I clicked it back on. And of course, in keeping with our terrible experience thus far the flashlight didn\'t turn on. |\"Crap, the batteries are dead.\" I said. |Suddenly, on the stairs behind us we heard footsteps pounding. Jessica grabbed my arm.";
yes_options[59] = "WAIT FOR THEM TO ARRIVE AND FIGHT";
no_options[59] = "HEAD INTO THE DARKNESS";
failArray[40] = "I readied my pistol, aiming it toward the door. A man appeared at the bottom of the stairs. His face was filthy and he held a large ax in either hand. BANG! I shot him in the arm. He dropped one ax. Behind him several more large, armed, men arrived in the room. Jessica impaled one of them with her knife. We were no match for them. The last thing I saw was gleaming steel. This is the end of my story.";
horror_info[59] = new horror(false, true, false, 40, 61, false, false);
horror_sound_action[59] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[59] = new scary_sound(s_click,461);
horror_sound_death[59] = new scary_sound(s_pistol,152);

//instruction sixty
/*
    yesOption = failarray[41]
    noOption = advance to instructionarray[61]
*/
instructionArray[60] = "I opened the right door and in front of me was pitch black. I asked Jessica to pass me the flashlight and I clicked it back on. And of course, in keeping with our terrible experience thus far the flashlight didn\'t turn on. |\"Crap, the batteries are dead.\" I said. |Suddenly, on the stairs behind us we heard footsteps pounding. Jessica grabbed my arm.";
yes_options[60] = "WAIT FOR THEM TO ARRIVE AND FIGHT";
no_options[60] = "HEAD INTO THE DARKNESS";
failArray[41] = "I readied my pistol, aiming it toward the door. A man appeared at the bottom of the stairs. His face was filthy and he held a large ax in either hand. BANG! I shot him in the arm. He dropped one ax. Behind him several more large, armed, men arrived in the room. Jessica impaled one of them with her knife. We were no match for them. The last thing I saw was gleaming steel. This is the end of my story.";
horror_info[60] = new horror(false, true, false, 41, 61, false, false);
horror_sound_action[60] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[60] = new scary_sound(s_click,133);
horror_sound_death[60] = new scary_sound(s_pistol,152);

//instruction sixty one
/*
    yesOption = advance to instruction array 62
    noOption = advance to instruction array 63
*/
instructionArray[61] = "I shut the door behind us. |\"Hold my hand so we aren\'t separated.\" I told Jessica. |I felt the wall. It was cold and wet. Some sort of a slimy masonry. We slowly made our way around the room. I could see nothing. The only sound was our footsteps and breathing. My hand touched something sharp. Whatever it was that I touched, I had knocked it over. I moved back quickly and it clattered noisily across the floor. The sound must have awoke something because I immediately heard a low growl. I clutched my weapons and felt Jessica clench. The growling grew closer.";
yes_options[61] = "SWING MY AXE";
no_options[61] = "REMAIN MOTIONLESS";
horror_info[61] = new horror(true, false, false, 62, 63, false, false);
horror_sound_action[61] = new action_sound(s_axe,s_nosound);
horror_sound_scary[61] = new scary_sound(s_growl,498);
horror_sound_death[61] = new scary_sound(s_axe,30);

//instruction fiftyone
/*
    yesOption = advance to instruction array 64
    noOption = failarray[42]
*/
instructionArray[62] = "I swung my ax into the darkness. Nothing. Jessica struck out with her knife. A shriek! She had cut someone or something. Then a loud noise from the door behind us. Light shone in the room. Two men with weapons entered. Jessica had stabbed a beast of some sort, barely hurting it. It was large, the size of a small bear and had matted fur. It was like no animal I have ever seen.";
yes_options[62] = "ATTACK THE MEN";
no_options[62] = "ATTACK THE BEAST";
failArray[42] = "I shot at the beast with my gun. It seemed to barely affect it. It charged at me. I looked over to see the men attacking Jessica. I tried to stab the beast but it easily overpowered me. I died knowing how it feels to be eaten alive. This is the end of my story.";
horror_info[62] = new horror(false, false, true, 64, 42, false, false);
horror_sound_action[62] = new action_sound(s_bulletwhiz,s_pistol);
horror_sound_scary[62] = new scary_sound(s_yelp,89);
horror_sound_death[62] = new scary_sound(s_dog_eating,184);

//instruction fiftyone
/*
    yesOption = advance to instruction array 64
    noOption = failarray[43]
*/
instructionArray[63] = "I stood still. Then Jessica struck out with her knife. A shriek! She had cut someone or something. Then a loud noise from the door behind us. Light shone in the room. Two men with weapons entered. Jessica had stabbed a beast of some sort, barely hurting it. It was large, the size of a small bear and had matted fur. It was like no animal I have ever seen.";
yes_options[63] = "ATTACK THE MEN";
no_options[63] = "ATTACK THE BEAST";
failArray[43] = "I shot at the beast with my gun. It seemed to barely affect it. It charged at me. I looked over to see the men attacking Jessica. I tried to stab the beast but it easily overpowered me. I died knowing how it feels to be eaten alive. This is the end of my story.";
horror_info[63] = new horror(false, false, true, 64, 43, false, false);
horror_sound_action[63] = new action_sound(s_bulletwhiz,s_pistol);
horror_sound_scary[63] = new scary_sound(s_yelp,66);
horror_sound_death[63] = new scary_sound(s_dog_eating,184);

//instruction fiftyone
/*
    yesOption = advance to instruction array 65
    noOption = advance to instruction array 66
*/
instructionArray[64] = "I shot at one of the men and missed. Another yelled and pointed at me. The beast then turned to the men and charged. I grabbed Jessica and made our way to the nearest door. I pulled her out of the room, shut the door behind us and locked it. I could hear screams from where we had just left. I turned around and found us in a hallway. It was long and there appeared to be only one door. A red door.";
yes_options[64] = "SEARCH THE HALLWAY";
no_options[64] = "GO THROUGH THE DOOR";
horror_info[64] = new horror(true, false, false, 65, 66, false, false);
horror_sound_action[64] = new action_sound(s_nosound,s_door_unlock);
horror_sound_scary[64] = new scary_sound(s_men_screaming,248);
horror_sound_death[64] = new scary_sound(s_axe,30);

//instruction fiftyone
/*
    yesOption = advance to instruction array 67
    noOption = failarray[44]
*/
instructionArray[65] = "\"Let\'s look around.\" I told Jessica. |I scanned the walls, floor and ceiling. They were barren. No doors. No windows. Just a long, undecorated hallway. |\"I can\'t find anything,\" Jessica said. |So, we headed toward the door. We walked down the long hallway and reached the door. We opened the door. And we were outside again! |\"This time, we are getting out of here.\" I said. |We were in a sort of yard; there was an iron door leading into a separate building and there was a large fence. This fence wasn\'t like the last one though. It was a wooden fence. Behind us a man opened the door. He held a rifle and he laughed. He had a stained flannel shirt on, old blue jeans and no shoes. His face was scarred and evil.";
yes_options[65] = "SHOOT THE MAN";
no_options[65] = "RUN FOR THE FENCE";
failArray[44] = "We ran for the fence. Behind us the man aimed his rifle. I was hoping that due to his obviously deranged mental state, that he\'d be a poor shot. I was wrong. I heard a crack just as a bullet blew through the back of my head. This is the end of my story.";
horror_info[65] = new horror(false, false, true, 67, 44, false, false);
horror_sound_action[65] = new action_sound(s_pistol2,s_running2);
horror_sound_scary[65] = new scary_sound(s_man_chuckle,628);
horror_sound_death[65] = new scary_sound(s_rifle,158);

//instruction fiftyone
/*
    yesOption = advance to instruction array 67
    noOption = failarray[45]
*/
instructionArray[66] = "We walked down the long hallway and reached the door. We opened the door. And we were outside again! |\"This time, we are getting out of here.\" I said. |We were in a sort of yard; there was an iron door leading into a separate building and there was a large fence. This fence wasn\'t like the last one though. It was a wooden fence. Behind us a man opened the door. He held a rifle and he laughed. He had a stained flannel shirt on, old blue jeans and no shoes. His face was scarred and evil.";
yes_options[66] = "SHOOT THE MAN";
no_options[66] = "RUN FOR THE FENCE";
failArray[45] = "We ran for the fence. Behind us the man aimed his rifle. I was hoping that due to his obviously deranged mental state, that he\'d be a poor shot. I was wrong. I heard a crack just as a bullet blew through the back of my head. This is the end of my story.";
horror_info[66] = new horror(false, false, true, 67, 45, false, false);
horror_sound_action[66] = new action_sound(s_pistol2,s_running2);
horror_sound_scary[66] = new scary_sound(s_man_chuckle,398);
horror_sound_death[66] = new scary_sound(s_rifle,158);

//instruction fiftyone
/*
    yesOption = failarray[46]
    noOption = advance to instruction 68
*/
instructionArray[67] = "I shot the man in the face. He died instantly. I knew more would be coming. We ran over to the fence and I kicked at the planks. They were very solid. Jessica did the same. |\"I found a loose one!\" she yelled. |We both took turns at kicking it in. The boards shattered and there was enough room for one of us to make it through. Three more men entered the yard.";
yes_options[67] = "GO THROUGH THE FENCE FIRST";
no_options[67] = "LET JESSICA ESCAPE";
failArray[46] = "I crawled through the fence. Jessica was behind me. I heard a gun shot. Jessica yelled and fell to the dirt. I stood up and looked behind. The men were running towards me, shooting. I began to run. A bullet tore at my leg. I stumbled and dropped my pistol. Another in my lower back. I fell. I crawled further but a final bullet ended me. This is the end of my story.";
horror_info[67] = new horror(false, true, false, 46, 68, false, false);
horror_sound_action[67] = new action_sound(s_delayedshot,s_nosound);
horror_sound_scary[67] = new scary_sound(s_kicking_fence,134);
horror_sound_death[67] = new scary_sound(s_bullet_impacts,281);

//instruction sixtyeight
/*
    yesOption = failarray[47]
    noOption = advance to instruction 69
*/
instructionArray[68] = "I urged Jessica, \"Run! I\'ll take care of them.\" |She crawled under the fence. I turned and shot one of the three men. He fell back and luckily knocked the other two over. |Jessica looked at me and said, \"My last name is Brickley. I am from Denver. Find me.\" |I responded, \"Get to safety. I will catch up with you. Just run!\" |She didn\'t think twice and ran. I got down and started crawling through the fence. I felt a strong grip on my leg and was ripped back through. A muscular man threw me a couple feet. My gun fell by my side. I gripped my ax. He dove on top of me and I swung my ax into his neck. His body went limp on top of mine. I pushed him off me to see two men blocking my exit through the fence.";
yes_options[68] = "FIGHT THEM";
no_options[68] = "RUN INTO THE BUILDING";
failArray[47] = "I gripped my ax and ran toward the men. One of them sidestepped and punched me in the side of my face. I was dazed and I dropped my ax. I reached down to pick up my weapon and felt another blow on the back of my head. I collapsed next to the group. The men proceeded to kick my head in. This is the end of my story.";
horror_info[68] = new horror(false, true, false, 47, 69, false, false);
horror_sound_action[68] = new action_sound(s_nosound,s_tense);
horror_sound_scary[68] = new scary_sound(s_flesh_split,616);
horror_sound_death[68] = new scary_sound(s_beating,285);

//this is the end of the game
instructionArray[69] = "I turned and ran toward the nearby building. Jessica had escaped. The men had turned their attention to me. One of them threw a knife. I dodged it. The yard now had around ten people in it, all rapidly making their way toward me. I reached the door and turned the handle. The door was very heavy and I pushed it open. I quickly locked the door behind me. The door not only had a deadbolt lock, it had a sliding bar that latched it shut. It looked very sturdy. |I paused for a moment, dreading whatever existed behind me. What I'd gone through so far had left me strung out and pessimistic. I slowly turned. It was a bright, well-furnished room. Behind a long cherry oak desk sat three people. They were older men, who smiled at me. In front of them lay clipboards and files. The room was styled in a reddish-brown fashion and behind them roared a pleasant fire. I heard a bang on the iron door behind me. One of the men at the table pushed a button on a panel in front of them and then there was silence. I stared, dumbfounded at the change in scenery and too tired to act quickly. |Finally one of the men spoke, \"Well done " + name +". You're the first person to make it through.\" |He sat in the middle of the table. White hair, glasses and thin. |\"Make it through what?\" I asked. |\"Consider it a test of the human brain.\" the man replied. \"Tonight, you've been presented several choices. Each of which has led you here. Had you chosen wrong at any point, we would have never met.\" |\"I don't understand...\" I said. |The man to the left spoke, \"We are running the 'Human Choice Program'.\" This man had black hair, with a beard. He was bald and had dark eyes. \"We have been taking critics of our company and systematically entering them into this program. Of course, many of them died in the process. We figured it was fine since they were to be assassinated anyways.\" |\"Wait... You\'re saying that this whole thing is a game?\" I asked, completely baffled. |The middle man spoke again, \"No sir. Those are real people with weapons. Each of them are psychotic patients that we have armed and told to kill you. We have outfitted around 100 psychiatric patients and run this project. Before you, they have eliminated many threats for us.\" |The man on the left joined in, \"You're on a highly controlled base. Each of the patients has a chip implanted in their head which allows us to administer varying levels of shocks. From 'slap on the wrist' to 'death'. If any of them disagrees with us or refuses to follow orders, we kill them with the push of a button.\" |I started making some sense of things and asked, \"So, earlier you mentioned using this base to silence critics - what does that mean exactly?\" |The remaining man who had up to now remained quiet, spoke, \"We are the psychiatric department of Mankley Industries. The major international company that handles things ranging from weapons to pharmaceutical drugs. As you can imagine, we have our fair share of antagonists. As the head of the mental health council, we've been charged with the removal of those who attempt exposing the company.\" |\"What do I have to do with that?\" I asked. |I noticed at this point, screens with security camera feeds. I could see the rooms Jessica and I had been in. They had been watching us. |The white-haired man spoke again, \"You work for a major blog site. You were doing an article on disappearances of people investigating Mankley Industries. Now of course you don't remember that, because we have wiped your memory. You'd be surprised about what the right combination of drugs and electric shock can do.\" |At that moment, memories poured in. I fell to one knee. It was a completely foreign and new experience. Years streamed back into my mind. |\"Prior to your arrival, we had successfully run 132 people through this experiment.\" the man continued, \"All have died. It has shown us much insight into the human mind and the choices people make when under stress. We obviously will need to make it more challenging since you made it through but we figured these people were slated to die already so we might as well learn from it.\" |The combination of my fatigue, the returned memories and the sheer evil I was confronting overwhelmed me. I backed into a corner and sat down. |The man with the beard began speaking again, \"Now, before we kill you, we have a few questions. First, what did you learn from this?\". |WHAT DID I DO? To be continued...";
yes_options[69] = "SUBMIT";
no_options[69] = "RESIST";
horror_info[69] = new horror(true,false,false,70,70,false,false);
horror_sound_action[69] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[69] = new scary_sound(s_axe,-1);
horror_sound_death[69] = new scary_sound(s_axe,-1);

// congratulate the winner, show them the score, then restart game
instructionArray[70] = "You're so awesome!  Now what do you want to do?";
yes_options[70] = "RESTART FROM BEGINNING";
no_options[70] = "RESTART FROM BEGINNING (IS THERE A CHOICE?)";
horror_info[70] = new horror(false, false, false, 0, 0, false, false);
horror_sound_action[70] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[70] = new scary_sound(s_axe,-1);
horror_sound_death[70] = new scary_sound(s_axe,30);

horror_sound_action[71] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[71] = new scary_sound(s_axe,-1);
horror_sound_death[71] = new scary_sound(s_axe,-1);
failArray[48] = "I couldn't make a decision in time and this is the end of my story";

} // initialize_choice_arrays() 

//function start_game()
/* this function will determine start of game behavior


*/

function start_game() {
    var myName = localStorage.getItem('name');
    if (myName !== null && myName !== "" && myName !== undefined) {
        name = myName;
    } else {
        name = "";
    };
    console.log(myName);
    $("#buttonOptions").hide();
    $("#buttonReveal").hide();
    $("#buttonYes").hide();
    $("#coffins").hide();
    $("#intro").append("TEXT-BASED HORROR");
    $("input:text:visible:first").focus();
    if (name !== "") {
        introduction(name);
    } else {
        naming();
    };
};


function naming() {
    // Delay 2.5 seconds for dramatic typing of "What is my name?" 
    // before showing text box and button.
    $("#button").hide();
    $("#button").delay(2500).fadeIn();
    $("#textInput").hide();
    $("#textInput").delay(2500).fadeIn();
    
    $('.yes1').off();    $('.no1').off();
    //$('.yes1').on();
    //$('.no1').on();
    $("#button").off();
    //$("#button").on();
    $("#instructions").empty();
    // $("#content")
    //     .removeClass('col-md-8')
    //     .addClass('col-md-4');



    //$("#instructions").show();
    //var done_check = 0;
   /* started_typing = false;
	while (done_typing == false){
		if (started_typing == false){
		spooky_type("What is my name?",0);
		started_typing = true;
		}
	}
	started_typing = false;
	done_typing = false;
    */

    // for being able to press [enter] key to submit
    var go = document.getElementById("button");
    var txt = document.getElementById("myText");
    txt.addEventListener("keypress", function() {
        if (event.keyCode == 13) go.click();
    });
    $("#myText").val("");

	//console.log("starting first print out");

	dramatic_parse(false,-1,"                 What is my name?",function(){
		$("#button").one("click",function(){
			name = document.getElementById("myText").value;
            name = name.trim();
            name = name[0].toUpperCase() + name.slice(1);
		
			localStorage.setItem('name', name);
			if ( name !== "" ) {
				$("#instructions").empty();
				$("#myText").val("");
				$('#textInput').val('');
				$("#textInput").hide();

				//$("#buttonYes").delay(delay_value).fadeIn();
				$("#instructions2").empty();
				//$("#instructions").appendTo("<p>thesearetestwords</p>");
				dramatic_parse(false,-1,"                 Is " +name+ " my correct name?",function(){
					$(".yes1").one( "click", function(){
						$("#buttonYes").hide();
						$("#instructions").empty();
						$("#instructions2").empty();
						localStorage.setItem('name', name);

                        $("#instructions").css("text-align", "left");
						introduction(name);
					});
					$(".no1").one( "click", function(){
						$("#buttonYes").hide();
						$("#instructions").empty();
						$("#instructions2").empty();

						naming();
					});
					$("#buttonYes").delay(30).fadeIn();
				});
			}
			else  {
				$("#instructions").empty();
				$("#instructions2").empty();
				$("#myText").val("");
				$('#textInput').val('');
				$("#instructions2").append("                 Please type in my name.");
				naming();
			}
		});

		//$("#myText").keypress(function(e){
			//if(e.which == 13){
				//$("#button").click();
			//}
	});

}

function introduction(name) {
    // wait until we know the person's name before initializing the choices 
    // because some of the story's text strings contain the name.
    initialize_choice_arrays();

    $("#buttonYes").hide();
    $("#textInput").hide();
    var save_point = localStorage.getItem('save_point');
    console.log(save_point);

    // for adjusting the bootstrap grid columns
    // useful for changing the width of the grid for when the story
    // text actually starts
    // this needs to match functionstory_mode()!!
    adjustGrid();

    if (save_point != null) {
        skippable = true;
        skip_text = false;
        single_callback = false;
        story_mode(parseInt(save_point));
    } else {
        $("#instructions2").empty();
        $("#instructions").empty();
        skippable = true;
        skip_text = false;

        dramatic_parse(false,-1,"My name is " +name+ ". The choices I make will determine if I live or die. \nDo I dare start this horrific journey?",function(){
            single_callback = false;
            $("#buttonYes").delay(240).fadeIn();
			$("#textInput").hide();
			$(".yes1").one( "click", function(){
				$("#buttonYes").hide();
				$("#instructions").empty();
				$("#instructions2").empty();
				//var done_intro = 0;
				single_callback = false;
				story_mode(0);

			});
			$(".no1").one( "click", function(){
				localStorage.setItem('name', "");
				$("#buttonYes").hide();
				$("#instructions").empty();
				$("#instructions2").empty();
				for (var definer = 0; definer < text_timer.length; definer++) {
					clearTimeout(text_timer[definer]);
					console.log("i'm clearing timeouts!");
				}
				adjustGridBack();
				naming();
		});});
    }
}



function adjustGrid() {
    $("#rowBumperLeft")
        .removeClass('col-lg-4')
        .removeClass('col-md-4')

        .addClass('col-lg-2')
        .addClass('col-md-2');

    $("#rowBumperCenter")
        .removeClass('col-lg-4')
        .removeClass('col-md-4')

        .addClass('col-lg-8')
        .addClass('col-md-8');

    $("#rowBumperRight")
        .removeClass('col-lg-4')
        .removeClass('col-md-4')

        .addClass('col-lg-2')
        .addClass('col-md-2');
    return;
}

function adjustGridBack() {
    $("#rowBumperLeft")
        .addClass('col-lg-4')
        .addClass('col-md-4')

        .removeClass('col-lg-2')
        .removeClass('col-md-2');

    $("#rowBumperCenter")
        .addClass('col-lg-4')
        .addClass('col-md-4')

        .removeClass('col-lg-8')
        .removeClass('col-md-8');

    $("#rowBumperRight")
        .addClass('col-lg-4')
        .addClass('col-md-4')

        .removeClass('col-lg-2')
        .removeClass('col-md-2');
    return;
}

/*		
Make a tracking system for how many correct choices the person makes vs how many incorrect choices. The total number of correct choices vs incorrect choices will be displayed at the end of the game. Note: If a person makes an incorrect choice, dies and then plays again and makes the correct choice, this would be one incorrect choice and zero incorrect choices.
If a person gets 100% of all choices right, they are rewarded the status: Survival Perfectionist! You got every single answer RIGHT!
If a person gets 90-99% of their choices right, they are rewarded the status: Bad Ass Survivor! You got almost every single answer RIGHT! Do you think you can get every answer RIGHT next time? Play again!
80-89% right: Survival Extraordinaire! The vast majority of your choices were CORRECT! Do you think you can get every answer RIGHT next time? Play again!
70-79% right: Expert Survivor! Most of your choices were RIGHT! Do you think you can get every answer RIGHT next time? Play again!
60-69% right: Surviving well! Many of your choices were CORRECT! Do you think you can get every answer RIGHT next time? Play again!
51-59% right: You got more RIGHT than wrong! Do you think you can get every answer RIGHT next time? Play again!
50%: Balanced Survivor! How did you pull this off? You got EXACTLY half the answers right and half of them wrong! Do you think you can get every answer RIGHT next time? Play again!
40-49% right: Ouch Survivor! You died slightly more than you survived! Do you think you can get every answer RIGHT next time? Play again!
30-39% right: Do you think you can get every answer RIGHT next time? Play again!
20-29% right: Do you think you can get every answer RIGHT next time? Play again!
10-19% right: Dying Survivor! The majority of your choices resulted in death! Do you think you can get every answer RIGHT next time? Play again!
1-9% right: Pain Master! You died so many times it’s incredible you finished the game! Well done! Do you think you can get every answer RIGHT next time? Play again!
If a person gets every choice wrong, they are awarded the status: Master of Death! It takes a real bad ass to pull off getting every choice wrong! Amazing! Do you think you can get every answer RIGHT next time? Play again!
*/
function show_game_performance () {
    // There are 69 steps in the game.  However many of them don't matter or don't cause death.
    // However, the end user doesn't know this.  For them, every choice is potentially life-ending.
    // Therefore, I think it is best to count all choices that do not cause death as correct choices.
    var performance_percentage = (total_correct_choices * 100) / (total_deaths + total_correct_choices);
    console.log("total_deaths: " + total_deaths + " performance_percentage " + performance_percentage);
    if (performance_percentage == 100) {
        performance_eval = "Survival Perfectionist! You got every single answer RIGHT!";
    } else if (performance_percentage >= 90) {
        performance_eval = "Bad Ass Survivor! You got almost every single answer RIGHT! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage >= 80) {
        performance_eval = "Survival Extraordinaire! The vast majority of your choices were CORRECT! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage >= 70) {
        performance_eval = "Expert Survivor! Most of your choices were RIGHT! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage >= 60) {
        performance_eval = "Surviving well! Many of your choices were CORRECT! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage > 50) {
        performance_eval = "You got more RIGHT than wrong! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage == 50) {
        performance_eval = "Balanced Survivor! How did you pull this off? You got EXACTLY half the answers right and half of them wrong! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage >= 40) {
        performance_eval = "Ouch Survivor! You died slightly more than you survived! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage >= 20) {
        performance_eval = "Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage >= 10) {
        performance_eval = "Dying Survivor! The majority of your choices resulted in death! Do you think you can get every answer RIGHT next time? Play again!";
    } else if (performance_percentage > 0) {
        performance_eval = "Pain Master! You died so many times it’s incredible you finished the game! Well done! Do you think you can get every answer RIGHT next time? Play again!";
    } else {
        performance_eval = "Master of Death! It takes a real bad ass to pull off getting every choice wrong! Amazing! Do you think you can get every answer RIGHT next time? Play again!";
    }
    console.log(performance_eval);
    // display this performance eval info in the #instructions javascript element.
    $("#instructions").empty();
    $("#instructions").append("Congratulations!  You won the game with " + total_correct_choices + " correct choices and " + total_deaths + " deaths. ");
    $("#instructions2").empty()
    $("#instructions2").append(performance_eval);
}

// you won the game, so show the game result, 
// then reinitialize counters and get ready to restart game from the beginning.
function end_game_winner (story_cursor) {
    show_game_performance();
    // reinitialize choices and deaths counters for next game
    total_correct_choices = 0;
    total_deaths = 0;
    show_buttons(story_cursor, yes_options[story_cursor], no_options[story_cursor], horror_info[story_cursor].failYes, horror_info[story_cursor].failNo);
}

function story_mode(story_cursor) {
    if (horror_info[story_cursor].savePoint == true){
        localStorage.setItem('save_point', story_cursor);
    }
	console.log("story mode: " + story_cursor);
    $("#instructions").empty();
    $("#instructions2").empty();
    $("#story").empty();
    $("#textInput").hide();
    $('#buttonReveal').hide();
    $('#buttonOptions').hide();
    $("#buttonYes").hide();
	skippable = false;
	clickable = false;
	skip_text = false;
    keep_iter = 0;
    total_calls = 0;
    iterate = 0;
    adjustGrid();

    if (story_cursor == 70) { // you won the game
        end_game_winner(story_cursor);
        return;
    } 
    dramatic_parse(false,story_cursor,instructionArray[story_cursor],function(){
        single_callback = false;
        revealOptions(story_cursor, yes_options[story_cursor], no_options[story_cursor], horror_info[story_cursor].failYes, horror_info[story_cursor].failNo);
		//show_buttons(story_cursor, yes_options[story_cursor], no_options[story_cursor], horror_info[story_cursor].failYes, horror_info[story_cursor].failNo);
    });
}


//function dramatic_parse(instruction_set, callback)
/*
    the dramatic parse will separate text blocks in instructions and fail messages and split them into an array of sentences.
    iterating through the sentence list it will call a spooky_type chain to print the sentences.

    (thought: if # of sentences % 2 or 3 == 0 then remerge sentences into sets of two or three.)


*/

function random_type(chara){
	var rando_value = 0;
	sine_wave++;
	if (sine_wave = 101) {sine_wave = 1;}
	if (chara === '.' || chara === '?' || chara === '!') {
	    rando_value = (Math.random() * 20) + (Math.sin(sine_wave) * 60) + 68;
	}
	else {
		rando_value = (Math.random() * 10) + (Math.sin(sine_wave) * 20) + 42;
	}
	return rando_value;
}

function dramatic_parse(is_death,sound_index,sentence, callback) {
    startScrollPageDownLoop();
	//console.log("dramatic parsing");
	clear_callback = function clear_callback() { callback() };
	$("#instructions").empty();
    window.setTimeout(function(){skippable = true;}, 500);

	type_speed = 60;

	current_sentence = sentence;
	single_callback = false;
	skip_text = false;
    skippable = false;

    var has_dramatic_sound = false;
    //calls left
    calls_left = sentence.length;
    total_calls = sentence.length;
    if (sound_index != -1) {has_dramatic_sound = true;}
    if (has_dramatic_sound){
        if (is_death) {

            var sound_to_play = horror_sound_death[sound_index].sound;
            var when_to_play = horror_sound_death[sound_index].char_index;
        } else {
            var sound_to_play = horror_sound_scary[sound_index].sound;
            var when_to_play = horror_sound_scary[sound_index].char_index;
        }
    }

    $("#instructions").appendTo("\n");
    //next_chara[] is an array that holds the individual characters of a section of script
	next_chara = [];

	//keep_iter is our second iterator variable;
	// this variable increases at the end of each successful timeout event;\
	//this is neccessary so that the timeout events print the right character
	//      (if they printed using the first iterator; they'd all print the last character)
    keep_iter = 0;

	//iterate is our iterator variable that is used in the first loop of this function
	//iterate is used as a cursor to store characters from provided text using charAt(iterator)
    iterate = 0;

	//our text timer array is a holder that all timeout events are pushed to
	//this allows us to iterate through the timeout list and clear timeouts in case of text skipping

    text_timer = [];


	//beginning our loop
	//this loop sets up the array of characters and creates our timeout events
    for (iterate = 0; iterate < total_calls; iterate++) {
        //console.log("for loop has begun a cycle");
        //console.log("iterate = " + iterate);
        //console.log("keep_iter = " + keep_iter);
        //this check is the first attempt to keep the timeout loops from breaking
		if (keep_iter > total_calls) { return; }

		//this check is the second attempt to keep the timeout loops from breaking
		if (keep_iter > iterate) {
            if (single_callback == false) {
                single_callback = true;
                //console.log("executing callback, keep_iter > iterate");
                clear_callback();
                return;
            } else { return;}
        }

	    //console.log("iterate:" + iterate);
	    //console.log("total_calls: " + total_calls);
	    //console.log("timeout execution / type_speed: " + type_speed);

		//******************
		//this is where we take a character from our sentence and store it
	    next_chara[iterate] = '' + sentence.charAt(iterate);

	    //console.log("next character: " + next_chara[iterate]);

		//if iterate is still within the limits of our array
		//then we can set up a timeout event
	    if (iterate < total_calls) {
	            text_timer.push( setTimeout(function () {
	            //spooky_type(paragraph, i);
	            //console.log("timeout function will be executed at " + keep_iter);
	            //console.log("text timer pushed. text timer array length: " + text_timer.length);
					//the next lines are the function handed to timeout
					//we must use keep_iter within the timeout, rather than iterate
					//this is because we have already iterated iterate and we need a method
					//that will let us go through the array again
						//at the end of our timeout events. keep iter is incremented;
						//this allows us to type the characters in order

					//this check will tell the program to use pipes as a marker for a newline.
                    if ((keep_iter == when_to_play) && (has_dramatic_sound)) {
                        play_sound(sound_to_play);
                    }
                    if (next_chara[keep_iter] == '|') {
						$("#instructions").append("<br>&nbsp;&nbsp;&nbsp;&nbsp;");
					} else {
						$("#instructions").append("" + next_chara[keep_iter]);
                        //last_print = keep_iter;
					}
					//console.log("keep_iter: " + keep_iter);
					//console.log("next_chara: " + next_chara[keep_iter]);
					//console.log("iterate: " + iterate);
					//console.log("total_calls: " + total_calls);
					keep_iter++;

				}, type_speed));
				//we are now out of the timeout event setup
				//if we aren't skipping text; let's get increase the timestamp
				//this will let us sequence our events properly
	            if (skip_text != true) {
	                type_speed = type_speed + random_type(next_chara[iterate]);
	            }
	    }
		//calls left is decremented for each call set up.
		//if all calls have been successfully set up then:
			//we will be able to make the final timeout event
	    calls_left = calls_left - 1;
	    //console.log("call finished, remaining: " + calls_left);
    }
    //console.log("left for loop");
	//made all calls, and have not triggered callback yet (did not skip)
	if (calls_left <= 0 && single_callback == false){
		//add delay equal to punctuation
		type_speed = type_speed + random_type('.');
		//create final timeout event that holds our callback.
	    text_timer.push(setTimeout(function () {
	        //console.log("executing callback");
	        single_callback = true;
			//if program gets here our callback is being triggered
			//we are now going to, for the sake of slaying bugs, clear all timeouts
			//there should not be any timeouts left to clear at this point...
			for (var definer = 0; definer < text_timer.length; definer++) {
                clearTimeout(text_timer[definer]);
                console.log("i'm clearing timeouts!");
            }
            //console.log("x = " + definer);
	        //execute that callback
			clear_callback();
	    }, type_speed));
		//type_speed = 0;
	}
	//don't need to scroll the page down any more at this point
    endScrollPageDownLoop();
}


//function spooky_type(current_sentence)
/*
    recursive function that will print a sentence character by character


*/

function spooky_type(sentence,cursor){
    if (cursor == 0) {
        $("#instructions").appendTo("    ");
    }
    if (cursor === sentence.length){
        //done_typing = true;
		return -1;
    }
    var next_char = sentence.charAt(cursor);
    $("#instructions").append(next_char);
	/*
    cursor++;
    //return function(){setTimeout(function(){spooky_type(sentence,cursor)},type_speed)};
	setTimeout(function(){
		//var return_check = 0;
		spooky_type(sentence,cursor);
		//console.log(return_check);
		//if (return_check == -1) {return return_check;}
	},type_speed);
	return 0;
	*/
}


//function show_buttons(yes,no)
/*
    make the buttons appear with the proper text

*/

function revealOptions(story_cursor, yes, no, yes_fail, no_fail){
	skippable = false;
	$('#buttonReveal').delay(delay_value).fadeIn();
	$('#buttonReveal').one('click', function() {
		startScrollPageDownLoop;
		$("#buttonReveal").hide();
		show_buttons(story_cursor, yes, no, yes_fail, no_fail);
		clock = $("#time");
		startTimer(10,clock);
		endScrollPageDownLoop;
	});
}


function show_buttons(story_cursor, yes, no, yes_fail, no_fail) {
    $("#yes").off();
    $("#no").off();
	clickable = false;
    skippable = false;
    $("#yes").html("<p>" + yes + "</p>");
    $("#no").html("<p>" + no + "</p>");
    if (horror_info[story_cursor].coffinYes) {
        $("#yes").one("click", function () {
            play_sound(horror_sound_action[story_cursor].sound_yes);
			coffin_game(0);
		});
	}
    else if (yes_fail) {
        $("#yes").one("click", function () {
            play_sound(horror_sound_action[story_cursor].sound_yes);
            $("#buttonOptions").hide();
            dead_dead(horror_info[story_cursor].linkYes,story_cursor);
        });
    } else {
        $("#yes").one("click", function () {
            total_correct_choices++;
            console.log("story cursor " + story_cursor + " " + total_correct_choices + " correct choices");
            play_sound(horror_sound_action[story_cursor].sound_yes);
            $("#buttonOptions").hide();
            story_mode(horror_info[story_cursor].linkYes);
        });
    }
    if (horror_info[story_cursor].coffinNo) {
        $("#no").one("click", function () {
            play_sound(horror_sound_action[story_cursor].sound_no);
            $("#buttonOptions").hide();
            coffin_game(0);
		});
    }
    else if (no_fail) {
        $("#no").one("click", function () {
            play_sound(horror_sound_action[story_cursor].sound_no);
            $("#buttonOptions").hide();
            dead_dead(horror_info[story_cursor].linkNo,story_cursor);
        });
    } else {
        $("#no").one("click", function () {
            total_correct_choices++;
            console.log("story cursor " + story_cursor + " " + total_correct_choices + " correct choices");
            play_sound(horror_sound_action[story_cursor].sound_no);
            $("#buttonOptions").hide();
            story_mode(horror_info[story_cursor].linkNo);
        });
    }

    $("#buttonOptions").delay(delay_value).fadeIn();
}

// coffin_game: recursive function that plays the coffin game step by step.
// input variable which_step will be in range[0..3]
// if invalid value is entered, an error message will be printed and the
// function will be recursively called.  The extra call is harmless because
// the stack will unwind when done.
// To win the coffin game, the user must select coffins 3, then 17, then 5, in that order.
function coffin_game (which_step) {
    // empty the text box input string so it doesn't show the name or previous coffin value.
    $("#myText").val("");

    if (which_step == 0) {
        skippable = false;
        dramatic_parse(false,-1,coffinArray[0], function () {
			coffin_game(1);
        });
    } else if (which_step == 1) {
        skippable = false;
        dramatic_parse(false,-1,coffinArray[1], function () {
            $("#buttonOptions").hide();
            $("#buttonYes").hide();
            $("#textInput").show();
            $("#button").one("click", function () {
                $("#textInput").hide();
                var choice = document.getElementById("myText").value;
                if (choice > 17 || choice < 1) { // range check [1..17]
                    dramatic_parse(false,-1,"Please enter a number between 1 and 17.   ", function () {
                        coffin_game(1);
                    });
                } else if (choice == 3) { // step 1 succeeds if coffin 3 chosen
                    total_correct_choices++;
                    dramatic_parse(false,-1,coffinArray[2],function() {
                        coffin_game(2);
                    });
                } else { // die if first choice is not 3.
                    dead_dead(32,70);
                }
            });
        });
    } else if (which_step == 2) {
        skippable = false;
        dramatic_parse(false,-1,coffinArray[3], function () {
            $("#buttonOptions").hide();
            $("#buttonYes").hide();
            $("#textInput").show();
            $("#button").one("click", function () {
                $("#textInput").hide();
                var choice = document.getElementById("myText").value;
                if (choice > 17 || choice < 1) { // range check [1..17]
                    dramatic_parse(false,-1,"Please enter a number between 1 and 17.   ", function () {
                        coffin_game(2);
                    });
                } else if (choice == 3) { // already opened 3.
                    dramatic_parse(false,-1,"I already opened that coffin...  ", function () {
                        coffin_game(2);
                    });
                } else if (choice == 17) { // step 2 succeeds if coffin 17 opened.
                    total_correct_choices++;
                    dramatic_parse(false,-1,coffinArray[4], function () {
                        coffin_game(3);
                    });
                } else { // die if second choice is not 17.
                    dead_dead(33,70);
                }
            });
        });
    } else if (which_step == 3) {
        skippable = false;
        dramatic_parse(false,-1,coffinArray[5], function () {
            $("#buttonOptions").hide();
            $("#buttonYes").hide();
            $("#textInput").show();
            $("#button").one("click", function () {
                $("#textInput").hide();
                var choice = document.getElementById("myText").value;
                if (choice > 17 || choice < 1) { // range check [1..17]
                    dramatic_parse(false,-1,"Please enter a number between 1 and 17.   ", function () {
                        coffin_game(3);
                    });
                } else if (choice == 3 || choice == 17) {
                    dramatic_parse(false,-1,"I already opened that coffin...  ", function () {
                        coffin_game(3);
                    });
                } else if (choice == 5) {
                    total_correct_choices++;
                    story_mode(50);
                } else { // die if third choice is not 5.
                    dead_dead(34,70);
                }
            });
        });
    }
}

//function dead_dead()
/*
    makes the buttons regarding death appear
*/
function dead_dead(death_cursor,origin) {
    var done_check = 0;
    total_deaths++;
    console.log("death_cursor " + death_cursor + " total deaths " + total_deaths);
    $('#textInput').hide();
    $('#buttonOptions').hide();
    $('#yes').off();
    $('#no').off();
    $('.yesDead').off();
    $('.noDead').off();
    $("#instructions").empty();
    $("#instructions2").empty();
    $("#story").empty();
    $('#buttonReveal').hide();
    $("#buttonYes").hide();
	skippable = true;
	clickable = true;
	skip_text = false;
    //document.getElementById('laugh').play();
    //spooky_type(failArray[death_cursor],0);
    dramatic_parse(true,origin,failArray[death_cursor]+"|||Do you want to play again?",function(){
		$(".yesDead").one("click", function () {
			$('#buttonYes').hide();
			$("#instructions").empty();
			story_mode(localStorage.getItem('save_point'));
		});
		$(".noDead").one("click", function () {
			$('#buttonYes').hide();
            dramatic_parse(false,-1,"I have failed...|||      ", function(){
                total_deaths = 0;
                total_correct_choices = 0;
				localStorage.setItem('name', "");
				localStorage.setItem('save_point',0);
				$("#buttonYes").hide();
				$("#instructions").empty();
				$("#instructions2").empty();
				for (var definer = 0; definer < text_timer.length; definer++) {
					clearTimeout(text_timer[definer]);
					console.log("i'm clearing timeouts!");
				}
				adjustGridBack();
				naming();
			});
		});
		$('#buttonYes').delay(delay_value).fadeIn();
	});
}
	//if (done_check == -1) {
	//while (done_typing == false){}
	//done_typing = false;
     //   done_check = 0;
    //spooky_type("\nDo you want to play again?", 0);
	//while (done_typing == false){}
	//done_typing = false;
	//   if (done_check == -1) {





//function restore_save()
/*
not actually needed, actually. yay!


*/




	function startTimer(duration, clock){
		var countdown = setInterval(function seconds(){
			clock.text("Time is running out!\n " +duration);
			if (--duration < 0){
				clearInterval(countdown);
				clock.text("");
				dead_dead(48,71);
			} else {
				$("#yes, #no").click(function(){
					clearInterval(countdown);
					clock.text("");
				});
			}
			return seconds;
		}(), 1000);
	}

// Display the rest of the text when user shows impatience 
// by clicking mouse or pressing a key.
function impatience() {
    skip_text = true;
    if (skippable == true && single_callback == false) {
        if (text_timer.length != null || text_timer.length != 0) {
            for (var makeloop = 0; makeloop < text_timer.length; makeloop++) {
                clearTimeout(text_timer[makeloop]);
            }

            // Get the remainder of the sentence that has not yet been displayed.
            var new_sentence = current_sentence.slice(keep_iter);
          
            // Replace all pipe marks in the sentence with <br> html tag
            // using global 'g' regular expression replacement.
            new_sentence = new_sentence.replace(/\|/g,"<br>");
            console.log("current sentence: " + current_sentence);
            console.log("new sentence: " + new_sentence);

            // Append the rest of the sentence to the screen right now.          
            $("#instructions").append(new_sentence);
            skip_text = false;
            text_timer = [];
            keep_iter = 0;
            iterate = 0;
            current_sentence = "";
            single_callback = true;
            calls_left = 0;
            clear_callback();
        }
    }
}

document.addEventListener("keydown", function(event){
  if(skippable) {impatience();}
});
document.addEventListener("click", function(event){
  if(skippable) {impatience();}
});

//function startTimer(duration, clock)
/*
    redesign this function to use the new system


*/
