$("#content").hide();
$("#buttonOptions").hide();
$("#buttonReveal").hide();
$("#buttonBack").hide();
$("#buttonYes").hide();
$("#coffins").hide();
$("#content").removeClass("hiddenstuff");
$("#content").show();

//instructions array
var instructionArray = new Array();

// Keep track of all the previous choices made in the game.
// Back button can pop previous choice off the stack.
var gameStack = [];

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
var s_pickup_hatchet = "pickup_hatchet";
var s_axe_impact = "axe_impact";
var s_footsteps_indoor = "footsteps_indoor";
var s_clothing_rustle = "clothing_rustle";
var s_dropping_books = "dropping_books";
var s_door_close = "door_close";
var s_yell_man = "yell_man";
var s_walk_downstairs = "walk_downstairs";
var s_computer_beeps = "computer_beeps";
var s_victory = "victory";

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
//function horror(flag_save, flag_fail_yes, flag_fail_no, link_yes, link_no, coffin_yes, coffin_no)
/*
    this function is a constructor for an object containing data about what to do in the story at each point
    these objects will be held in an array with the index being equivalent to each instruction set.

    flag_save will tell the program to save data at this checkpoint so that it may be continued from

    flag_fail_yes and flag_fail_no tell the program (if true):
        this option results in failure
        pull text from failArray, not instructionArray

    link_yes and link_no tell the program where to go for the next instruction set
*/
function horror (flag_save, flag_fail_yes, flag_fail_no, link_yes, link_no,coffin_yes,coffin_no) {
    this.savePoint = flag_save;
    this.failYes = flag_fail_yes;
    this.failNo = flag_fail_no;
    this.linkYes = link_yes;
    this.linkNo = link_no;
    this.coffinYes = coffin_yes;
    this.coffinNo = coffin_no;
}

//this function will play a sound, specified by element id, which is a string value. laugh makes a spooky laugh happen, for example.
function play_sound (sound_id) {
    if (sound_id != "silence") {
        document.getElementById(sound_id).play();
    }
}

//this is an object, that will help point to sounds at every part of story mode.
//it will do this by creating an array of these elements, where the index of the action_sound corresponds to the value of the story cursor
//horror_sound is the array that holds our values
function action_sound (sound_yes,sound_no) {
    //sound_yes would be a pointer to a sound element that needs to be played by the LEFT button (yes_button by old id)
    this.sound_yes = sound_yes;
    //sound_no would be a pointer to a sound element that needs to be played by the RIGHT button (no_button by old id)
    this.sound_no = sound_no;
}

//this is an object, to be held in an array. this allows sounds to be played at a specific character in printout.
//the array will be searched at the start of dramatic parse, and will flag whether or not a sound needs to be played in that paragraph.
// the array's indexes will correspond to the value of the story cursor
function scary_sound (which_sound,char_index_to_play) {
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
//instruction zero: checkpoint
/*
    Selecting yes_option[0] will result in failArray[0]
    Selecting no_option[0] will advance to instructionArray[1]
*/
instructionArray[0] = "You awake, dizzy and surrounded by dark. Your head is spinning and there is a sharp pain in the upper right side of your skull. What are you doing here? \"Where is here?\" you think. First things first: orient yourself. You can't remember what happened prior to your unconsciousness. You stand up and look around. There is a vague outline of a path that appears to lead up to a house. You can barely make out an old mansion. You look behind yourself and see nothing but black. You hear what sounds like footsteps walking toward you from behind.|||";
yes_options[0] = "INVESTIGATE THE FOOTSTEPS";
no_options[0] = "WALK TOWARD THE HOUSE";
failArray[0] = "You turn around and walk away from the house. A large figure walks toward you on the path. In its hand is what appears to be an axe. \"Hello?\" you venture. No response, just a quickened pace. Its arm lifts the weapon high into the air. You turn to run but you are too late. The axe brutally removes your head from its shoulders. And this is the end of your story.";
horror_info[0] = new horror(true,true,false,0,1,false,false);
horror_sound_action[0] = new action_sound(s_footsteps_outside,s_footsteps_outside);
//this will make the wind blow when the character asks "Where is here?"
//              (note, i determined this by finding the character index in code of the point i wanted it played, and subtracting the value of characters outside the string.)
//              (simply put, the character i subtracted 26 (character index of start of string in code) from 176, the place of the spot desired. )
horror_sound_scary[0] = new scary_sound(s_wind,156);
//this will play the sound of the axe killing the character after the sentence "but i was too late"
horror_sound_death[0] = new scary_sound(s_decapitation,278);

//instruction one:
/*
    This is a checkpoint, so set the first flag save to true.
    Selecting yes_option[1] will advance to instructionArray[2]
    Selecting no_option[1] will advance to instructionArray[3]
*/
instructionArray[1] = "You make your way up to the house. It appears to be old and in need of repairs. Regardless, it holds a certain beauty. There looks to be about four stories, each floor big enough to accomodate a large family. Something gleams to your left on the path. You look over and see a hatchet.||";
yes_options[1] = "LEAVE THE HATCHET";
no_options[1] = "PICK UP THE HATCHET";
horror_info[1] = new horror(true,false,false,2,3,false,false);
horror_sound_action[1] = new action_sound(s_footsteps_outside,s_pickup_hatchet);
horror_sound_scary[1] = new scary_sound(s_nosound,-1); // no sound indicated by story
horror_sound_death[1] = new scary_sound(s_nosound,-1); // unused

//instruction two:
/*
    Selecting yes_option[2] will result in failArray[1]
    Selecting no_option[2] will result in failArray[2]
*/
instructionArray[2] = "You leave the hatchet and continue on toward the house. As you climb the porch, the planks protest your presence with sharp creaks. You reach for the door and hear rustling behind you. You swivel your head and see a dark figure hulking toward you. You can't make out its eyes but notice an axe in its hand. You say, \"Hello?\"... no response. It then swings the axe in your direction and growls. You are in danger.||";
yes_options[2] = "ATTACK";
no_options[2] = "RUN";
failArray[1] = "You run at it, swinging your fists. It stops you with ease with a swing of the sharpened axe. The last thing you see is red on silver. And this is the end of your story.";
failArray[2] = "You attempt to run and hear a whoosh. The axe tears through the upper section of your spine. You can feel your shoulder blades separating. And this is the end of your story.";
horror_info[2] = new horror(false,true,true,1,2,false,false);
horror_sound_action[2] = new action_sound(s_rustle,s_rustle); // sounds like running
horror_sound_scary[2] = new scary_sound(s_floor_creak,83);
horror_sound_death[2] = new scary_sound(s_axe_impact,70);

//instruction three: checkpoint
/*
    Selecting yes_option[3] will advance to instructionArray[4]
    Selecting no_option[3] will result in failArray[3]
*/
instructionArray[3] = "You pick up the hatchet and continue on toward the house. As you climb the porch, the planks protest your presence with sharp creaks. You reach for the door and hear rustling behind you. You swivel your head and see a dark figure hulking toward you. You can't make out its eyes but notice an axe in its hand. You say, \"Hello?\"... no response. It then swings the axe in your direction and growls. You are in danger.||";
yes_options[3] = "ATTACK";
no_options[3] = "RUN";
failArray[3] = "You attempt to run and hear a whoosh. The axe tears through the upper section of your spine. You can feel your shoulder blades separating. And this is the end of your story.";
horror_info[3] = new horror(true, false, true, 4, 3, false, false);
horror_sound_action[3] = new action_sound(s_rustle,s_rustle); // sounds like running
horror_sound_scary[3] = new scary_sound(s_floor_creak,94);
horror_sound_death[3] = new scary_sound(s_axe_impact,86);

//instruction four:
/*
    Selecting yes_option[4] will advance to instructionArray[5]
    Selecting no_option[4] will advance to instructionArray[6]
*/
instructionArray[4] = "You run at it. It swings the axe and you duck. You swing your hatchet into its throat. It lets out a yowl and falls in a heap. It has ceased breathing and you pick up the axe.||";
yes_options[4] = "HEAD TOWARDS THE HOUSE";
no_options[4] = "EXAMINE THE BODY";
horror_info[4] = new horror(false, false, false, 5, 6, false, false);
horror_sound_action[4] = new action_sound(s_fast_heartbeat,s_fast_heartbeat);
horror_sound_scary[4] = new scary_sound(s_man_growl,84);
horror_sound_death[4] = new scary_sound(s_nosound,-1); // unused

//instruction five: checkpoint
/*
    Selecting yes_option[5] will advance to instructionArray[7]
    Selecting no_option[5] will result in failArray[4]
    failArray is now at -1 place (gap elimination)
*/
instructionArray[5] = "As you make your way back to the porch, you wonder why you were attacked and you are thankful for having a weapon. \"Why was he trying to kill me?\" you wonder. You reach the porch. You try to open the front door but the door is locked. If you had tried running from your attacker earlier, you would have been met with a latched door. There is a window on the right and one on the left. You can hear more rustling in the distance.||";
yes_options[5] = "OPEN A WINDOW";
no_options[5] = "STAY OUTSIDE THE HOUSE";
failArray[4] = "You stand on the porch with an axe and a hatchet. A couple minutes pass and several large men with a various assortment of weapons arrive at the porch. You attempt to fight them off, regretting not having climbed through a window, but there are too many. You can't tell you if it was blades or bludgeoning that kill you. And this is the end of your story."
horror_info[5] = new horror(true, false, true, 7, 4, false, false);
horror_sound_action[5] = new action_sound(s_slow_heartbeat,s_slow_heartbeat);
horror_sound_scary[5] = new scary_sound(s_locked_door,224);
horror_sound_death[5] = new scary_sound(s_rage_of_blades,164);

//instruction six: checkpoint
/*
    Selecting yes_option[6] will advance to instructionArray[7]
    Selecting no_option[6] will result in failArray[5]
*/
instructionArray[6] = "You turn the face to view it. It is a man. He appears dirty and unshaven. In his pocket, you find a picture. The picture is of you! Underneath the photo is the word \"KILL.\" |\"Well, that explains the axe,\" you mutter. You make your way back to the porch, thankful you have weapons. You reach the porch. You try to open the front door but the door is locked. If you had tried running from your attacker earlier, you would have been met with a latched door. There is a window on the right and one on the left. You can hear more rustling in the distance.||";
yes_options[6] = "OPEN A WINDOW";
no_options[6] = "STAY OUTSIDE THE HOUSE";
failArray[5] = "You stand on the porch with an axe and a hatchet. A couple minutes pass and several large men with a various assortment of weapons arrive at the porch. You attempt to fight them off, regretting not having climbed through a window, but there are too many. You can't tell you if it is blades or bludgeoning that kill you. And this is the end of your story.";
horror_info[6] = new horror(true, false, true, 7, 5, false, false);
horror_sound_action[6] = new action_sound(s_slow_heartbeat,s_slow_heartbeat);
horror_sound_scary[6] = new scary_sound(s_locked_door,351);
horror_sound_death[6] = new scary_sound(s_rage_of_blades,153);

//instruction seven:
/*
    illusion of choice.
    Selecting yes_option[7] will advance to instructionArray[8]
    Selecting no_option[7] will advance to instructionArray[8]
*/
instructionArray[7] = "There are two windows. Which window do you open?||";
yes_options[7] = "OPEN THE LEFT WINDOW";
no_options[7] = "OPEN THE RIGHT WINDOW";
horror_info[7] = new horror(false, false, false, 8, 8, false, false);
horror_sound_action[7] = new action_sound(s_window_open,s_window_open);
horror_sound_scary[7] = new scary_sound(s_nosound,-1); // no sound indicated
horror_sound_death[7] = new scary_sound(s_nosound,-1); // unused

//instruction eight:
/*
    This is a checkpoint.
    Selecting yes_option[8] will result in failArray[6]
    Selecting no_option[8] will advance to instructionArray[9]
    failArray is now at -2 places (gap elimination)
*/
instructionArray[8] = "You mess around with the window and it opens with no resistance. You climb inside and shut the window behind you. For good measure, you lock both windows. You take a moment and view the room you're in. It is a large hall. Suddenly a memory flashes... you are an investigator! You were on a major case. What was that case about...? BANG! A loud noise comes from the next room over. There are two doors. One door leading to the noise and another leading away from it.||";
yes_options[8] = "OPEN DOOR LEADING TOWARD THE NOISE";
no_options[8] = "OPEN DOOR LEADING AWAY FROM THE NOISE";
failArray[6] = "You bravely open the door that leads to the noise. The mystery is instantly solved. There stands a man holding a large shotgun. He wastes no time in taking aim at your body. Not that aim matters with a gun like that. You quickly throw your hatchet at him. He moves to the left but your hatchet cuts his thigh. It delays the shooter slightly but doesn't stop him. POW! The shot tears through your midsection. And this is the end of your story.";
horror_info[8] = new horror(true, true, false, 6, 9, false, false);
horror_sound_action[8] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[8] = new scary_sound(s_door_metal,331);
horror_sound_death[8] = new scary_sound(s_shotgun_shot,364);

//instruction nine:
/*
    Selecting yes_option[9] will advance to instructionArray[10]
    Selecting no_option[9] will advance to instructionArray[10]
*/
instructionArray[9] = "You scramble away from the banging sound coming from the other door behind you. You pass through the door in front of you and find yourself in a large dining room. There are lit candles on a long dark wooden table. The table is set but no food is present. You know you have to leave this room because it is apparent someone has recently been here. There is a closet and random furniture and items in the room. You then hear footsteps coming toward the door you just entered through. There is the distinctive sound of a shotgun being pumped.||";
yes_options[9] = "HIDE UNDER THE TABLE";
no_options[9] = "HIDE IN THE CLOSET";
horror_info[9] = new horror(false, false, false, 10, 10, false, false);
horror_sound_action[9] = new action_sound(s_long_heartbeat,s_long_heartbeat);
horror_sound_scary[9] = new scary_sound(s_pump_shotgun,488);
horror_sound_death[9] = new scary_sound(s_nosound,-1); // unused

//instruction ten: checkpoint
/*
    Selecting yes_options[10] will advance to instructionArray[11]
    Selecting no_options[10] will result in failArray[7]
    failArray is now at -3 places (gap elimination)
*/
instructionArray[10] = "You hide and a man enters the room. He is wearing a white shirt with red stains. He has a torn sack on his head and carries a double-barreled shotgun. You hold your breath. Lucky for you the man quickly steps through the kitchen. He knocks over some chairs and arrives at a staircase and a door. He chooses the door and exits the room. You wait until you no longer hear him. \"I need a gun,\" you think.||";
yes_options[10] = "GO UP THE STAIRS";
no_options[10] = "FOLLOW THE MAN WITH THE SHOTGUN";
failArray[7] = "You open the door. Despite your attempts to be quiet, it creaks loudly. You hear shouting and heavy footsteps. The man with the shotgun appears and before you can defend yourself, he blows your face off with a double-barreled blast. And this is the end of your story.";
horror_info[10] = new horror(true, false, true, 11, 7, false, false);
horror_sound_action[10] = new action_sound(s_stair_climb,s_door_wood);
horror_sound_scary[10] = new scary_sound(s_walking_away,204);
horror_sound_death[10] = new scary_sound(s_shotgun_shot,200);

//instruction eleven: checkpoint
/*
    selecting yes_options[11] will result in failArray[8]
    selecting no_options[11] will advance to instractionArray[12]

*/
instructionArray[11] = "You make your way up the staircase to what appears to be the second floor of the house. There is a long hallway ahead of you. There is a table with a lit candle on it. You see what looks to be a folder. There is a single sheet of lined paper on it. |Scratched on the paper is a note: \"Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.\" -Sigmund Freud. |\"Well that\'s a load of crap,\" you think to yourself. You pause and contemplate your current situation. You have a fleeting thought: \"Maybe I should just burn this house down...\"||";
yes_options[11] = "USE THE CANDLE TO START A FIRE";
no_options[11] = "KEEP EXPLORING THE HALLWAY";
failArray[8] = "You light the paper on fire and throw it on the floor. You then use the candle to light the wallpaper on fire. It is peeling and dry and made of highly flammable material. The house begins to burn. You make your way away from the fire but are blocked by a locked door at the end of the hallway. You turn back to pass through the fire but it is too large. You are trapped. You try to run through the fire but it burns you. You run back to the door and try to kick it in to no avail. There is no escape. Your choice ends with you being burnt alive. A terrible, overly-long experience of hideous, unimaginable pain. And this is the end of your story.";
horror_info[11] = new horror(true, true, false, 8, 12, false, false);
horror_sound_action[11] = new action_sound(s_demon_girl,s_footsteps_indoor);
horror_sound_scary[11] = new scary_sound(s_page_turn,230);
horror_sound_death[11] = new scary_sound(s_fire,196);

//instruction twelve: checkpoint
/*
    selecting yes_options[12] will advance to instructionArray[13]
    selecting no_options[12] will result in failArray[9]

*/
instructionArray[12] = "\"No, I shouldn\'t start a fire,\" you think as you walk forward. First you hear a lock click at the end of the hallway and then you hear a shrill scream. It sounds like a woman yelling from behind the door. \"Help! He\'s going to kill me!\"||";
yes_options[12] = "RESCUE THE WOMAN";
no_options[12] = "LEAVE HER";
failArray[9] = "You turn around and run away from her voice. You hear a crushing sound accompanied by a final scream, followed by silence. You continue running. You reach the stairs, head down and emerge into the dining room. You are met by five people in red, priest-like robes. You stop short. They are holding swords. You yell at them \"What the hell is going on here?!\" and turn around again. You run straight into a man with no shirt. He is completely bald and holding an axe. You swing at him with the hatchet but he hits your wrist. The hatchet drops to the floor. You raise your axe but aren't fast enough. His axe comes down right in the center of your head, splitting your skull. And this is the end of your story.";
horror_info[12] = new horror(true, false, true, 13, 9, false, false);
horror_sound_action[12] = new action_sound(s_tense,s_tense);
horror_sound_scary[12] = new scary_sound(s_scream_woman,148);
horror_sound_death[12] = new scary_sound(s_flesh_split,629);

//instruction thirteen:
/*
    This is a checkpoint.
    selecting yes_options[13] will advance to instructionArray[14]
    selecting no_options[13] will advance to instructionArray[15]

*/
instructionArray[13] = "You boldly open the door. You see a woman. There is a man with a sledgehammer walking toward her aggressively. The woman has blonde hair and there is some blood on her face. She looks to be around your age and looks terrified. \"Hey!\" you yell at the man, \"Leave her alone!\" The man is in stained overalls and has no shoes on. He turns his attention to you and heads your way. You grip your axe and hatchet tightly in each hand. The man swings his sledgehammer at you. You quickly duck and swing your axe deep into his chin. The man grunts and falls to the ground.||";
yes_options[13] = "TALK WITH THE WOMAN";
no_options[13] = "INSPECT THE BODY";
horror_info[13] = new horror(true, false, false, 14, 15, false, false);
horror_sound_action[13] = new action_sound(s_fast_heartbeat,s_fast_heartbeat);
horror_sound_scary[13] = new scary_sound(s_flesh_split,515);
horror_sound_death[13] = new scary_sound(s_nosound,-1); // unused

//instruction fourteen
/*
    Selecting yes_options[14] will advance to instructionArray[17]
    Selecting no_options[14] will advance to instructionArray[18]

*/
instructionArray[14] = "You ask the woman, \"How did you end up here and what the hell is going on?\" |She stares at you. She looks half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'t remember how I got here. This place is full of psychotics who seem to want to murder us,\" she says. \"What\'s your name?\" |\"My name is " + name + ".\" |\"Hello, " + name + ", my name is Jessica,\" she replies. |\"I don't know how I wound up here, either. People have been trying to kill me, and some even have pictures of me with \"KILL\" written on them.\" |Jessica responds with, \"We should get out of here together.\" |\"Can I trust her?\" you wonder.||";
yes_options[14] = "YES, LEAVE WITH THE WOMAN";
no_options[14] = "NO, LEAVE HER BEHIND";
horror_info[14] = new horror(false, false, false, 17, 18, false, false);
horror_sound_action[14] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[14] = new scary_sound(s_nosound,-1); // unused
horror_sound_death[14] = new scary_sound(s_nosound,-1); // unused

//instruction fifteen: checkpoint
/*
    Selecting yes_options[15] will advance to instructionArray[16]
    Selecting no_options[15] will result in failArray[10]
*/
instructionArray[15] = "The woman watches you from the corner of the room. You search the man's pockets. You find a picture of yourself with KILL written on it. You also find a bottle of prescription psychotropic pills. You ask the woman, \"How did you end up here and what the hell is going on?\" |She stares at you. She looks half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'t remember how I got here. This place is full of psychotics who seem to want to murder us,\" she says.||";
yes_options[15] = "TALK MORE WITH THE WOMAN";
no_options[15] = "LEAVE THE ROOM";
failArray[10] = "You leave the woman and re-enter the hallway you came from. You walk right into a large man. He grins and then everything goes black. The last thing you feel is explosive pain on the top of your head. And this is the end of your story.";
horror_info[15] = new horror(true, false, true, 16, 10, false, false);
horror_sound_action[15] = new action_sound(s_nosound,s_footsteps_indoor);
horror_sound_scary[15] = new scary_sound(s_clothing_rustle,70);
horror_sound_death[15] = new scary_sound(s_panic,93);

//instruction sixteen
/*
    Selecting yes_options[16] will advance to instructionArray[17]
    Selecting no_options[16] will advance to instructionArray[18]
*/
instructionArray[16] = "\"What\'s your name?\" she asks. |\"My name is " + name + ".\" you reply. |\"Hello, " + name + ", my name is Jessica.\" she responds. |\"I don't know how I wound up here, either. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on them.\" |Jessica responds with, \"We should get out of here together.\" |\"Can I trust her?\" you wonder.||";
yes_options[16] = "YES, LEAVE WITH THE WOMAN";
no_options[16] = "NO, LEAVE HER BEHIND";
horror_info[16] = new horror(false, false, false, 17, 18, false, false);
horror_sound_action[16] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[16] = new scary_sound(s_nosound,-1); // no sound indicated
horror_sound_death[16] = new scary_sound(s_nosound,-1); // unused

//instruction seventeen: checkpoint
/*
    Selecting yes_options[17] will advance to instructionArray[19]
    selecting no_options[17] will result in failArray[11]
*/
instructionArray[17] = "\"Okay. I\'ll leave with you. But who are you?\" you ask, \"I don\'t know the first thing about you.\" |\"I woke up in here. Last thing I remember is being at work and-\" she begins. |\"Shhhh!\" you snap. You hear footsteps approaching the door...||";
yes_options[17] = "GIVE JESSICA YOUR HATCHET";
no_options[17] = "KEEP BOTH WEAPONS FOR YOURSELF";
failArray[11] = "A man bursts into the room. He has what appears to be a red priest\'s robe on and holds a large pistol in his hand. Jessica is near him. He doesn't notice her. She jumps on his back. He aims his gun at you and pulls the trigger. And this is the end of your story.";
horror_info[17] = new horror(true, false, true, 19, 11, false, false);
horror_sound_action[17] = new action_sound(s_panic,s_panic);
horror_sound_scary[17] = new scary_sound(s_footsteps_wood,185);
horror_sound_death[17] = new scary_sound(s_pistol,215);

//instruction eighteen: checkpoint
/*
    Selecting yes_options[18] will advance to instructionArray[19]
    Selecting no_options[18] will result in failArray[12]
*/
instructionArray[18] = "\"No, I\'m heading out alone. You\'ll only be a burden.\" you say. |The woman glares and responds, \"I\'m sorry. But we are not separating. You just saved my life and both of our chances of survival are increased by me coming with you.\" |You look at her and consider arguing but she looks determined and you give up. \"Okay. I\'ll leave with you. But who are you?\" you ask, \"I don\'t know the first thing about you.\" |\"I woke up in here,\" she begins. \"The last thing I remember is being at work and-\" |\"Shhhh!\" you snap. You hear footsteps approaching the door...||";
yes_options[18] = "GIVE JESSICA YOUR HATCHET";
no_options[18] = "KEEP BOTH WEAPONS FOR YOURSELF";
failArray[12] = "A man bursts into the room. He has what appears to be a red priest\'s robe on and holds a large pistol. Jessica is near him. He doesn\'t notice her. She jumps on his back. He aims his gun at you and pulls the trigger. And this is the end of your story.";
horror_info[18] = new horror(true, false, true, 19, 12, false, false);
horror_sound_action[18] = new action_sound(s_panic,s_panic);
horror_sound_scary[18] = new scary_sound(s_footsteps_wood,501);
horror_sound_death[18] = new scary_sound(s_pistol,215);

//instruction nineteen: checkpoint
/*
    Selecting yes_options[19] will advance to instructionArray[20]
    Selecting no_options[19] will result in failArray[13]
*/
instructionArray[19] = "You throw your hatchet on the floor near Jessica and say, \"Take this.\" |A man bursts into the room. He has what appears to be a red priest\'s robe on and holds a large pistol. Jessica is near him. He doesn\'t notice her.||";
yes_options[19] = "DODGE HIM";
no_options[19] = "ATTACK HIM";
failArray[13] = "You run toward the man. Jessica jumps on his back. He struggles and aims his gun at you. He pulls the trigger. And this is the end of your story.";
horror_info[19] = new horror(true, false, true, 20, 13, false, false);
horror_sound_action[19] = new action_sound(s_woosh,s_panic);
horror_sound_scary[19] = new scary_sound(s_kick_door_down,78);
horror_sound_death[19] = new scary_sound(s_pistol,110);

//instruction twenty: checkpoint
/*
    Selecting yes_options[20] will advance to instructionArray[21]
    Selecting no_options[20] will result in failArray[14]
*/
instructionArray[20] = "You move backward. He takes careful aim at your head and - crunch! Jessica\'s hatchet sinks into the back of his head, killing him instantly. She stares at you for a couple seconds. You walk over and pick up the pistol. You check it; it's loaded and appears to hold six bullets. \"Well done,\" you say. \"Now let\'s get out of here.\"||";
yes_options[20] = "EXPLORE THE BACK OF THE ROOM";
no_options[20] = "HEAD OUT THE DOOR YOU CAME IN";
failArray[14] = "You and Jessica go out the door. In the hallway is a crowd of men, wearing similar red robes as the man with the pistol. You immediately begin firing your pistol but there is a problem: they have guns too. And this is the end of your story.";
horror_info[20] = new horror(true, false, true, 21, 14, false, false);
horror_sound_action[20] = new action_sound(s_footsteps_indoor,s_panic);
horror_sound_scary[20] = new scary_sound(s_axe_impact,61);
horror_sound_death[20] = new scary_sound(s_gun_fight,161);

//instruction twentyone
/*
    illusion of choice.
    Both options will lead to instruction array[22]

*/
instructionArray[21] = "You head to the back of the room. Jessica finds a flashlight. There is a small doorway. You open it and see a staircase leading up into darkness. You decide to cover your path, so you move a bookshelf in front of the door. You leave enough room to squeeze through, then shut the door behind you.||";
yes_options[21] = "HEAD UP FIRST";
no_options[21] = "HAVE JESSICA LEAD";
horror_info[21] = new horror(false, false, false, 22, 22, false, false);
horror_sound_action[21] = new action_sound(s_tense2,s_tense2);
horror_sound_scary[21] = new scary_sound(s_door_close,265);
horror_sound_death[21] = new scary_sound(s_nosound,-1); // unused

//instruction twentytwo
/*
    This is a checkpoint.
    Selecting yes_options[22] will result in failArray[15]
    Selecting no_options[22] will advance to instructionArray[23]
*/
instructionArray[22] = "You head up. The stairs creak. There are spiderwebs and it smells like rotted wood. Ahead of you there is a skittering sound. Jessica gasps. You put your hand on her mouth and whisper for her to be quiet. Her skin is ice cold. You grab the flashlight and tell Jessica to stay where she is. You walk ahead and reach the top of the stairs. You find yourselves in a library. The books are covered in dust and cobwebs. They appear to be on a variety of subjects. You look up and see large spikes hanging from the ceiling. Very odd. You then pan the flashlight left to right and stop on a body.||";
yes_options[22] = "INSPECT THE BOOKS";
no_options[22] = "INSPECT THE BODY";
failArray[15] = "You call Jessica over. You walk over to the books, then pick one up. It's then you realize that the book just triggered the spikes. Faster than you can react, the spikes fall from the ceiling. You and Jessica are impaled from above. And this is the end of your story.";
horror_info[22] = new horror(true, true, false, 15, 23, false, false);
horror_sound_action[22] = new action_sound(s_dropping_books,s_clothing_rustle);
horror_sound_scary[22] = new scary_sound(s_door_wood,25);
horror_sound_death[22] = new scary_sound(s_decapitation,189);

//instruction twentythree: checkpoint
/*
    Selecting yes_options[23] will advance to instructionArray[24]
    Selecting no_options[23] will result in failArray[16]
*/
instructionArray[23] = "You call Jessica over. This time she doesn\'t gasp. You walk over to the body. It is on a metal table - out of place in the library. The body is a dead man. It appears the top of his head and shoulders has been impaled. |The corpse holds a book in its hand - \"Boy\" by Roald Dahl. |Blood drips from the table onto the floor. There is a bloodied note next to the body.||";
yes_options[23] = "READ THE NOTE";
no_options[23] = "INSPECT THE BOOKS";
failArray[16] = "You walk over to the books. You pick one up. It's then you realize that the book just triggered the spikes. Faster than you can react, the spikes fall from the ceiling. You and Jessica are impaled from above. And this is the end of your story.";
horror_info[23] = new horror(true, false, true, 24, 16, false, false);
horror_sound_action[23] = new action_sound(s_page_turn,s_dropping_books);
horror_sound_scary[23] = new scary_sound(s_blood_drip,310);
horror_sound_death[23] = new scary_sound(s_decapitation,157);

//instruction twentyfour: checkpoint
/*
    Selecting yes_options[24] will advance to instructionArray[25]
    Selecting no_options[24] will result in failArray[17]
*/
instructionArray[24] = "The note says \"Death from above - avoid the books.\" |Something suddenly drops onto your cheek from the ceiling. Cold. Wet. It is blood. You look up. The spikes above the body are red with blood. It appears that the books trigger the spikes somehow. |\"Jessica, we need to leave this library.\" you warn.||";
yes_options[24] = "HEAD TOWARD THE UNEXPLORED DOOR";
no_options[24] = "GO BACK FROM WHERE YOU CAME";
failArray[17] = "You head back toward the staircase you came in on. You get to the top of the stairs and begin walking down. A man bursts through the door at the bottom of the staircase and shoots at you. You catch three bullets and see Jessica go down as well. And this is the end of your story.";
horror_info[24] = new horror(true, false, true, 25, 17, false, false);
horror_sound_action[24] = new action_sound(s_rustle,s_footsteps_indoor); // rustle sounds like running
horror_sound_scary[24] = new scary_sound(s_blood_drip,74);
horror_sound_death[24] = new scary_sound(s_threeshots,182);

//instruction twentyfive: checkpoint
/*
    Selecting yes_options[25] will result in failArray[18]
    Selecting no_options[25] will advance to instructionArray[26]
*/
instructionArray[25] = "You run toward the doorway on the opposite side of the room from where you came in. There is a crash and footsteps come from the stairway you were just climbing moments before. Hooded men enter the room with weapons leveled.||";
yes_options[25] = "GO FOR THE DOOR";
no_options[25] = "GRAB A BOOK";
failArray[18] = "You run toward the door and are shot in the back. You see Jessica go down as well, a bullet tearing through her head. You feel an unbearable pain and burning in your lower back. You grab a book. The spikes swing down. You figure if you're going, you're taking them with you. And this is the end of your story.";
horror_info[25] = new horror(true, true, false, 18, 26, false, false);
horror_sound_action[25] = new action_sound(s_pistol,s_dropping_books);
horror_sound_scary[25] = new scary_sound(s_kick_door_down,100);
horror_sound_death[25] = new scary_sound(s_flesh_split,210);

//structure here gets a little strange
/*
 paths:
 26 -> 27
       27 -> 32

       27 -> 29
             29 -> 32
                   32
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
instructionArray[26] = "Against your better judgement, you grab a book off the shelf and dive toward the door, Jessica slightly ahead of you. The spikes on the ceiling come down swiftly. There is terrible screaming and then silence. You barely make it out from under the deadly spikes and get through the door. You are alive. You turn back to find the group of men behind you stabbed to death from the spikes. The spikes slowly rise back to the ceiling. Seven dead bodies fall to the floor. A floor saturated with red.||";
yes_options[26] = "CHECK OUT THE ROOM";
no_options[26] = "TALK TO JESSICA";
horror_info[26] = new horror(false, false, false, 27, 28, false, false);
horror_sound_action[26] = new action_sound(s_blood_drip,s_blood_drip);
horror_sound_scary[26] = new scary_sound(s_men_screaming,182);
horror_sound_death[26] = new scary_sound(s_nosound,-1); // unused

//instruction twentyseven
/*
    Selecting yes_options[27] will advance to instructionArray[32]
    Selecting no_options[27] will advance to instructionArray[29]
*/
instructionArray[27] = "You scan the room you find yourselves in. It is small and seems only to serve as a passage from the library to whatever lies beyond. You look at Jessica and notice a new door behind her. You stare off into space and think about how you have killed around ten people since arriving in this hellhole.||";
yes_options[27] = "OPEN THE DOOR";
no_options[27] = "TALK TO JESSICA";
horror_info[27] = new horror(false, false, false, 32, 29, false, false);
horror_sound_action[27] = new action_sound(s_door_close,s_nosound);
horror_sound_scary[27] = new scary_sound(s_tense3,247);
horror_sound_death[27] = new scary_sound(s_nosound,-1); // unused

//instruction twentyeight
/*
 selecting yes_options[28] will advance to instructionArray[30]
 selecting no_options[28] will advance to instructionarray[31]
*/
instructionArray[28] = "\"This is utter madness.\" you say, \"It\'s like we\'re inside an unreal horror movie.\" |\"We need to get away - call the police,\" Jessica says. |\"Why are these psychotic people trying to kill us?\" you ask. \"And how did you get here?\" |Jessica responds, \"I'm in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up, but I managed to work my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiles. A smile--shockingly out-of-place in this nightmare.||";
yes_options[28] = "SCAN THE ROOM";
no_options[28] = "SEARCH FOR A DOOR OUT";
horror_info[28] = new horror(false, false, false, 30, 31, false, false);
horror_sound_action[28] = new action_sound(s_footsteps_indoor,s_footsteps_indoor);
horror_sound_scary[28] = new scary_sound(s_nosound,-1); // no sound indicated
horror_sound_death[28] = new scary_sound(s_nosound,-1); // unused

//instruction twentynine
/*
 selecting yes_options[29] will advance to instructionArray[32]
 selecting no_options[29] will advance to instructionarray[32]
*/
instructionArray[29] = "\"This is utter madness.\" you say, \"It\'s like we\'re inside an unreal horror movie.\" |\"We need to get away - call the police,\" Jessica says. |\"Why are these psychotic people trying to kill us?\" you ask. \"And how did you get here?\" |Jessica responds, \"I'm in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up, but I managed to work my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiles. A smile--shockingly out-of-place in this nightmare. |All the dead bodies are creeping you out. You need to get some air. Your desperate gaze falls on the door out.||";
yes_options[29] = "GO THROUGH THE DOOR";
no_options[29] = "FOLLOW JESSICA";
horror_info[29] = new horror(false, false, false, 32, 32, false, false);
horror_sound_action[29] = new action_sound(s_door_close,s_door_close);
horror_sound_scary[29] = new scary_sound(s_nosound,-1); // no sound indicated`
horror_sound_death[29] = new scary_sound(s_nosound,-1); // unused

//instruction thirty
/*
    selecting yes_options[30] will advance to instructionArray[32]
    selecting no_options[30] will advance to instructionArray[32]
*/
instructionArray[30] = "You scan the room you find yourselves in. It is small and seems only to serve as a passage from the library to whatever lies beyond. You look at Jessica and notice a closed door behind her. You stare off into space and think about how you've killed around ten people since arriving in this hellhole.||";
yes_options[30] = "GO THROUGH THE DOOR";
no_options[30] = "FOLLOW JESSICA";
horror_info[30] = new horror(false, false, false, 32, 32, false, false);
horror_sound_action[30] = new action_sound(s_door_close,s_door_close);
horror_sound_scary[30] = new scary_sound(s_tense3,248);
horror_sound_death[30] = new scary_sound(s_nosound,-1); // unused

//instruction thirtyone
/*
    selecting yes_options[31] will advance to instructionArray[32]
    selecting no_options[31] will advance to instructionArray[32]
*/
instructionArray[31] = "You scan the room you find yourselves in. It is small and seems only to serve as a passage from the library to whatever lies beyond. You look at Jessica and notice a closed door behind her. You stare off into space and think about how you've killed around ten people since arriving in this hellhole.||";
yes_options[31] = "GO THROUGH THE DOOR";
no_options[31] = "FOLLOW JESSICA";
horror_info[31] = new horror(false, false, false, 32, 32, false, false);
horror_sound_action[31] = new action_sound(s_door_close,s_door_close);
horror_sound_scary[31] = new scary_sound(s_tense3,248);
horror_sound_death[31] = new scary_sound(s_nosound,-1); // unused

//instruction thirty two
//all paths have rejoined at this point.
/*
    This is a checkpoint.
    selecting yes_options[32] will advance to instructionArray[33]
    selecting no_options[32] will advance to instructionArray[34]
*/
instructionArray[32] = "You enter the door and what you see shocks you. A brand-new, stainless steel laboratory is in front of you. It is exceptionally bright and vast. You immediately see a doctor operating on someone. There are two individuals in white flanking him. Everyone is staring at you and Jessica and smiling, but there is something... off... about their smiles. The corners of their mouths are sewn upwards. The stitches hold a permanent, forced smile on their cheeks. They also have blood on their hands and the front of their clothes.||";
yes_options[32] = "IGNORE THEM";
no_options[32] = "TALK WITH THEM";
horror_info[32] = new horror(true, false, false, 33, 34, false, false);
horror_sound_action[32] = new action_sound(s_footsteps_indoor,s_footsteps_indoor);
horror_sound_scary[32] = new scary_sound(s_tense,280);
horror_sound_death[32] = new scary_sound(s_nosound, -1); // unused

//instruction thirtythree: checkpoint
/*
    selecting yes_options[33] will result in failArray[19]
    selecting no_options[33] will advance to instructionArray[34]
*/
instructionArray[33] = "Due to their utter creepiness, you ignore the group. You walk around to the other side of the room, looking for an exit. Then you notice it. The only exit is behind the surgical team. They are still staring. Their hands move as they perform the action of surgery while smiling directly at you. You have no choice but to confront them...||";
yes_options[33] = "ATTACK THEM";
no_options[33] = "TALK WITH THEM";
failArray[19] = "You pull out your pistol and methodically shoot the three of them. Boom, boom, boom. Three head shots. You hear a bang from behind and turn just as you feel a crushing blow on the left side of my head. You can't make out your attacker. And this is the end of your story.";
horror_info[33] = new horror(true, true, false, 19, 34, false, false);
horror_sound_action[33] = new action_sound(s_panic,s_panic);
horror_sound_scary[33] = new scary_sound(s_tense,7);
horror_sound_death[33] = new scary_sound(s_threeshots,65);

//instruction thirtyfour: checkpoint
/*
    selecting yes_options[34] will advance to instructionArray[35]
    selecting no_options[34] will result in failArray[20]
*/
instructionArray[34] = "You walk closer and ask the surgeon, \"What happened to your face?\" He stares at you, making odd sounds. |Jessica screams, \"They have no tongues!\" She's right: none of these individuals have tongues. |\"What the...\" you say as you look down at the patient they're operating on. His brain is exposed. It looks as if they are performing a brain surgery, but you notice the patient isn\'t breathing. He also stinks. \"He\'s dead. Why are you operating on a corpse?\" The surgeon\'s eyes flash and he points at the door behind him. His assistants stand staring. It is evident they want you to leave...||";
yes_options[34] = "LEAVE THE ROOM";
no_options[34] = "ATTACK THEM";
failArray[20] = "You pull out your pistol and methodically shoot the three of them. Boom, boom, boom. Three head shots. You hear a bang from behind and turn just as you feel a crushing blow on the left side of my head. You can't make out your attacker. And this is the end of your story.";
horror_info[34] = new horror(true, false, true, 35, 20, false, false);
horror_sound_action[34] = new action_sound(s_tense,s_tense);
horror_sound_scary[34] = new scary_sound(s_scream_woman,122);
horror_sound_death[34] = new scary_sound(s_threeshots,65);

//instruction thirtyfive
/*
    selecting yes_options[35] will advance to instructionArray[36]
    selecting no_options[35] will advance to instructionArray[37]
*/
instructionArray[35] = "You open the door, let Jessica in and shut it behind yourself. You then lock it, glad to be away from that room. |\"This is a nightmare,\" you whisper. |Jessica falls to the floor and rests against the wall. You sit next to her. She is shaking. |\"What...is...happening...here?\" she trembles. |\"I\'ve never heard of or seen such filth and depravity...\" |She asks you, \"What were those people doing? Why were they disfigured?\" |You look at her and try to think of something comforting to say, but nothing intelligent comes to mind. You sit, confused and upset.||";
yes_options[35] = "SIT IN SILENCE";
no_options[35] = "TALK WITH JESSICA";
horror_info[35] = new horror(false, false, false, 36, 37, false, false);
horror_sound_action[35] = new action_sound(s_sobbing,s_nosound);
horror_sound_scary[35] = new scary_sound(s_door_close,40);
horror_sound_death[35] = new scary_sound(s_nosound,-1); // unused

//instruction thirtysix: checkpoint
/*
    selecting yes_options[36] will advance to instructionArray[38]
    selecting no_options[36] will result in failArray[21]
*/
instructionArray[36] = "While Jessica sobs, you sit still and try to collect yourself. You look around the room you are in. It is small and undecorated. It is wild to you that this \'house\' has so many elements. It doesn\'t mesh well: a library, an old-fashioned dining room, a laboratory... You still don't know where you are or how you got here exactly. \"We need to get out of this torment.\" You look over the small room. There are two doors: one  with light showing through the gap at the bottom, the other emits a cool breeze but no light comes through the gap.||";
yes_options[36] = "ENTER DOOR WITH BREEZE";
no_options[36] = "ENTER DOOR WITH LIGHT";
failArray[21] = "You stand up, grab Jessica\'s hand and lift her to a standing position. You walk to the door and open it. It's a mistake. In front of you is a large conference table with about 30 people sitting at it. They hold an assortment of weapons. You muster your words and begin saying, \"Please don\'t kill-\". And this is the end of your story.";
horror_info[36] = new horror(true, false, true, 38, 21, false, false);
horror_sound_action[36] = new action_sound(s_door_unlock,s_panic);
horror_sound_scary[36] = new scary_sound(s_tense2,208);
horror_sound_death[36] = new scary_sound(s_pistol,297);

//instruction thirtyseven: checkpoint
/*
    selecting yes_options[37] will advance to instructionArray[38]
    selecting no_options[37] will result in failArray[22]
*/
instructionArray[37] = "\"Look, Jessica,\" you say, \"I have no idea what\'s going on in this place. I\'ve never experienced anything remotely like this. Do you know how you got here?\" |\"The last memory I had was being at work,\" she answers, \"and then I awoke on a path outside this house. I don\'t know how or why I arrived here. I\'m just trying to stay alive.\". |You acknowledge her. You want to find out more but know that you can\'t sit here any longer. \"We need to get out of this torment.\" You look over the small room. There are two doors: one  with light showing through the gap at the bottom, the other emits a cool breeze but no light comes through the gap.||";
yes_options[37] = "ENTER DOOR WITH BREEZE";
no_options[37] = "ENTER DOOR WITH LIGHT";
failArray[22] = "You stand up, grab Jessica\'s hand and lift her to a standing position. You walk to the door and open it. It's a mistake. In front of you is a large conference table with about 30 people sitting at it. They hold an assortment of weapons. You muster your words and begin saying, \"Please don\'t kill-\". And this is the end of your story.";
horror_info[37] = new horror(true, false, true, 38, 22, false, false);
horror_sound_action[37] = new action_sound(s_door_unlock,s_panic);
horror_sound_scary[37] = new scary_sound(s_tense2,545);
horror_sound_death[37] = new scary_sound(s_pistol,297);

//instruction thirtyeight: checkpoint
/*
    selecting yes_options[38] will result in failArray[23]
    selecting no_options[38] will advance to instructionArray[39]
*/
instructionArray[38] = "You stand up, grab Jessica\'s hand and lift her to a standing position. You walk to the door and open it. You blink. You're outside! You scan the area. Wait... You are outdoors but you aren't outside. You are in an outdoor corridor. To your left is the exterior of the house, to your right is a 15 foot tall fence with brutal spikes at the top and in front of you is a path that appears to lead to another door.||";
yes_options[38] = "CLIMB THE FENCE";
no_options[38] = "TAKE THE PATH TO THE DOOR";
failArray[23] = "You walk over to the fence and grip the bars. |\"Are you sure that\'s a good idea?\" Jessica asks. She eyes the spikes at the top. |\"I\'m a good climber,\" you reply. \"I\'ll figure something out.\" |\"Okay,\" she says. \"But I can\'t climb it, so what happens when you get over?\" |\"I said I\'d figure it out!\" you snap back. |You hand her your pistol and begin making your way up the fence. The bars are slightly rusted, which help your grip. You make it to the top, sweating and out of breath. You reach over the spikes and pull. You slip and fall forward. You hear Jessica yell and then feel the rusted spikes impale your throat and upper body. And this is the end of your story.";
horror_info[38] = new horror(true, true, false, 23, 39, false, false);
horror_sound_action[38] = new action_sound(s_wind,s_wind);
horror_sound_scary[38] = new scary_sound(s_wind,116);
horror_sound_death[38] = new scary_sound(s_scream_woman,582);

//instruction thirtyeight: checkpoint
/*
    selecting yes_options[39] will advance to instructionArray[40]
    selecting no_options[39] will result in failArray[24]
*/
instructionArray[39] = "Jessica breathes a sigh of relief. \"Thank goodness you\'re not going to climb that fence. That would be a death wish!\" |You chuckle. You make your way down the dark path, gravel crunching under your feet. You reach the door and turn the handle. It's locked.||";
yes_options[39] = "LOOK FOR THE KEY";
no_options[39] = "KICK THE DOOR DOWN";
failArray[24] = "\"I have always wanted to do this,\" you say to Jessica. |She grins. You lift your leg and kick the door. Bang! It cracks near the handle but doesn\'t give. You lift your leg for a second blow and hear a noise behind you. The door you just entered from opens. You turn to see a crowd of people pouring out. |\"They heard us!\" Jessica yells. She holds her hatchet up and you pull out the pistol. You don\'t stand a chance. You are outmanned and outgunned. The last thing you see is the barrel of a shotgun. And this is the end of your story.";
horror_info[39] = new horror(true, false, true, 40, 24, false, false);
horror_sound_action[39] = new action_sound(s_nosound,s_kick_door_down);
horror_sound_scary[39] = new scary_sound(s_walking_gravel,175);
horror_sound_death[39] = new scary_sound(s_shotgun_shot,108);

//instruction forty
/*
    selecting yes_options[40] will advance to instructionArray[41]
    selecting no_options[40] will advance to instructionArray[42]
*/
instructionArray[40] = "\"Jessica, help me find the key.\" you say. |You look on the path. Jessica lifts the doormat and what do you know? Lying there in the grime is a key. It's a large, old-fashioned, fancy-looking key. |\"You\'re welcome,\" she winks as she hands it to you. |You try it and it works! The door clicks and opens. Immediately something jumps on top of you and knocks you on your back.||";
yes_options[40] = "CALL FOR HELP";
no_options[40] = "ATTACK WHATEVER IS ON TOP OF YOU";
horror_info[40] = new horror(true, false, false, 41, 42, false, false);
horror_sound_action[40] = new action_sound(s_yell_man,s_yelp);
horror_sound_scary[40] = new scary_sound(s_thump,344);
horror_sound_death[40] = new scary_sound(s_nosound,-1); // unused

//instruction fortyone: checkpoint
/*
    selecting yes_options[41] will advance to instructionArray[43]
    selecting no_options[41] will result in DEATH (failArray[25])
*/
instructionArray[41] = "You yell for Jessica. She swings her hatchet. There is a shrill yelp and blood splatters across your face. You quickly wipe your eyes and rise to your feet, pistol at the ready. On the floor, there lies a dead dog, half of its neck sliced through. It's a wolf-like dog: large and, by all appearances, hungry. |\"Really?\" you ask, \"Crazy people and now a killer dog...\" You look to Jessica; she's panting and her hatchet drips gore. \"Thank you.\" |She nods in response. In the corner there is a set of television screens. |\"I think it\'s a security system,\" you say to Jessica and yourself.||";
yes_options[41] = "TURN THE SCREENS ON";
no_options[41] = "LEAVE THEM BE";
failArray[25] = "You don\'t turn on the security camera screens. You and Jessica scan the room. You search a nearby bookcase, where you find books on human anatomy and neurology. You pick one up entitled \"Brains and Minds\" and flip through it. There are diagrams of different sections of the brain indicating where to cut to supposedly affect behavior. |\"Jessica, you have to see -\" |You turn your head and see Jessica being held from behind by a tall man. How did you not hear him? He has a knife to her throat. You raise your weapon and while staring directly at you, the man slashes her throat from ear to ear. Jessica dies. You take your axe and charge at him. He makes an attempt to stab you but you dodge and bring your axe down on his head. Two more men enter the room and before you can react they shoot you in the back. And this is the end of your story.";
horror_info[41] = new horror(true, false, true, 43, 25, false, false);
horror_sound_action[41] = new action_sound(s_computer_beeps,s_nosound);
horror_sound_scary[41] = new scary_sound(s_yelp,66);
horror_sound_death[41] = new scary_sound(s_axe_impact,727);

//instruction fortytwo: checkpoint
/*
    selecting yes_options[42] will advance to instructionArray[43]
    selecting no_options[42] will result in DEATH (failArray[26])
*/
instructionArray[42] = "You push your hands against the heavy attacker. Jessica swings her hatchet. There is a shrill yelp and blood splatters across your face. You quickly wipe your eyes and rise to your feet, pistol at the ready. On the floor there is a dead dog, half of its neck sliced through. It's a wolf-like dog: large and, by all appearances, hungry. |\"Really?\" you ask. \"Crazy people and now a killer dog...\" You look to Jessica; she's panting and her hatchet drips gore. \"Thank you.\" |She nods in response. In the corner there is a set of television screens. |\"I think it\'s a security system,\" you say to Jessica and yourself.||";
yes_options[42] = "TURN THE SCREENS ON";
no_options[42] = "LEAVE THEM BE";
failArray[26] = "You don\'t turn on the security camera screens. You and Jessica scan the room. You search a nearby bookcase, where you find books on human anatomy and neurology. You pick one up entitled \"Brains and Minds\" and flip through it. There are diagrams of different sections of the brain indicating where to cut to supposedly affect behavior. |\"Jessica, you have to see -\" |You turn your head and see Jessica being held from behind by a tall man. How did you not hear him? He has a knife to her throat. You raise your weapon and while staring directly at you, the man slashes her throat from ear to ear. Jessica dies. You take your axe and charge at him. He makes an attempt to stab you but you dodge and bring your axe down on his head. Two more men enter the room and before you can react they shoot you in the back. And this is the end of your story.";
horror_info[42] = new horror(true, false, true, 43, 26, false, false);
horror_sound_action[42] = new action_sound(s_computer_beeps,s_page_turn);
horror_sound_scary[42] = new scary_sound(s_yelp,96);
horror_sound_death[42] = new scary_sound(s_axe_impact,727);

//instruction fortythree: checkpoint
/*
    selecting yes_options[43] will advance to instructionArray[44]
    selecting no_options[43] will result in DEATH (failArray[27])
*/
instructionArray[43] = "You turn the security system screens on. There are eight screens. You can see some areas where you've been and a couple you have not. Suddenly there is a tall figure on one of the screens. He is coming up the path you just walked on. He holds a long butcher knife in his right hand. You can\'t make out his face. |\"Jessica!\" You hiss, \"Someone\'s coming!\"||";
yes_options[43] = "HIDE";
no_options[43] = "PREPARE TO ATTACK";
failArray[27] = "\"Get your weapon ready.\" you tell Jessica. |You stand by the door,  ready. You hear a small noise and turn your head to see Jessica being held from behind by a tall man. He has a knife to her throat. How did he get by you? How did you not see or hear him? You raise your weapon and while staring directly at you, the man slashes her throat from ear to ear. Jessica dies. You take your axe and charge at him. He makes an attempt to stab you but you dodge and bring your axe down on his head. Two more men enter the room and before you can react they shoot you in the back. And this is the end of your story.";
horror_info[43] = new horror(true, false, true, 44, 27, false, false);
horror_sound_action[43] = new action_sound(s_fast_heartbeat,s_begging);
horror_sound_scary[43] = new scary_sound(s_panic,187);
horror_sound_death[43] = new scary_sound(s_pistol,560);

//instruction fortyfour: checkpoint
/*
    selecting yes_options[44] will advance to instructionArray[45]
    selecting no_options[44] will result in DEATH (failArray[28])
*/
instructionArray[44] = "\"We need to hide, now!\" you hiss at Jessica. |There is a standalone closet that has thin horizontal slats. You pull Jessica inside and shut the doors just in time. The man enters the room. He immediately walks over to the screens and looks them over. He begins walking around the room and appears to be looking for you. He walks in front of your closet and looks at the doors. You hold your breath. Can he see you?||";
yes_options[44] = "WAIT IT OUT";
no_options[44] = "ATTACK";
failArray[28] = "You take your axe, smash open the closet doors and charge at him. He makes an attempt to stab you but you dodge and bring your axe down on his head. Two more men enter the room. Before you can react they shoot you in the back. And this is the end of your story.";
horror_info[44] = new horror(true, false, true, 45, 28, false, false);
horror_sound_action[44] = new action_sound(s_fast_heartbeat,s_kick_door_down);
horror_sound_scary[44] = new scary_sound(s_footsteps_indoor,208);
horror_sound_death[44] = new scary_sound(s_pistol,206);

//instruction fortyfive
/*
    selecting yes_options[45] will advance to instructionArray[46]
    selecting no_options[45] will advance to instructionArray[47]
*/
instructionArray[45] = "Your heart races. You hope he doesn't hear it pounding. After what is only two seconds but seems like an eternity, he continues walking. He finishes his circle of the room. He pauses at the door he came through, then glances back over toward your closet. And then he leaves the room. You and Jessica simultaneously breathe sighs of relief. You exit the closet.||";
yes_options[45] = "LOOK AT SECURITY SCREENS AGAIN";
no_options[45] = "SEARCH THE ROOM";
horror_info[45] = new horror(true, false, false, 46, 47, false, false);
horror_sound_action[45] = new action_sound(s_computer_beeps,s_footsteps_indoor);
horror_sound_scary[45] = new scary_sound(s_walking_away,126);
horror_sound_death[45] = new scary_sound(s_nosound,-1); // unused

//instruction fortysix: checkpoint
/*
    selecting yes_options[46] will result in DEATH [29]
    selecting no_options[46] will advance to instructionArray[48]
*/
instructionArray[46] = "You take a look at the security cameras again. Behind you, on the path you came from, there is a huddle of men. There are three of them and they appear to be talking and pointing. The screens show that the room ahead of you has no one in it but contains several coffins!||";
yes_options[46] = "GO BACK TO FACE THE MEN";
no_options[46] = "ENTER THE ROOM WITH THE COFFINS";
failArray[29] = "You ready your gun, open the door and open fire on the three men. Bam! One down. Bam! Another down. The third one has made his way close to you and grabs for the gun. There is a struggle. He is twice your size and overpowers you. Bam! A shot goes off. You hear a noise. Jessica has fallen to the ground, blood gushing out of her head. And then... Bam! And this is the end of your story.";
horror_info[46] = new horror(true, true, false, 29, 48, false, false);
horror_sound_action[46] = new action_sound(s_guncock,s_door_wood);
horror_sound_scary[46] = new scary_sound(s_panic,90);
horror_sound_death[46] = new scary_sound(s_pistol,234);


//instruction fortyseven: checkpoint
/*
    selecting yes_options[47] will result in DEATH [30]
    selecting no_options[47] will advance to instructionArray[48]
*/
instructionArray[47] = "You glance around the room and see nothing of interest. So you take a look at the security cameras again. Behind you, on the path you came from, there is a huddle of men. There are three of them and they appear to be talking and pointing. The screens show that the room ahead of you has no one in it but contains several coffins!||";
yes_options[47] = "MOVE BACKWARD";
no_options[47] = "MOVE FORWARD";
failArray[30] = "You ready your gun, open the door and open fire on the three men. Bam! One down. Bam! Another down. The third one has made his way close to you and grabs for the gun. There is a struggle. He is twice your size and overpowers you. Bam! A shot goes off. You hear a noise. Jessica has fallen to the ground, blood gushing out of her head. And then... Bam! And this is the end of your story.";
horror_info[47] = new horror(true, true, false, 30, 48, false, false);
horror_sound_action[47] = new action_sound(s_guncock,s_door_metal);
horror_sound_scary[47] = new scary_sound(s_panic,145);
horror_sound_death[47] = new scary_sound(s_pistol,234);

//instruction forty eight
/*
selecting yes_options[48] will advance to instructionArray[49]
selecting no_options[48] will advance to coffinArray[0]
*/
instructionArray[48] = "You open the door and make your way into the room filled with coffins. It smells rancid. The floor is concrete and the walls and ceiling are stone. Each coffin is numbered with gold lettering: 1 through 17. Jessica eyes the room with her hand on her face. On one of the walls you see what looks to be hand-smeared blood. |The blood messily spells out a set of numbers; \"3\" \"17\" \"5\"...||";
yes_options[48] = "CONTINUE CHECKING THE ROOM";
no_options[48] = "OPEN A COFFIN";
horror_info[48] = new horror(false, false, false, 49, 0, false, true);
horror_sound_action[48] = new action_sound(s_blood_drip,s_coffin_creaky);
horror_sound_scary[48] = new scary_sound(s_blood_drip,78);
horror_sound_death[48] = new scary_sound(s_nosound,-1); // unused

//instruction fortynine: checkpoint
/*
    selecting yes_options[49] will result in failArray[31]
    selecting no_options[49] will advance to coffinArray[0]
*/
instructionArray[49] = "You examine the walls for doors but it looks like you are caught in a dead end (no pun intended). The only door in the room is the one you entered through. |Jessica runs her hand against the wall. \"It\'s damp,\" she says.||";
yes_options[49] = "LEAVE THROUGH THE DOOR YOU ENTERED";
no_options[49] = "OPEN A COFFIN";
failArray[31] = "Because you can't find a way through, you leave the room the way you came in. It seems the three men you saw earlier on the security displays have caught up with you. Jessica jumps in front of you swinging her hatchet. She doesn\'t stand a chance. The last thing you see is the barrel of a gun. And this is the end of your story.";
horror_info[49] = new horror(true, true, false, 31, 0, false, true);
horror_sound_action[49] = new action_sound(s_door_unlock,s_coffin_creaky);
horror_sound_scary[49] = new scary_sound(s_blood_drip,207);
horror_sound_death[49] = new scary_sound(s_shotgun_shot,292);


//instruction coffin zero
/*
this message is the intro to the coffin mini game, and advances upon completion
*/
coffinArray[0] = "";

// failure to select the proper coffin results in failArray[32]
// success advances coffinArray[2]
coffinArray[1] = "You decide to open one of the caskets. Hopefully there is nothing inside... |Which coffin do you open first? Choose a number from 1-17.";
failArray[32] = "You reach down and open the lid. There is a bright flash and an explosion. You briefly feel your flesh burning, then you think of Jessica...And this is the end of your story.";

// advance after text coffinArray[3]
coffinArray[2] = "";

// failure to select the proper coffin results in failArray[33]
// success advances coffinArray[4]
coffinArray[3] = "You reach down and open the lid. Inside, there is a note. On it is scrawled, \"First step on your path downward.\" |Which coffin do you open next? Choose a number from 1-17.";
failArray[33] = "You reach down and open the lid. There is a bright flash and an explosion. You briefly feel your flesh burning, then you think of Jessica...And this is the end of your story.";

// advance after text coffinArray[5]
coffinArray[4] = "";

// failure to select the proper coffin results in failArray[34]
// success advances instructionArray[50]
coffinArray[5] = "You reach down and open the lid. There is another note. \"One step further toward the depths below.\" |Which coffin do you open third? Choose a number from 1-17.";
failArray[34] = "You reach down and open the lid. There is a bright flash and an explosion. You briefly feel your flesh burning, then you think of Jessica...And this is the end of your story.";

// instruction fifty: checkpoint
/*
    yesOption = advance to instruction array 51
    noOption = failarray[35]
*/
instructionArray[50] = "You open the coffin with the gold letter 5 on top. The floor begins to shake. Dust falls from the walls and ceiling. Step by step, a rough staircase begins to form. Jessica grabs you and pulls you back. It is extremely loud and you glance at the door, convinced that you will be heard.||";
yes_options[50] = "BLOCK THE DOOR WITH A COFFIN";
no_options[50] = "HIDE IN A COFFIN";
failArray[35] = "You and Jessica hide in separate coffins. The stairs finish moving into place just as three large men burst into the room. You're easily found and you hit one with an axe. The second one begins strangling Jessica. The last man opens fire on you. You don\'t see what happens to Jessica. And this is the end of your story.";
horror_info[50] = new horror(true, false, true, 51, 35, false, false);
horror_sound_action[50] = new action_sound(s_move_coffin,s_metal_latch);
horror_sound_scary[50] = new scary_sound(s_earthquake,76);
horror_sound_death[50] = new scary_sound(s_kick_door_down,103);

//instruction fifty one
/*
    yesOption = advance to instruction array 52
    noOption = advance to instruction array 53
*/
instructionArray[51] = "You push a coffin against the door. It is very heavy and you break a sweat. The stairs finish moving into place and there is a pounding at the door. You really have no choice. You head down the stairs. The stairs are heavy, rough-hewn stone. There is no light on the staircase but you can make out a dim glow at the bottom. The pounding above continues but the door is thick and the coffin heavy. You look at Jessica. She is dirty and sweaty. You realize that you must look like a mess. But in times like these, appearance is the least concern. |\"Well we can\'t seem to get a moment\'s peace and there are men wanting to kill us who are slamming away above,\" Jessica says. |\"I hate this place. And at the risk of sounding trite, I just want to go home. To top it all off, I hate the dark,\" you complain.||";
yes_options[51] = "CONTINUE DOWN THE STAIRS";
no_options[51] = "SIT DOWN";
horror_info[51] = new horror(false, false, false, 52, 53, false, false);
horror_sound_action[51] = new action_sound(s_walk_downstairs,s_nosound);
horror_sound_scary[51] = new scary_sound(s_move_coffin,14);
horror_sound_death[51] = new scary_sound(s_nosound,-1); // unused

//instruction fifty two: checkpoint
/*
    yesOption = advance to instruction array 54
    noOption = failarray[36]
*/
instructionArray[52] = "You arrive at the bottom of the stairs. In front of you is a disgusting sight. There is a man with a bloodied butcher\'s apron, wearing a dustmask and holding a cleaver. On the table next to him is a gutted corpse.||";
yes_options[52] = "ATTACK";
no_options[52] = "TALK";
failArray[36] = "\"What is happen-\" you start. |The man moves quickly and his cleaver strikes you in the side of the head. The first blow knocks you down. You attempt to raise your weapon but your arm won\'t move. He strikes you again. And this is the end of your story.";
horror_info[52] = new horror(true, false, true, 54, 36, false, false);
horror_sound_action[52] = new action_sound(s_pistol,s_panic);
horror_sound_scary[52] = new scary_sound(s_tense3,109);
horror_sound_death[52] = new scary_sound(s_flesh_split,17);

//instruction fifty three: checkpoint
/*
    yesOption = advance to instruction array 54
    noOption = failarray[37]
*/
instructionArray[53] = "You are tired. You sit down on the cold, hard stairs. |Jessica immediately pulls at you, \"What the hell are you doing?\" she asks. \"There are people trying to get at us!\" |You stand up and make your way down the stairs. You arrive at the bottom of the stairs. In front of you is a disgusting sight. There is a man with a bloodied butcher\'s apron, wearing a dustmask and holding a cleaver. On the table next to him is a gutted corpse.||";
yes_options[53] = "ATTACK";
no_options[53] = "TALK";
failArray[37] = "\"What is happen-\" you start. |The man moves quickly and his cleaver strikes you in the side of the head. The first blow knocks you down. You attempt to raise your weapon but your arm won\'t move. He strikes you again. And this is the end of your story.";
horror_info[53] = new horror(true, false, true, 54, 37, false, false);
horror_sound_action[53] = new action_sound(s_pistol,s_panic);
horror_sound_scary[53] = new scary_sound(s_tense3,304);
horror_sound_death[53] = new scary_sound(s_flesh_split,17);

//instruction fiftyfour: checkpoint
/*
    yesOption = failarray[38]
    noOption = advance to instruction array 55
*/
instructionArray[54] = "Without delay, you raise your pistol and shoot him between the eyes. He is blown several feet backward and lands flat on his back. Suddenly another person enters the room. He has a long knife.||";
yes_options[54] = "SHOOT";
no_options[54] = "ORDER HIM TO DROP THE KNIFE";
failArray[38] = "You pull the trigger. Bam! He dodges to the left and you miss! You attempt another shot but he is upon you. His knife slides deep into your right eye. The pain is deathly. You see red. And this is the end of your story.";
horror_info[54] = new horror(true, true, false, 38, 55, false, false);
horror_sound_action[54] = new action_sound(s_pistol,s_yell_man);
horror_sound_scary[54] = new scary_sound(s_thump,98);
horror_sound_death[54] = new scary_sound(s_stab,119);

//instruction fifty five: checkpoint
/*
    yesOption = advance to instruction array 56
    noOption = failarray[39]
*/
instructionArray[55] = "You yell, \"Drop the knife, I have a gun!\" |He glances at you and sets the knife down. He then says, \"Where the moon shines exists the deepest lord of nightly experiences. At times, I eat all but glory.\" |He falls on the floor and rocks back and forth. A pile of rope lies nearby. Jessica clicks the flashlight off and bravely picks up his knife.||";
yes_options[55] = "TIE HIM UP";
no_options[55] = "WALK PAST HIM";
failArray[39] = "You figure he is insane and continue past him. You hear a rapid shuffling and feel a sharp sting in the back of your neck. The stinging becomes an unbearable pain. You cough blood. The man has stabbed you in the back of the neck. And this is the end of your story.";
horror_info[55] = new horror(true, false, true, 56, 39, false, false);
horror_sound_action[55] = new action_sound(s_rustle,s_footsteps_indoor);
horror_sound_scary[55] = new scary_sound(s_tense2,108);
horror_sound_death[55] = new scary_sound(s_stab,119);

//instruction fifty six
/*
    yesOption = advance to instruction array 57
    noOption = advance to instruction array 58
*/
instructionArray[56] = "You grab the rope. You learned knots as a child. You can\'t recall all the names but you remember how to tie the knots you felt were useful. You grab the man's arm and he struggles. He takes a swing at you and you slam the butt of your pistol against the back of his head. He yelps but continues struggling. You hit him again, harder, on the top of his head and knock him unconscious. You tie him with his arms behind his back to the leg of a nearby table that is bolted to the floor .||";
yes_options[56] = "SEARCH THE ROOM";
no_options[56] = "LOOK FOR A WAY OUT";
horror_info[56] = new horror(true, false, false, 57, 58, false, false);
horror_sound_action[56] = new action_sound(s_footsteps_indoor,s_footsteps_indoor);
horror_sound_scary[56] = new scary_sound(s_punch,248);
horror_sound_death[56] = new scary_sound(s_nosound,-1); // unused

//instruction fifty seven
/*
    yesOption = advance to instruction array 59
    noOption = advance to instruction array 60
*/
instructionArray[57] = "You finally have a moment to scan the room. The butcher lies in a pool of mixed blood on the floor. There are two doors: one on the left and another further to your right.||";
yes_options[57] = "OPEN THE DOOR TO THE LEFT";
no_options[57] = "OPEN THE DOOR TO THE RIGHT";
horror_info[57] = new horror(false, false, false, 59, 60, false, false);
horror_sound_action[57] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[57] = new scary_sound(s_blood_drip,47);
horror_sound_death[57] = new scary_sound(s_nosound,-1); // unused

//instruction fifty eight
/*
    yesOption = advance to instruction array 59
    noOption = advance to instruction array 60
*/
instructionArray[58] = "You look around the room. The butcher lies in a pool of mixed blood on the floor. There are two doors: one on the left and another further to your right.||";
yes_options[58] = "OPEN THE DOOR TO THE LEFT";
no_options[58] = "OPEN THE DOOR TO THE RIGHT";
horror_info[58] = new horror(false, false, false, 59, 60, false, false);
horror_sound_action[58] = new action_sound(s_door_unlock,s_door_unlock);
horror_sound_scary[58] = new scary_sound(s_blood_drip,47);
horror_sound_death[58] = new scary_sound(s_axe,30);

//instruction fifty nine: checkpoint
/*
    yesOption = failarray[40]
    noOption = advance to instruction array 61
*/
instructionArray[59] = "You open the door on the left. It is a closet. Inside is some clean clothing. You are filthy and decide to change your clothes. Jessica turns away. The fresh attire feels nice. You and Jessica trade places and she changes into a clean shirt. Left with no other options besides going back, you head toward the door on the right. You open the door and all you can see is pitch black. You ask Jessica to pass you the flashlight and you click it back on. Of course, in keeping with your terrible experience thus far, the flashlight doesn\'t turn on. |\"Crap, the batteries are dead.\" you say. |Suddenly, on the stairs behind you, you hear footsteps pounding. Jessica grabs your arm.||";
yes_options[59] = "WAIT FOR THEM TO ARRIVE AND FIGHT";
no_options[59] = "HEAD INTO THE DARKNESS";
failArray[40] = "You ready your pistol, aiming it toward the door. A man appears at the bottom of the stairs. His face is filthy and he holds a large axe in either hand. BANG! You shoot him in the arm. He drops one axe. Behind him several more large, armed men pour into the room. Jessica impales one of them with her knife, but you are no match for them. The last thing you see is gleaming steel. And this is the end of your story.";
horror_info[59] = new horror(true, true, false, 40, 61, false, false);
horror_sound_action[59] = new action_sound(s_slow_heartbeat,s_door_close);
horror_sound_scary[59] = new scary_sound(s_click,438);
horror_sound_death[59] = new scary_sound(s_pistol,152);

//instruction sixty: checkpoint
/*
    yesOption = failarray[41]
    noOption = advance to instructionarray[61]
*/
instructionArray[60] = "You open the door and all you can see is pitch black. You ask Jessica to pass you the flashlight and you click it back on. Of course, in keeping with your terrible experience thus far, the flashlight doesn\'t turn on. |\"Crap, the batteries are dead.\" you say. |Suddenly, on the stairs behind you, you hear footsteps pounding. Jessica grabs your arm.||";
yes_options[60] = "WAIT FOR THEM TO ARRIVE AND FIGHT";
no_options[60] = "HEAD INTO THE DARKNESS";
failArray[41] = "You ready your pistol, aiming it toward the door. A man appears at the bottom of the stairs. His face is filthy and he holds a large axe in either hand. BANG! You shoot him in the arm. He drops one axe. Behind him several more large, armed men pour into the room. Jessica impales one of them with her knife, but you are no match for them. The last thing you see is gleaming steel. And this is the end of your story.";
horror_info[60] = new horror(true, true, false, 41, 61, false, false);
horror_sound_action[60] = new action_sound(s_slow_heartbeat,s_door_close);
horror_sound_scary[60] = new scary_sound(s_click,106);
horror_sound_death[60] = new scary_sound(s_pistol,152);

//instruction sixty one
/*
    yesOption = advance to instruction array 62
    noOption = advance to instruction array 63
*/
instructionArray[61] = "You shut the door behind you. \"Hold my hand so we aren\'t separated.\" you tell Jessica. |You feel the wall. It is cold and wet. Some sort of a slimy masonry. You slowly make your way around the room. You can see nothing. The only sounds are your footsteps and breathing. Your hand touches something sharp. Whatever it is that you touched, you knock it over. You move back quickly and it clatters noisily across the floor. The sound must have awakened something because you immediately hear a low growl. You clutch your weapons and feel Jessica clench. The growling grows closer.||";
yes_options[61] = "SWING YOUR AXE";
no_options[61] = "REMAIN MOTIONLESS";
horror_info[61] = new horror(true, false, false, 62, 63, false, false);
horror_sound_action[61] = new action_sound(s_axe,s_nosound);
horror_sound_scary[61] = new scary_sound(s_growl,498);
horror_sound_death[61] = new scary_sound(s_nosound,-1); // unused

//instruction sixty-two: checkpoint
/*
    yesOption = advance to instruction array 64
    noOption = failarray[42]
*/
instructionArray[62] = "You swing your axe blindly into the darkness. Nothing. Jessica strikes out with her knife. A shriek! She has cut someone or something. Then a loud noise comes from the door behind you. Light shines in the room, forcing you to cover your eyes. Two men with weapons enter. Jessica has stabbed a beast of some sort, barely hurting it. It is large, the size of a small bear and has matted fur. It is like no animal you have ever seen.||";
yes_options[62] = "ATTACK THE MEN";
no_options[62] = "ATTACK THE BEAST";
failArray[42] = "You shoot at the beast with your gun. The shots seem to have no effect on the creature. It charges at you. You look over to see the men attacking Jessica. You try to stab the beast but it easily overpowers you. You die knowing how it feels to be eaten alive. And this is the end of your story.";
horror_info[62] = new horror(true, false, true, 64, 42, false, false);
horror_sound_action[62] = new action_sound(s_bulletwhiz,s_pistol);
horror_sound_scary[62] = new scary_sound(s_yelp,89);
horror_sound_death[62] = new scary_sound(s_dog_eating,184);

//instruction sixty-three: checkpoint
/*
    yesOption = advance to instruction array 64
    noOption = failarray[43]
*/
instructionArray[63] = "You stand still. Then Jessica strikes out with her knife. A shriek! She has cut someone or something. Then a loud noise comes from the door behind you. Light shines in the room, forcing you to cover your eyes. Two men with weapons enter. Jessica has stabbed a beast of some sort, barely hurting it. It is large, the size of a small bear and has matted fur. It is like no animal you have ever seen.||";
yes_options[63] = "ATTACK THE MEN";
no_options[63] = "ATTACK THE BEAST";
failArray[43] = "You shoot at the beast with your gun. The shots seem to have no effect on the creature. It charges at you. You look over to see the men attacking Jessica. You try to stab the beast but it easily overpowers you. You die knowing how it feels to be eaten alive. And this is the end of your story.";
horror_info[63] = new horror(true, false, true, 64, 43, false, false);
horror_sound_action[63] = new action_sound(s_bulletwhiz,s_pistol);
horror_sound_scary[63] = new scary_sound(s_yelp,63);
horror_sound_death[63] = new scary_sound(s_dog_eating,184);

//instruction sixty-four
/*
    yesOption = advance to instruction array 65
    noOption = advance to instruction array 66
*/
instructionArray[64] = "You shoot at one of the men and miss. Another yells and points at you. The beast then turns to the men and charges. You grab Jessica and make your way to the nearest door. You pull her out of the room, then quickly shut the door behind you and lock it. You hear screams coming from where you just left. You turn around and find yourselves in a hallway. It's long and there appears to be only one door. A red door.||";
yes_options[64] = "SEARCH THE HALLWAY";
no_options[64] = "GO THROUGH THE DOOR";
horror_info[64] = new horror(false, false, false, 65, 66, false, false);
horror_sound_action[64] = new action_sound(s_footsteps_indoor,s_door_unlock);
horror_sound_scary[64] = new scary_sound(s_men_screaming,288);
horror_sound_death[64] = new scary_sound(s_nosound,-1);

//instruction sixty-five: checkpoint
/*
    yesOption = advance to instruction array 67
    noOption = failarray[44]
*/
instructionArray[65] = "\"Let\'s look around,\" you tell Jessica. |You scan the walls, floor and ceiling. They are barren. There are no doors or windows, just a long, undecorated hallway. |\"I can\'t find anything,\" Jessica says. |So you walk down the long hallway until you reach the door. You open the door. And you are outside again! |\"This time, we are getting out of here,\" you say. |You're in a sort of yard; there is an iron door leading into a separate building and there is a large fence. This fence isn\'t like the last one, though. It is a wooden fence. Behind you, a man opens the door. He holds a rifle and starts chuckling. He has a stained flannel shirt on, old blue jeans and no shoes. His face is scarred and twisted.||";
yes_options[65] = "SHOOT THE MAN";
no_options[65] = "RUN FOR THE FENCE";
failArray[44] = "You run for the fence. Behind you, the man aims his rifle. You were hoping that due to his obviously deranged mental state he\'d be a poor shot. You were wrong. You hear the crack just as a bullet blows through the back of your head. And this is the end of your story.";
horror_info[65] = new horror(true, false, true, 67, 44, false, false);
horror_sound_action[65] = new action_sound(s_pistol2,s_running2);
horror_sound_scary[65] = new scary_sound(s_man_chuckle,610);
horror_sound_death[65] = new scary_sound(s_rifle,177);

//instruction sixty-six: checkpoint
/*
    yesOption = advance to instruction array 67
    noOption = failarray[45]
*/
instructionArray[66] = "You walk down the long hallway until you reach the door. You open the door. And you are outside again! |\"This time, we are getting out of here,\" you say. |You're in a sort of yard; there is an iron door leading into a separate building and there is a large fence. This fence isn\'t like the last one, though. It is a wooden fence. Behind you, a man opens the door. He holds a rifle and starts chuckling. He has a stained flannel shirt on, old blue jeans and no shoes. His face is scarred and twisted.||";
yes_options[66] = "SHOOT THE MAN";
no_options[66] = "RUN FOR THE FENCE";
failArray[45] = "You run for the fence. Behind you, the man aims his rifle. You were hoping that due to his obviously deranged mental state he\'d be a poor shot. You were wrong. You hear the crack just as a bullet blows through the back of your head. And this is the end of your story.";
horror_info[66] = new horror(true, false, true, 67, 45, false, false);
horror_sound_action[66] = new action_sound(s_pistol2,s_running2);
horror_sound_scary[66] = new scary_sound(s_man_chuckle,398);
horror_sound_death[66] = new scary_sound(s_rifle,177);

//instruction sixty-seven: checkpoint
/*
    yesOption = failarray[46]
    noOption = advance to instruction 68
*/
instructionArray[67] = "You shoot the man in the face. He dies instantly. You know more will be coming. You run over to the fence and kick at the panels. They are very solid. Jessica does the same. |\"I found a loose one!\" she yells. |You both take turns kicking at it. The panel shatters and there is enough room for one of you to make it through. Three more men enter the yard.||";
yes_options[67] = "GO THROUGH THE FENCE FIRST";
no_options[67] = "LET JESSICA ESCAPE";
failArray[46] = "You crawl through the fence. Jessica is behind you. You hear a gunshot. Jessica yells and falls to the dirt. You stand up and look behind you. The men are running towards you, shooting. You begin to run. A bullet tears at your leg. You stumble and drop your pistol. Another ruptures your kidney and tears open your side. You fall, bleeding. You crawl further but a final bullet pierces your lung. And this is the end of your story.";
horror_info[67] = new horror(true, true, false, 46, 68, false, false);
horror_sound_action[67] = new action_sound(s_delayedshot,s_delayedshot);
horror_sound_scary[67] = new scary_sound(s_kicking_fence,111);
horror_sound_death[67] = new scary_sound(s_bullet_impacts,281);

//instruction sixtyeight: checkpoint
/*
    yesOption = failarray[47]
    noOption = advance to instruction 69
*/
instructionArray[68] = "You urge Jessica, \"Run! I\'ll take care of them.\" |She crawls through the jagged opening. You turn and shoot one of the three men. He falls back and luckily knocks over the other two. |Jessica looks at you and says, \"My last name is Brickley. I'm from Denver. Find me.\" |You respond, \"Get to safety. I'll catch up with you. Just run!\" |She doesn\'t think twice and runs. You get down and start crawling through the fence. You feel a strong grip on your leg and are ripped back through, your fingers clawing at the dirt and the edges of the opening. A muscular man throws you a couple feet. Your gun falls by your side. You grip your axe. He dives on top of you and you swing your axe into his neck. His body goes limp on top of yours. You push him off to see two men blocking your exit through the fence.||";
yes_options[68] = "FIGHT THEM";
no_options[68] = "RUN INTO THE BUILDING";
failArray[47] = "You grip your axe and run toward the men. One of them sidesteps and punches you in the side of your face. You are dazed and drop your axe. You reach down to pick up your weapon and feel another blow on the back of your head. You collapse next to the group. The men proceed to kick your head in. And this is the end of your story.";
horror_info[68] = new horror(true, true, false, 47, 69, false, false);
horror_sound_action[68] = new action_sound(s_tense,s_tense);
horror_sound_scary[68] = new scary_sound(s_flesh_split,690);
horror_sound_death[68] = new scary_sound(s_beating,275);

//this is the end of the game
instructionArray[69] = "You turn and run toward the nearby building. Jessica has escaped. The men have turned their attention to you. One of them throws a knife. You dodge it. The yard now has around ten people in it, all rapidly making their way toward you. You reach the door and turn the handle. The door is very heavy but you force it open with your shoulder. You quickly lock the door behind you. The door not only has a deadbolt lock, it also has a sliding bar that latches it shut. It looks very sturdy. |You pause for a moment, dreading whatever horrors exist behind you. What you've gone through so far has left you profoundly shaken and resigned. You slowly turn. You find yourself in a bright, comfortably-furnished room. Behind a long cherry oak desk sit three older men. They smile at you. In front of them lie clipboards and files. The room is lined with warm reddish-brown wood paneling and behind the men a pleasant fire crackles on the hearth. You hear a bang on the iron door behind you. One of the men at the table pushes a button on the panel in front of them and then there is silence. You stare, dumbfounded, at the change in scenery and you're too stunned to respond quickly. |Finally one of the men speaks, \"Well done, " + name +". You're the first person to make it through.\" |He sits in the center of the group. White hair, glasses and thin. |\"Make it through what?\" you ask. |\"Consider it a test of the human brain,\" the man replies. \"Tonight, you\'ve been presented several choices, each of which has led you here. Had you chosen incorrectly at any point, we would have never met.\" |\"I don't understand...\" you say. |The man to the left speaks, \"We are running the \'Human Choice Program\'.\" This man has black hair and a full beard. He is bald and has dark eyes. \"We have been taking critics of our company and systematically entering them into this program. Of course, many of them die in the process. We figured it was fine since they were to be assassinated anyway.\" |\"Wait... You\'re saying that this whole thing is a game?\" you ask, completely baffled. |The middle man speaks again, \"No, sir. Those are real people with weapons. Each of them are psychotic patients that we have armed and instructed to kill you. We have outfitted around 100 psychiatric patients and run this project. Before you, they have eliminated many threats for us.\" |The man on the left joins in, \"You\'re on a highly controlled base. Each of the patients has a chip implanted in their head which allows us to administer varying levels of shocks. From \'slap on the wrist\' to \'death\'. If any of them disagrees with us or refuses to follow orders, we kill them with the push of a button.\" |You start making some sense of things and ask, \"So, earlier you mentioned using this base to silence critics - what does that mean exactly?\" |The remaining man who has up until now remained quiet, speaks, \"We are the psychiatric department of Mankley Industries: a major international company that manufactures and distributes products ranging from weapons to pharmaceuticals. As you can imagine, we have our fair share of adversaries. As the head of the mental health council, we\'ve been charged with the removal of those who attempt to expose the company.\" |\"What do I have to do with that?\" you ask. |At this point, you notice screens with security camera feeds discreetly placed to the right side of the desk. You can see the rooms you and Jessica passed through. They have been watching you all along. |The white-haired man speaks again, \"You work for a major blog site. You were writing an article on the disappearances of people investigating Mankley Industries. Now of course you don\'t remember that, because we wiped your memory. You\'d be surprised at what the right combination of drugs and electric shock can do.\" |At that moment, memories pour in. You fall to one knee. It is a completely foreign and new experience. Years flood back into your mind. |\"Prior to your arrival, there have been 132 people successfully run through this experiment,\" the man continues. \"All are dead. It has given us much insight into the human mind and the choices people make when under stress. We obviously will need to make it more challenging since you made it through, but we figured these people were slated to die already so we might as well learn from it.\" |The combination of your fatigue, the returned memories and the sheer evil you are confronting overwhelms you. You back into a corner and sit down. |The man with the beard begins speaking again, \"Now, before we kill you, we have a few questions. First, what did you learn from this?\" ||";
yes_options[69] = "SUBMIT";
no_options[69] = "RESIST";
horror_info[69] = new horror(false,false,false,70,70,false,false);
horror_sound_action[69] = new action_sound(s_victory,s_victory);
horror_sound_scary[69] = new scary_sound(s_nosound,-1);
horror_sound_death[69] = new scary_sound(s_nosound,-1);

// Congratulate the winner, show them the score, then restart game
//instructionArray[70] = "You're so awesome!  Now what do you want to do?";
yes_options[70] = "RESTART FROM BEGINNING";
no_options[70] = "RESTART FROM BEGINNING (IS THERE A CHOICE?)";
horror_info[70] = new horror(false, false, false, 0, 0, false, false);
horror_sound_action[70] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[70] = new scary_sound(s_nosound,-1);
horror_sound_death[70] = new scary_sound(s_nosound,-1);

// These settings fire off when time to make a choice expires.
horror_sound_action[71] = new action_sound(s_nosound,s_nosound);
horror_sound_scary[71] = new scary_sound(s_nosound,-1);
horror_sound_death[71] = new scary_sound(s_nosound,-1);
failArray[48] = "You didn't make a decision in time and this is the end of your story.";

} // initialize_choice_arrays() 

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

// Keep track of story cursor so we can unwind the game state when user presses BACK button,
// or so we can go forward in the game when user presses REVEAL button.
function push_story_cursor (story_cursor) {
    console.log("push story cursor: " + story_cursor);
    gameStack.push(story_cursor);
    console.log("gameStack: " + gameStack);
}

// Get the last story cursor when pressing the BACK button, 
// or get current story cursor when user presses REVEAL button.
function pop_story_cursor () {
    var story_cursor = gameStack.pop();
    console.log("pop story cursor: " + story_cursor);
    console.log("gameStack: " + gameStack);
    return story_cursor;
}

// clear the game stack, end result is game stack will be empty
// this is called, for example, when someone wants to restart
// game from the beginning.
function clear_game_stack () {
    var game_cursor = pop_story_cursor();
    while (game_cursor > 0) {
        game_cursor = pop_story_cursor();
    }
}

function random_type (chara) {
    var rando_value = 0;
    sine_wave++;
    if (sine_wave = 101) {sine_wave = 1;}
    if (chara === '.' || chara === '?' || chara === '!') {
        rando_value = (Math.random() * 20) + (Math.sin(sine_wave) * 60) + 32;
    }
    else {
        rando_value = (Math.random() * 10) + (Math.sin(sine_wave) * 20) + 21;
    }
    return rando_value;
}

//function dramatic_parse(instruction_set, callback)
/*
    the dramatic parse will separate text blocks in instructions and fail messages and split them into an array of sentences.
    iterating through the sentence list it will call a spooky_type chain to print the sentences.

    (thought: if # of sentences % 2 or 3 == 0 then remerge sentences into sets of two or three.)
*/
function dramatic_parse (is_death,sound_index,sentence, callback) {
    startScrollPageDownLoop();
    //console.log("dramatic parsing");
    clear_callback = function clear_callback() { callback() };
    $("#instructions").empty();
    window.setTimeout(function(){skippable = true;}, 500);

    // type_speed = 60;
    // users recommended we make the type speed faster.
    type_speed = 30;

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
                //console.log("timeout function will be executed at " + keep_iter);
                //console.log("text timer pushed. text timer array length: " + text_timer.length);
                //the next lines are the function handed to timeout
                //we must use keep_iter within the timeout, rather than iterate
                //this is because we have already iterated iterate and we need a method
                //that will let us go through the array again
                //at the end of our timeout events. keep iter is incremented;
                //this allows us to type the characters in order

                if ((keep_iter == when_to_play) && (has_dramatic_sound)) {
                    play_sound(sound_to_play);
                }

                //this check will tell the program to use pipes as a marker for a newline.
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

//function dead_dead()
/*
    makes the buttons regarding death appear
*/
function dead_dead (death_cursor,origin) {
    var done_check = 0;
    var next_cursor = death_cursor;
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
    $('#buttonBack').hide();
    $("#buttonYes").hide();
    skippable = true;
    clickable = true;
    skip_text = false;
    dramatic_parse(true,origin,failArray[death_cursor]+"||Do you want to play again?",function() {
        // I want to set the text of the Yes and No buttons to the text below, but it doesn't work right yet.
        // $('.yesDead').val("GO BACK TO CHECKPOINT");
        // $('.noDead').val("RESTART FROM BEGINNING");
        $(".yesDead").one("click", function () {
            $('#buttonYes').hide();
            $("#instructions").empty();
            story_mode(localStorage.getItem('save_point'));
        });
        $(".noDead").one("click", function () {
            $('#buttonYes').hide();
            dramatic_parse(false,-1,"Wise choice. Come back if you change your mind...|||      ", function() {
                total_deaths = 0;
                total_correct_choices = 0;
                clear_game_stack();
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
                //naming();
                window.location = "index.html";
            });
        });
        // Scream at user when they die.  Wait until death spooky parse finished.
        document.getElementById('scream').play();
        $('#buttonYes').delay(delay_value).fadeIn();
    });
}

// coffin_game: recursive function that plays the coffin game step by step.
// input variable which_step will be in range[0..3]
// if invalid value is entered, an error message will be printed and the
// function will be recursively called.  The extra call is harmless because
// the stack will unwind when done.
// To win the coffin game, the user must select coffins 3, then 17, then 5, in that order.
function coffin_game (which_step) {
    var next_cursor = null;
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
                    dramatic_parse(false,-1,"You already opened that coffin...  ", function () {
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
                    dramatic_parse(false,-1,"You already opened that coffin...  ", function () {
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

//function show_buttons(yes,no)
/*
    make the buttons appear with the proper text
*/
function show_buttons (story_cursor) {
    var yes = yes_options[story_cursor];
    var no = no_options[story_cursor];
    var yes_fail = horror_info[story_cursor].failYes;
    var no_fail = horror_info[story_cursor].failNo;
    var next_cursor = story_cursor;
    
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
    } else if (yes_fail) {
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
    } else if (no_fail) {
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

// you won the game, so show the game result, 
// then reinitialize counters and get ready to restart game from the beginning.
function end_game_winner (story_cursor) {
    show_game_performance();
    // reinitialize choices and deaths counters for next game
    total_correct_choices = 0;
    total_deaths = 0;
    clear_game_stack();
    push_story_cursor(0);
    show_buttons(story_cursor); 
}

// Start a timer that triggers death if you wait too long to decide!
function startTimer (duration, clock) {
    var countdown = setInterval(function seconds() {
        clock.text("Time is running out!\n " +duration);
        if (--duration < 0) {
            clearInterval(countdown);
            clock.text("");
            dead_dead(48,71);
        } else {
            $("#yes, #no").click(function () {
                clearInterval(countdown);
                clock.text("");
            });
        }
        return seconds;
    }(), 1000);
}

// user picks either Reveal or Back button
// return the next story cursor depending on user's choice.
function show_reveal_and_back_buttons (story_cursor) {
    $('#buttonReveal').delay(delay_value).fadeIn();
    // Don't let user go back if we're at first item in story.
    if (story_cursor > 0) {
        $('#buttonBack').delay(delay_value).fadeIn();
    }
}

// Do the story at the current step.
function story_mode (story_cursor) {
    // Save the current cursor on the game stack. 
    // That way we'll know where we are in the state machine
    // when someone clicks on the REVEAL or BACK button.
    push_story_cursor(story_cursor);
    
    // If we're at a checkpoint, save the checkpoint to local storage.
    // Then if someone Continues the game, it will start from here 
    // instead of from the beginning.
    if (horror_info[story_cursor].savePoint == true) {
        localStorage.setItem('save_point', story_cursor);
    }
    console.log("story mode: " + story_cursor);
    $("#instructions").empty();
    $("#instructions2").empty();
    $("#story").empty();
    $("#textInput").hide();
    $('#buttonReveal').hide();
    $('#buttonBack').hide();
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
    // Print the story to the screen dramatically.
    dramatic_parse(false,story_cursor,instructionArray[story_cursor],function() {
        single_callback = false;
        // At the end of the dramatic printing, 
        // which could be short-circuited if mouse clicked or key pressed,
        // show the REVEAL and BACK buttons so user can make a choice.
		$("#instructions2").html("WHAT DO YOU DO?");
        show_reveal_and_back_buttons(story_cursor);
    });
}

// This function should only be called externally from LiveProject.html 
// when the BACK button is pressed. Do not call this function internally.
// Note: The BACK button should NEVER be allowed to be pressed if story
// cursor is 0.
function back_button_pressed () {
    // get the current story cursor
    var game_cursor = pop_story_cursor();
    if (game_cursor == null) {
        game_cursor = 0;
    }
    console.log("back button was pressed");
    startScrollPageDownLoop;
    $("#buttonReveal").hide();
    $("#buttonBack").hide();
    endScrollPageDownLoop;
    var prev_cursor = pop_story_cursor();
    if (prev_cursor == null) {
        prev_cursor = 0;
    }
    console.log("prev cursor: " + prev_cursor);
    story_mode(prev_cursor);
}

// This function should only be called externally from LiveProject.html 
// when the REVEAL button is pressed. Do not call this function internally.
function reveal_button_pressed () {
    // Get the current story cursor.
    // We don't know it until we pop it off the game stack.
    var game_cursor = pop_story_cursor();
    if (game_cursor == null) {
        game_cursor = 0;
    }
    console.log("reveal button clicked");
    startScrollPageDownLoop;
    $("#buttonReveal").hide();
    $("#buttonBack").hide();
    
    // Put the current story cursor back on the game stack.
    push_story_cursor(game_cursor);
    show_buttons(game_cursor);
    clock = $("#time");
    startTimer(8,clock);
    endScrollPageDownLoop;
}

// Display the rest of the text when user shows impatience 
// by clicking mouse or pressing a key.
function impatience () {
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
            // console.log("current sentence: " + current_sentence);
            // console.log("new sentence: " + new_sentence);

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

function introduction (name) {
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
    // this needs to match function story_mode()!!
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

        dramatic_parse(false,-1,"Your name is " +name+ ". The choices you make will determine whether you live or die. \nDo you dare to start this horrific journey?",function() {
            single_callback = false;
            $("#buttonYes").delay(240).fadeIn();
            $("#textInput").hide();
            $(".yes1").one( "click", function() {
                $("#buttonYes").hide();
                $("#instructions").empty();
                $("#instructions2").empty();
                single_callback = false;
                story_mode(0);
            });
            $(".no1").one( "click", function() {
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
            });
        });
    }
}

function naming () {
    // Delay 2.2 seconds for dramatic typing of "What is my name?" 
    // before showing text box and button.
    $("#button").hide();
    $("#button").delay(2200).fadeIn();
    $("#textInput").hide();
    $("#textInput").delay(2200).fadeIn();
    
    $('.yes1').off();    
    $('.no1').off();
    $("#button").off();
    $("#instructions").empty();

    // for being able to press [enter] key to submit
    var go = document.getElementById("button");
    var txt = document.getElementById("myText");
    txt.addEventListener("keypress", function() {
        if (event.keyCode == 13) go.click();
    });
    $("#myText").val("");

    //console.log("starting first print out");
    dramatic_parse(false,-1,"                                What is your name?",function() {
        $("#button").one("click",function() {
            name = document.getElementById("myText").value;
            name = name.trim();
            name = name[0].toUpperCase() + name.slice(1);
        
            localStorage.setItem('name', name);			
            if ( name !== "" ) {
                $("#instructions").empty();
                $("#myText").val("");
                $('#textInput').val('');
                $("#textInput").hide();
                $("#instructions2").empty();
                dramatic_parse(false,-1,"                 Is " +name+ " your correct name?",function() {
                    $(".yes1").one( "click", function() {
                        $("#buttonYes").hide();
                        $("#instructions").empty();
                        $("#instructions2").empty();
                        localStorage.setItem('name', name);
                        $("#instructions").css("text-align", "left");
                        introduction(name);
                    });
                    $(".no1").one( "click", function() {
                        $("#buttonYes").hide();
                        $("#instructions").empty();
                        $("#instructions2").empty();
                        naming();
                    });
                    $("#buttonYes").delay(30).fadeIn();
                });
            } else {
                $("#instructions").empty();
                $("#instructions2").empty();
                $("#myText").val("");
                $('#textInput').val('');
                $("#instructions2").append("                 Please type in your name.");
                naming();
            }
        });
    });
}

//function start_game()
/* this function will determine start of game behavior
*/
function start_game() {
    var myName = localStorage.getItem('name');
    if (myName !== null && myName !== "" && myName !== undefined) {
        name = myName;
    } else {
        name = "";
    }
    console.log(myName);
    $("#buttonOptions").hide();
    $("#buttonReveal").hide();
    $("#buttonBack").hide();
    $("#buttonYes").hide();
    $("#coffins").hide();
    $("#intro").append("Text-Based Horror");
    $("input:text:visible:first").focus();
    if (name !== "") {
        introduction(name);
    } else {
        naming();
    }
}

//this function pair is from the original game; makes lightning flash and creates the creepy laugh after the user has clicked
function timerIncrement() {
    idleTime = idleTime +1;
    if (idleTime > 0) {
        document.getElementById('thunder').play();
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},0);
        setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},100);
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},200);
        setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},300);
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},400);
    }
}

$(document).ready(function() {
    document.addEventListener("keydown", function(event) {
        if (skippable) {impatience();}
    });
    document.addEventListener("click", function(event) {
        if (skippable) {impatience();}
    });

    var interval = setInterval(timerIncrement, 5000);
    start_game();
});
