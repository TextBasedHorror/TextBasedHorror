var idleTime = 0;
$(document).ready(function(){
    var interval = setInterval(timerIncrement, 60000);

    $(this).mousedown(function(e){
        idleTime = 0;
    });
});

function timerIncrement(){
    idleTime = idleTime +1;
    if (idleTime > 5) {
        document.getElementById('laugh').play();
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},0);
        setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},100);
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},200);
        setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},300);
        setTimeout(function(){document.body.style.backgroundColor = '#000000'},400);
    }
}

$(document).ready(function() {
    localStorage.getItem('num');
    var scrollDownPageLoop;
    var funcArray = new Array();
    funcArray[0] = firstchoice;
    funcArray[1] = firstfirstchoice;
    funcArray[2] = thirdchoice;
    funcArray[3] = thirdthirdchoice;
    funcArray[4] = fourthchoice;
    funcArray[5] = fourthfourthchoice;
    funcArray[6] = fifthchoice;
    funcArray[7] = fifthfifthchoice;
    funcArray[8] = sixthchoice;
    funcArray[9] = seventhchoice;
    funcArray[10] = eigthchoice;
    funcArray[11] = eigtheigthchoice;
    funcArray[12] = eigtheigtheigtheigthchoice;
    funcArray[13] = eigtheigtheigthchoice;
    funcArray[14] = ninthchoice;
    funcArray[15] = ninthninthchoice;
    funcArray[16] = tenthchoice;
    funcArray[17] = tenthtenthchoice;
    funcArray[18] = eleventhchoice;
    funcArray[19] = twelfthchoice;
    funcArray[20] = twelftwelfchoice;
    funcArray[21] = thirteenthchoice;
    funcArray[22] = thirteenththirteenthchoice;
    funcArray[23] = thirteenonechoice;
    funcArray[24] = thirteentwochoice;
    funcArray[25] = thirteenthreechoice;
    funcArray[26] = thirteenththirteenththirteenthchoice;
    funcArray[27] = fourteenthchoice;
    funcArray[28] = firstfifteenthchoice;
    funcArray[29] = fifteenthchoice;
    funcArray[30] = sixteenthchoice;
    funcArray[31] = seventeenthchoice;
    funcArray[32] = seventeenthseventeenthchoice;
    funcArray[33] = eighteenthchoice;
    funcArray[34] = nineteenthchoice;
    funcArray[35] = twentychoice;
    funcArray[36] = twentytwentychoice;
    funcArray[37] = twentyonechoice;
    funcArray[38] = twentyoneonechoice;
    funcArray[39] = twentytwochoice;
    funcArray[40] = coffin;
    funcArray[41] = coffinone;
    funcArray[42] = coffintwo;
    funcArray[43] = coffinthree;
    funcArray[44] = downstairsone;
    funcArray[45] = downstairsoneone;
    funcArray[46] = downstairstwo;
    funcArray[47] = downstairsthree;
    funcArray[48] = downstairsfour;
    funcArray[49] = downstairsfourfour;
    funcArray[50] = downstairsfourfourfour;
    funcArray[51] = rightdoor;
    funcArray[52] = downstairsfive;
    funcArray[53] = downstairsfivefive;
    funcArray[54] = downstairssix;
    funcArray[55] = downstairssixsix;
    funcArray[56] = downstairsseven;
    funcArray[57] = endone;
    funcArray[58] = endtwo;
    funcArray[59] = final;
    funcArray[60] = finaltwo;




    $(function() {

            var choice = 0;
            start();
        });

    function start(){
        var myName = localStorage.getItem('name');
        if (myName !== null && myName !== "" && myName !== undefined) {
            var name = myName;
        }
        else{
            var name = "";
        }
            console.log(myName);
        $("#buttonOptions").hide();
		$("#buttonReveal").hide();
        $("#buttonYes").hide();
        $("#coffins").hide();
        $("#intro").append("TEXT-BASED HORROR");
        $("input:text:visible:first").focus();
        if (name !== "") {
            namingnaming(name);
        }else{
            naming();
        }
    }

    function naming(){
        $("#textInput").show();
        $('.yes1').off();
        $('.no1').off();
        $('.yes1').on();
        $('.no1').on();
        $("#button").off();
        $("#button").on();
        $("#instructions").empty();
        addToInstructions("^750</br>What is my name?");
        $("#button").one("click",function(){
            name = document.getElementById("myText").value;
            localStorage.setItem('name', name);
            if ( name !== "" ) {
                    $("#instructions").empty();
                addToInstructions("Is " +name+" my correct name?");
                    $('#textInput').val('');
                    $("#textInput").hide();
                    $("#buttonYes").delay(4000).fadeIn();
                    $("#instructions2").empty();

            }
            else  {
                $("#instructions").empty();
                $("#instructions2").empty();
                $('#textInput').val('');
                $("#instructions2").append("<br>Please type in my name.");
                naming();
            }
            $(".yes1").one( "click", function(){
                    namingnaming(name);
                });
            $(".no1").one( "click", function(){
                    naming();
                });
        });

		$("#myText").keypress(function(e){
			if(e.which == 13){
				$("#button").click();
			}
		});
    }



             function addToInstructions(newInstruction, callback) {
       $("#buttonOptions").hide();
       startScrollPageDownLoop();
       $('<p></p>').appendTo($("#instructions")).typed({ strings : [filter_text_options_out(newInstruction)], typeSpeed : 50, startDelay: 2000, callback : function() {
           endScrollPageDownLoop();
           callback && callback();
           options(newInstruction)
       }});
   }

	function options(input){
	//adds options to buttons
    	var option_one_start = false;
    	var option_two_start = false;
    	var opt1 = "";
    	var opt2 = "";

    	for (var i = 0, len = input.length; i < len; i++)
        {

        if (input.charAt(i) === ":")
        {
            option_one_start = true;
        }
        if (option_one_start === true && option_two_start === false )
        {
            if (input.charAt(i) === "<")
            {
                option_two_start = true;
                option_one_start = false;
		opt1 = opt1.replace(": ", "").replace("<", "");
                $("#yes").html(opt1);

            }

            opt1 += input.charAt(i);

        }


        if (option_one_start === true && option_two_start === true)
        {
            if (input.charAt(i) === "<")
            {
                option_two_start = false;
                option_one_start = false;
		opt2 = opt2.replace(": ", "").replace("<", "");
                $("#no").html(opt2);

            }
            opt2 += input.charAt(i);

        }
    }


}

     function filter_text_options_out(input){
		//filters options out of text
	   var input2 = reverse(input);
       var arrow = 0;
       var save = false;
	   var save2 = false;
	   var string = "";
	   for (var i = 0, len = input2.length; i < len; i++)
        {

			if (input2.charAt(i) === "<" && i < 155)
            {

				arrow = arrow + 1;

            }

			if (input2.charAt(i) === ":")
            {

				save2 = true;

            }

			if (arrow === 4 && i < 155)
            {
                save = true;
            }
			if (save === true)
            {
                string = string + input2.charAt(i);
            }
			if(i === len - 1 && save === true && save2 === true)
            {

                return reverse(string.replace("<", "").replace("", "").replace("/", "").replace(">rb<", "").replace("^", "").replace("0001", "").replace("&", ""));
            }
            else if(i === len - 1 && save2 === false)
            {
                return reverse(input2);
            }
		}
}

	function reverse(s) {
	//reverses order of strings. i needed it for my filter_text_options_out(input) function
  var o = '';

  for (var i = s.length - 1; i >= 0; i--)

    o += s[i];

  return o;

}




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

// I rewrote revealOptions to use an optional parameter and changed all calls to
// delayOptions to this new version of revealOptions (there are only 3).
// Probably check that this still does what you want it to before deleting
// delayOptions completely.

   function revealOptions(progress, delayTime = 500) {
       window.setTimeout(function () {
           $('#buttonReveal').show();
       }, delayTime);
       $('#buttonReveal').one('click', function () {
			startScrollPageDownLoop;
			$("#buttonReveal").hide();
			$('#buttonOptions').show();
			var sevenSeconds = 7;
			clock = $("#time");
			startTimer(sevenSeconds, clock, progress);
			endScrollPageDownLoop;
       });
   }

  //  function delayOptions(progress, delayTime) {
  //      window.setTimeout(function () {
  //          $('#buttonReveal').show();
  //      }, delayTime);
  //      $('#buttonReveal').one('click', function () {
  //           startScrollPageDownLoop;
  //           $("#buttonReveal").hide();
  //           $('#buttonOptions').show();
  //           var sevenSeconds = 7;
  //           clock = $("#time");
  //           startTimer(sevenSeconds, clock, progress);
  //           endScrollPageDownLoop;
  //      });
  //  }

	function startTimer(duration, clock, progress){
		var countdown = setInterval(function seconds(){
			clock.text("Time is running out! " +duration);
			if (--duration < 0){
				clearInterval(countdown);
				clock.text("");
				deadanddead("I couldn't make a decision in time and this is the end of my story.", progress)
			} else {
				$("#yes, #no").click(function(){
					clearInterval(countdown);
					clock.text("");
				});
			}
			return seconds;
		}(), 1000);
	}

    function namingnaming(name){
        $("#buttonYes").hide();
        $("#textInput").hide();
        var progress = localStorage.getItem('num');
        var instruct = localStorage.getItem('instruction');
        console.log(progress);
        console.log(instruct);
        if (progress != null && instruct != null) {
            addToInstructions(instruct, funcArray[progress]());
        }else{
            $("#buttonYes").delay(10000).fadeIn();
            $("#instructions2").empty();
            $("#story").typed({strings: ["My name is " +name+".</br>The choices I make determine whether I live or die.</br>This is my story.<hr>"], typeSpeed: 15
            });
            $("#instructions").empty();
            $("#story").empty();
            play();
        }

    }

    function play(){
        $("#textInput").hide();
        $('.yes2').off();
        $('.no2').off();
        $('.yes2').on();
        $('.no2').on();
        addToInstructions("^3500Do you dare start this horrific journey? ");

        $(".yes2").one( "click", function(){
            $("<p></p>").appendTo($("#story")).typed({ strings: ["Good luck!  You were warned..."], typeSpeed: 20
            });
            $("#instructions").empty();
            intro();
        });

        $(".no2").one( "click", function(){
            $("#textInput").hide();
            $("#buttonOptions").hide();
            $("#buttonYes").hide();
            $("#story").empty();
            $("#instructions").empty();
            addToInstructions("Wise choice.  Come back if you change your mind...", function() {
            $('.no2').off();
            return;
            });
        });
    }

    function intro(){
            $("#instructions").empty();
            $("#story").empty();
            $("#buttonYes").hide();
            $("#buttonOptions").hide();

            instruct = "^2500I awoke. Dizzied and surrounded by dark. My head was spinning and there was a </br>sharp pain in the upper right side of my skull.  What am I doing here? \"Where is here?\" </br>I thought. First things first, orient myself. </br>I couldn't remember what had happened prior to my unconsciousness. I stood up and looked ahead. </br>There was a vague outline of a path that appeared to lead up to a house. I could barely make out an old mansion. </br>I looked behind myself and saw nothing but black. I heard what sounded like footsteps walking toward me from the rear.";
            localStorage.setItem('instruction', instruct);
            addToInstructions(instruct, function() { firstchoice(); });

    }


    function buttonReset() {
        $('.yes3').off();
        $('.no3').off();
        $('.yes3').on();
        $('.no3').on();
        $('#buttonYes').hide();
    }

    function firstchoice() {
        buttonReset();

        if (localStorage.getItem('num') == '0') {
            revealOptions(firstchoice, 45000);
        } else{
            revealOptions(firstchoice);
        }
        localStorage.setItem('num', '0');


        addToInstructions("^1000<br>WHAT DID I DO?</br> Option 1: INVESTIGATE THE FOOTSTEPS</br>Option 2: WALK TOWARD THE HOUSE </br>  ");

        $(".yes3").one( "click", function(){
			$('#buttonReveal').hide();
            msg = "I turned around and walked away from the house. A large figure walked toward me on the path. In its hand I saw what appeared to be an ax. \"Hello?\" I ventured. No response, just a quickened pace. Its arm lifted the weapon high into the air. I turned to run but I was too late. The ax brutally removed my head from its shoulders and this is the end of my story.";
            deadanddead(msg, firstchoice);
        });

        $(".no3").one( "click", function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();

            instruct = "I made my way up to the house. It appeared to be old and in need of repairs. Regardless, it held a certain beauty.</br>There looked to be about four stories, each floor big enough to contain a large family. Something gleamed to my left on the path. I looked over and saw a hatchet.";
            localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function(){
                firstfirstchoice();
            });
        });
    }

    function firstfirstchoice(){
        buttonReset();

        if (localStorage.getItem('num') == '1') {
            revealOptions(firstfirstchoice, 24000);
        } else{
            revealOptions(firstfirstchoice);
        }

        localStorage.setItem('num', '1');
        addToInstructions("<br>WHAT DID I DO?</br>Option 1: LEAVE THE HATCHET</br>Option 2: PICK UP THE HATCHET</br> ");
        $(".yes4").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
			addToInstructions("</br>I left the hatchet and continued on toward the house.</br>As I climbed the porch, the planks protested my presence through sharp whining. I reached for the door and heard rustling behind me. I swiveled my head and saw a dark figure hulking toward me. I couldn't make out its eyes but noticed an ax in its hand. I said, \"Hello?\"... No response. It then swung an ax in my direction and growled. I was in danger.", function() {
				secondchoice();
			});
		});

            $(".no4").one("click",function(){
				$('#buttonReveal').hide();
				$('#buttonOptions').hide();

                instruct = "<br>I picked the hatchet up and continued on toward the house. As I climbed the porch, the planks protested my presence through sharp whining. I reached for the door and heard rustling behind me. I swiveled my head and saw a dark figure hulking toward me. I couldn't make out its eyes but noticed an ax in its hand. I said, \"Hello?\"... No response. It then swung an ax in my direction and growled. I knew at this point I was in danger.";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    thirdchoice();
                });
            });
    }

    function secondchoice(){
        buttonReset();

		revealOptions(secondchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: ATTACK</br>Option 2: RUN</br> ");
        $(".yes5").one("click",function(){
			$('#buttonReveal').hide();
			msg="I ran at it, swinging my fists. It stopped me with ease through use of a sharpened ax. The last thing I saw was red on silver. And this is the end of my story.";
			deadanddead(msg,firstfirstchoice);
		});

         $(".no5").one("click",function(){
			$('#buttonReveal').hide();
			msg="I attempted to run and heard a whoosh. The ax tore through the upper section of my spine. I could feel my shoulder blades separating. And this is the end of my story...";
			deadanddead(msg,firstfirstchoice);
		});
	}


    function thirdchoice(){
        buttonReset();

		if (localStorage.getItem('num') == '2') {
            revealOptions(thirdchoice, 24000);
        }else{
            revealOptions(thirdchoice);
        }

        localStorage.setItem('num', '2');

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: ATTACK</br>Option 2: RUN</br> ");
        $(".yes6").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '3');
            instruct = "<br>I ran at it, it swung an ax and I ducked. I swung my hatchet into its throat. It let out a yowl and fell in a heap. It had ceased breathing and I picked up the ax.";
			localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function(){
				thirdthirdchoice();
			});
		});
         $(".no6").one("click",function(){
			 $('#buttonReveal').hide();
			deadanddead("<br>I attempted to run and heard a whoosh. The ax tore through the upper section of my spine. I could feel my shoulder blades separating. And this is the end of my story...", thirdchoice);
		});
    }


    function thirdthirdchoice() {
        buttonReset();

		revealOptions(thirdthirdchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: HEAD TOWARD THE HOUSE</br>Option 2: EXAMINE THE BODY</br> ");
        $(".yes7").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '4');
            instruct = 'As I made my way back to the porch, I wondered why I was attacked and I was thankful for having a weapon. "Why was he trying to kill me?" I wondered.<br>I reached the porch. I tried to open the front door but the door was locked. If I had tried running from my attacker earlier, I would have been met with a latched door. There was a window on the right and one on the left. I could hear more rustling in the distance.';
			localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function(){
			fourthchoice();
			});
		});
            $(".no7").one("click",function() {
				$('#buttonReveal').hide();
				$('#buttonOptions').hide();
                localStorage.setItem('num', '4');
                instruct = 'I turned the face to view it. It was a man. He appeared dirty and unshaven. In his pocket, I found a picture...<br>The picture was of me! Underneath the photo was the word "KILL". "Well, that explains the ax," I muttered.<br>I made my way back to the porch, thankful I had weapons.<br>I reached the porch. I tried to open the front door but the door was locked. If I had tried running from my attacker earlier, I would have been met with a latched door. There was a window on the right and one on the left. I could hear more rustling in the distance.';
				localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
					fourthchoice();
				});
			});
    }

    function fourthchoice() {
        buttonReset();

		revealOptions(fourthchoice);
        addToInstructions("<br><br>WHAT DID I DO?<br>Option 1: OPEN A WINDOW<br>Option 2: STAY OUTSIDE THE HOUSE<br>");
        $(".yes8").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '5');
            instruct = "<br>There are two windows. Which window did I open?";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
				fourthfourthchoice();
			});
		});
            $(".no8").one("click",function() {
				$('#buttonReveal').hide();
                deadanddead("<br>I stood on the porch with an ax and a hatchet.<br>A couple minutes passed and several large men with weapons of various assortments arrived at the porch.<br>I attempted to fight them off, regretting not having climbed through a window, but there were too many.<br>I couldn't tell you if it was blades or bludgeoning that killed me but this is the end of my story.", fourthchoice);
            });
    }

    function fourthfourthchoice(){
        buttonReset();

		revealOptions(fourthfourthchoice);

        addToInstructions("<br>Option 1: OPEN THE LEFT WINDOW</br></br>Option 2: OPEN THE RIGHT WINDOW</br> ");
        $(".yes9").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '6');
            instruct = "<p>I messed around with the window and it opened with no resistance. I climbed inside and shut the window behind me. For good measure, I locked both windows. I took a moment and viewed the room I was in. It was a large hall. Suddenly a memory flashed... I am an investigator. I was on a major case. What was that case about...? Bang! A loud noise from the next room over. Two doors. One door leading to the noise and another door leading away from it.</p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        fifthchoice();
                    });
                });
        $(".no9").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '6');
            instruct = "<p>I messed around with the window and it opened with no resistance. I climbed inside and shut the window behind me. For good measure, I locked both windows. I took a moment and viewed the room I was in. It was a large hall. Suddenly a memory flashed... I am an investigator. I was on a major case. What was that case about...? Bang! A loud noise from the next room over. Two doors. One door leading to the noise and another door leading away from it.</p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        fifthchoice();
                    });
                });
    }


    function fifthchoice() {
        buttonReset();


		revealOptions(fifthchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: OPEN THE DOOR LEADING TOWARD THE NOISE<br>Option 2: GO THROUGH THE DOOR LEADING AWAY FROM THE NOISE<br> ");
        $(".yes10").one("click",function() {
			$('#buttonReveal').hide();
            deadanddead("<br><br>I bravely opened the door that led to the noise. The mystery was instantly solved. There stood a man with a large shotgun in his hands. He wasted no time in taking aim at my body. Not that aim mattered with a gun like that. I quickly threw my hatchet at him. He moved to the left but my hatchet cut his thigh. It delayed the shooter slightly but didn't stop him. The shot tore through my midsection and this is the end of my story.", fifthchoice);
            });
        $(".no10").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '7');
            instruct = "I scrambled away from the banging sound coming from the other door behind me. I passed through door in front of me and found myself in a large dining room. There were lit candles on a long dark wooden table. The table was set but no food was present. I knew I had to leave this room because it was apparent someone had recently been here. There was a closet and other random furniture and items in the room. I then heard footsteps coming toward the door I had just entered through. There was a clicking sound which I likened to a shotgun being loaded.<br>";
            localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function(){
                fifthfifthchoice();
            });
        });
    }

    function fifthfifthchoice() {
        buttonReset();


		revealOptions(fifthfifthchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: HIDE UNDER THE TABLE<br>Option 2: HIDE IN THE CLOSET<br> ");
        $(".yes11").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '8');
                sixthchoice();
            });
        $(".no11").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '8');
                sixthchoice();
            });
        }

    function sixthchoice(){
        buttonReset();


		revealOptions(sixthchoice);

        addToInstructions("I hid and a man entered the room. He had a white shirt on with red stains. He wore a torn sack on his head and carried a double barreled shotgun. I held my breath. Lucky for me the man quickly stepped through the kitchen. He knocked over some chairs and arrived at a staircase and a door. He chose the door and exited the room. I waited until I no longer heard him. \"I need a gun\" I thought.</br>WHAT DID I DO?</br>Option 1: GO UP THE STAIRS</br>Option 2: FOLLOW THE MAN WITH THE SHOTGUN</br> ");
        $(".yes12").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '9');
            instruct = "I made my way up the staircase to what appeared to be the second floor of the house. There was a long hallway ahead of me. There was a table with a lit candle on it. I saw what looked to be a folder. There was a single sheet of lined paper on it. A scrawled quote was written, \"Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.\" -Sigmund Freud \"Well that\'\'s a load of crap\" I thought to myself. I paused and contemplated my current situation. I had a fleeting thought, \"Maybe I should just burn this house down...\"";
            localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function(){
                seventhchoice();
            });
        });
        $(".no12").one("click",function() {
			$('#buttonReveal').hide();
            msg="I opened the door. Despite my attempts to be quiet, it creaked loudly. I heard shouting and heavy footsteps. The man with the shotgun appeared and before I could defend myself, he blew my head off with a hail of bullets. And this is the end of my story.";
            deadanddead(msg,sixthchoice);
        });
    }

    function seventhchoice() {
        buttonReset();


		revealOptions(seventhchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: USE THE CANDLE TO START A FIRE<br>Option 2: KEEP EXPLORING THE HALLWAY<br> ", function(){
        });
        $(".yes13").one("click",function() {
			$('#buttonReveal').hide();
                deadanddead("<br>I lit the paper on fire and threw it on the floor. I then used the candle to light the wallpaper on fire. <br>It was peeling and dry and made for highly flammable material. The house began to burn. I made my way away from the fire and hit a locked door at the end of the hallway. <br> I turned back to pass through the fire but it was too large. I was trapped. I tried to run through the fire but it burned me.<br>I ran back to the door and tried to kick it in, to no avail. There was no escaping. My choice ended with my body being burnt alive. <br>A terrible, overly long experience of the most unimaginable pain. And this is the end of my story.", seventhchoice);
            });
        $(".no13").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '10');
            instruct = '"Yeah, I shouldn\'t start a fire", I thought as I walked forward. First I heard a lock click at the end of the hallway and then I heard a shrill scream. It sounded like a woman yelling from behind the door. "Help!! He\'s going to kill me!"';
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    eigthchoice();
                });
            });
    }

    function eigthchoice(){
        buttonReset();


        $('.yes14').off();
        $('.no14').off();
		revealOptions(eigthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: RESCUE THE WOMAN</br>Option 2: LEAVE HER</br>");
        $(".yes14").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '11');
            instruct = "<p>I boldly opened the door. I saw a woman. There was a man with a sledge hammer walking toward her aggressively. The woman had blonde hair and her face had some blood on it. She was my age and looked terrified. \"Hey!\" I yelled at the man, \"Leave her alone!\" The man was in stained overalls and had no shoes on. He turned his attention to me and headed my way. I gripped my ax and hatchet tightly in each hand. The man swung his sledgehammer at me, I quickly ducked and swung my ax deep into his chin. The man grunted and fell to the ground.</p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                    eigtheigthchoice();
                    });
                });
        $(".no14").one("click",function() {
			$('#buttonReveal').hide();
                    msg = "I turned around and ran away from her voice. I heard a crushing sound accompanied with a final scream, followed by silence. I continued running, I reached the stairs, headed down and hit the dining room. I was met with five people in red, priest-like robes. I stopped short. They were holding swords. I yelled at them \"What the hell is going on here?!\" And I turned around again. I ran straight into a man with no shirt. He was completely bald and holding an ax. I swung at him with my hatchet and he hit my wrist. My hatchet dropped. I raised my ax but wasn\'\'t fast enough. His ax came down right in the top center of my head. And this is the end of my story.";
                    deadanddead(msg,eigthchoice);
                });
        }

    function eigtheigthchoice(){
        buttonReset();


		revealOptions(eigtheigthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: TALK WITH THE WOMAN</br>Option 2: INSPECT THE BODY</br>");
        $(".yes15").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '12');
            instruct = "<p>I asked the woman, \"How did you end up here and what the hell is going on?\" She stared at me, she looked half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'\'t remember how I got here. This place is full of psychotics who seem to want to murder us.\" She said.  \"What\'\'s your name?\" \"My name is "+name+ "</br>\"Hello, "+name+", my name is Jessica.\" She replied.</br>\"I also don\'t know how I ended up here. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on it.\" Jessica responded with, \"We should get out of here together.\"</br>\"Can I trust her?\" I thought to myself.</p>";
            localStorage.setItem('instruction', instruct);
				addToInstructions( instruct, function(){
				eigtheigtheigthchoice();
				});
			});
        $(".no15").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '12');
            instruct = "The woman watched me from the corner of the room. I searched the man's pockets. A picture of me with KILL written on it. I also found prescription psychotropic pills. </br>I asked the woman, \"How did you end up here and what the hell is going on?\" She stared at me, she looked half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'\'t remember how I got here. This place is full of psychotics who seem to want to murder us.\" She said.";
            localStorage.setItem('instruction', instruct);
				addToInstructions( instruct, function(){
				eigtheigtheigtheigthchoice();
				});
			});
        }

    function eigtheigtheigtheigthchoice(){
        buttonReset();


		revealOptions(eigtheigtheigtheigthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: TALK MORE WITH THE WOMAN</br>Option 2: LEAVE THE ROOM</br>");
        $(".yes16").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '13');
            instruct = "<p>\"What\'s your name?\" she asked. \"My name is "+name+". I replied. \"Hello, " +name+ ", my name is Jessica.\" She replied.</br>\"I also don\'t know how I ended up here. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on it.\" Jessica responded with, \"We should get out of here together.\"</br>\"Can I trust her?\" I thought to myself.</p>";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
			eigtheigtheigthchoice();
			});
		});
        $(".no16").one("click",function() {
			$('#buttonReveal').hide();
			msg="I left the woman and re-entered the hallway I had come from. I walked right into a large man. He grinned and then everything went black.The last thing I felt was explosive pain on the top of my head and this is the end of my story.";
			deadanddead(msg,eigtheigtheigtheigthchoice);
		});
        }


    function eigtheigtheigthchoice(){
        buttonReset();


		revealOptions(eigtheigtheigthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: YES, LEAVE WITH THE WOMAN</br>Option 2: NO, LEAVE HER BEHIND</br>");
        $(".yes17").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '14');
            instruct = "<p>\"Okay. I\'ll leave with you. But who are you?\" I asked, \"I don\'\'t know the first thing about you.\" \"I woke up in here. Last thing I remember is being at work and-\" she began.</br>\"Shhhh!\" I snapped. I heard footsteps approaching the door...\'</p>";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
			ninthchoice();
			});
		});
        $(".no17").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '14');
            instruct = "<p>\"No, I\'m heading out alone. You\'\'ll only be a burden.\" I said. The woman glared and said, \"I\'m sorry. But we are not separating. You just saved my life and both of our chances of survival are increased by my coming with you.\" I looked at her, considered arguing but she looked determined. I gave up.</br>\"Okay. I\'ll leave with you. But who are you?\" I asked, \"I don\'t know the first thing about you.\" \"I woke up in here,\" she began. \"The last thing I remember is being at work and-\"</br>\"Shhhh!\" I snapped. I heard footsteps approaching the door...</p>";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
			ninthchoice();
			});
		});
        }

    function ninthchoice(){
        buttonReset();


		revealOptions(ninthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: GIVE JESSICA MY HATCHET</br>Option 2: KEEP BOTH WEAPONS TO MYSELF</br>");
        $(".yes18").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '15');
            instruct = "<p>I threw my hatchet on the floor near Jessica and said, \"Take this.\" A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand. Jessica was near him. He didn\'t notice her.</p>";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
			ninthninthchoice();
			});
		});
        $(".no18").one("click",function() {
			$('#buttonReveal').hide();
			msg="<p>A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand.Jessica was near him. He didn\'t notice her. She jumped on his back. He aimed his gun at me and pulled the trigger. And this is the end of my story.</p>";
			deadanddead(msg,ninthchoice);
		});
    }


    function ninthninthchoice() {
        buttonReset();


		revealOptions(ninthninthchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: DODGE HIM<br>Option 2: ATTACK HIM<br>");
        $(".yes19").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '16');
            instruct = 'I moved backward. He took careful aim at my head and - crunch! Jessica\'s hatchet sunk into the back of his head, killing him instantly. She stared at me for a couple seconds. I walked over and picked up the pistol. I checked it, it was loaded and appeared to hold six bullets. "Well done," I said. "Now let\'s get out of here."';
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    tenthchoice();
                });
            });
        $(".no19").one("click",function() {
			$('#buttonReveal').hide();
                msg = "<p>I ran toward the man. Jessica jumped on his back. He struggled and aimed his gun at me. He pulled the trigger and this is the end of my story.</p>";
                deadanddead(msg, ninthninthchoice);
            });
    }

    function tenthchoice() {
        buttonReset();


		revealOptions(tenthchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: EXPLORE THE BACK OF THE ROOM<br>Option 2: HEAD OUT THE DOOR I CAME IN<br>");
        $(".yes20").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '17');
            instruct = "We headed to the back of the room. Jessica found a flashlight. There was a small doorway. I opened it and saw a staircase leading up. It was dark. I decided to cover our path, so I moved a bookshelf in front of the door. I left enough room for us to squeeze in. I shut the door behind us.";
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    tenthtenthchoice();
                });
            });
        $(".no20").one("click",function() {
			$('#buttonReveal').hide();
                msg = "<p>Jessica and I went out the door. In the hallway was a crowd of men, wearing similar red robes to the man with the pistol. I immediately began firing my pistol but there was a problem; they had guns too. And this is the end of my story.</p>";
                deadanddead(msg, tenthchoice);
            });
        }

    function tenthtenthchoice() {
        buttonReset();


		revealOptions(tenthtenthchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: HEAD UP FIRST<br>Option 2: HAVE JESSICA LEAD<br>Hit 1 or 2");
        $(".yes21").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '18');
            instruct = "We headed up. The stairs creaked. There were spiderwebs and it smelled like rotted wood. Ahead of us there was a skittering sound. Jessica gasped. I put my hand on her mouth and whispered for her to be quiet. Her skin was ice cold. I grabbed the flashlight and told Jessica to stay where she was. I walked ahead and reached the top of the stairs. We were in a library. The books were covered in dust and cobwebs. They appeared to be on a variety of subjects. I looked up and saw large spikes hanging from the ceiling. Very odd. I then panned the flashlight left to right and stopped my flashlight on a body.";
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    eleventhchoice();
                });
            });
        $(".no21").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '18');
            instruct = "We headed up. The stairs creaked. There were spiderwebs and it smelled like rotted wood. Ahead of us there was a skittering sound. Jessica gasped. I put my hand on her mouth and whispered for her to be quiet. Her skin was ice cold. I grabbed the flashlight and told Jessica to stay where she was. I walked ahead and reached the top of the stairs. We were in a library. The books were covered in dust and cobwebs. They appeared to be on a variety of subjects. I looked up and saw large spikes hanging from the ceiling. Very odd. I then panned the flashlight left to right and stopped my flashlight on a body.";
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    eleventhchoice();
                });
            });
        }

    function eleventhchoice() {
        buttonReset();


		revealOptions(eleventhchoice);

        addToInstructions("<br>WHAT DID I DO?<br>Option 1: INSPECT THE BOOKS<br>Option 2: INSPECT THE BODY<br>Hit 1 or 2");
        $(".yes22").one("click",function(){
			$('#buttonReveal').hide();
                msg = "<p>I called Jessica over. We walked over to the books. I picked one up. It was then I realized that the book triggered the spikes. Faster than I could react, the spikes fell from the ceiling. Jessica and I were impaled from above and this is the end of my story.</p>";
                deadanddead(msg, eleventhchoice);
            });
        $(".no22").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '19');
            instruct = 'I called Jessica over. This time she didn\'t gasp. We walked over to the body. It was on a metal table - out of space in the library. The body was a dead man. It appeared the top of his head and shoulders had been impaled. The corpse held a book in its hand - "Boy" by Roald Dahl. Blood dripped from the table onto the floor. There was a bloodied note next to the body.';
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    twelfthchoice();
                });
            });
        }

    function twelfthchoice(){
        buttonReset();


		revealOptions(twelfthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: READ THE NOTE</br>Option 2: INSPECT THE BOOKS</br>");
        $(".yes23").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '20');
            instruct = "<p>The note said \"Death from above - avoid the books\". Something suddenly dropped onto my cheek crom the ceiling. Cold. Wet. It was blood. I looked up, the spikes above the body were red with blood. It appeared that the books triggered the spikes somehow. \"Jessica, we need to leave this library.\" I said. </p>";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
				twelftwelfchoice();
			});
		});
        $(".no23").one("click",function() {
			$('#buttonReveal').hide();
			msg="<p>We walked over to the books. I picked one up. It was then I realized the reason for the spikes. Faster than I could react, the spikes fell from the ceiling. Jessica and I were impaled from above and this is the end of my story.</p>";
			deadanddead(msg,twelfthchoice);
		});
    }

    function twelftwelfchoice(){
        buttonReset();


		revealOptions(twelftwelfchoice);

        addToInstructions("WHAT DID I DO?</br>Option 1: HEAD TOWARD THE UNEXPLORED DOOR</br>Option 2: GO BACK FROM WHER WE CAME</br>");
        $(".yes24").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '21');
            instruct = "<p>We ran toward the doorway on the opposite side of the room from where we came in. There was a crash and footsteps up the stairway we had been on moments before. Hooded men entered the room with weapons leveled.' </p>";
            localStorage.setItem('instruction', instruct);
			addToInstructions( instruct, function(){
				thirteenthchoice();
			});
		});
        $(".no24").one("click",function() {
			$('#buttonReveal').hide();
			msg="<p>We headed back toward the staircase we came in on. We got to the top of the stairs and began walking down. A man burst through the door at the bottom of the staircase and shot at us. I caught three bullets and saw Jessica go down as well. And this is the end of my story.</p>";
			deadanddead(msg,twelftwelfchoice);
		});
    }

    function thirteenthchoice(){
        buttonReset();


		revealOptions(thirteenthchoice);

        addToInstructions("</br>WHAT DID I DO?</br>Option 1: GO FOR THE DOOR</br>Option 2: GRAB A BOOK</br>");
        $(".yes25").one("click",function(){
			$('#buttonReveal').hide();
                    msg="<p>I ran toward the door and was shot in the back. I saw Jessica go down as well. A bullet had torn through her head. I felt an unbearable pain and burning in my lower back. I grabbed a book, the spikes came down. I figured if I was going, I was taking them with me. And this is the end of my story. </p>";
                    deadanddead(msg,thirteenthchoice);
                });
        $(".no25").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '22');
            instruct = "<p>Against my better judgement, I grabbed a book off the shelf and dove toward the door. Jessica was slightly ahead of me. The spikes on the ceiling came down swiftly. There was terrible screaming and then silence. We barely made it out from under the deadly spikes and got through the door. We were alive. I turned back to find the group of men behind us stabbed to death from the spikes. The spikes slowly rose back to the ceiling. And seven dead bodies fell to the floor. A floor saturated with red.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        thirteenththirteenthchoice();
                    });
                });
    }

    function thirteenththirteenthchoice(){
        buttonReset();


		revealOptions(thirteenththirteenthchoice);

        addToInstructions("</br>WHAT DID I DO?</br>Option 1: CHECK OUT THE ROOM</br>Option 2: TALK TO JESSICA</br>");
        $(".yes26").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '23');
            instruct = "<p>I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed a new door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole. </p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        thirteenonechoice();
                    });
                });
        $(".no26").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '23');
            instruct = "\"This is utter madness.\" I said. \"It\'s like we\'re inside an unreal horror movie.\" \"We need to get away - call the police,\" Jessica said. \"Why are these psychotic people trying to kill us?\" I asked. \"And how did you get here?\" Jessica responded, \"I was in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up; I managed my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiled. A smile - shockingly out-of-place in this nightmare.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        thirteentwochoice();
                    });
                });
    }

    function thirteenonechoice(){
        buttonReset();


		revealOptions(thirteenonechoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: OPEN THE DOOR</br>Option 2: TALK TO JESSICA</br>");
        $(".yes27").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '24');
                    thirteenthreechoice();
                });
        $(".no27").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '24');
            instruct = "\"This is utter madness.\" I said. \"It\'s like we\'re inside an unreal horror movie.\" \"We need to get away. Call the police.\" Jessica said. \"Why are these psychotic people trying to kill us?\" I asked. \"How did you get here?\" Jessica responded, \"I was in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up; I managed my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiled. A smile - shockingly out-of-place in this nightmare.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        thirteenthreechoice();
                    });
                });
    }

    function thirteentwochoice(){
        buttonReset();


		revealOptions(thirteentwochoice);

        addToInstructions("</br>WHAT DID I DO?</br>Option 1: SCAN THE ROOM</br>Option 2: SEARCH FOR A DOOR OUT</br>");
        $(".yes28").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '25');
            instruct = "</br>I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed an unventured door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        thirteenthreechoice();
                    });
                });
        $(".no28").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '25');
            instruct = "I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed an unventured door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        thirteenthreechoice();
                    });
                });
    }

    function thirteenthreechoice() {
        localStorage.setItem('num', '26');
        instruct = "<br><br>We entered the door and what I saw shocked me. A brand-new, stainless steel laboratory was in front of us. It was exceptionally bright and vast. I immediately saw a doctor operating on someone. There were two individuals in white surrounding him. Everyone was staring at Jessica and I. And they were smiling. The corners of their mouths were sewn upwards. The stitches held a permanent, forced smile on their cheeks. They also had blood on their hands and the front of their clothes.";
        localStorage.setItem('instruction', instruct);
        addToInstructions( instruct, function(){
            thirteenththirteenththirteenthchoice();
        });
    }

    function thirteenththirteenththirteenthchoice() {
        buttonReset();


		revealOptions(thirteenththirteenththirteenthchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: IGNORE THEM</br>Option 2: TALK WITH THEM</br>");
        $(".yes29").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '27');
            instruct = "<p>Due to their utter creepiness, I ignored the group. I walked around the other side of the room. Looking for an exit. I then noticed it. The only exit was by the surgical team. They were still staring. Hands moving as they performed the action of surgery - smiling right at us. I had no choice but to confront them...</p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        fourteenthchoice();
                    });
                });
        $(".no29").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '28');
            instruct = 'I walked closer and asked the surgeon, "What happened to your face?" He stared at me, making odd sounds. Jessica screamed! "They have no tongues!" She was right, none of these individuals had tongues. "What the..." I said and I looked down at the patient they were operating on. His brain was exposed. It appeared they were performing a brain surgery. But I noticed the patient wasn\'t breathing. He also stunk. "He\'s dead. Why are you operating on a corpse?" The surgeon\'s eyes flashed and he pointed at the door behind him. His assistants stood staring. It was evident they wanted us to leave...';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        firstfifteenthchoice();
                    });
                });
    }

    function fourteenthchoice() {
        buttonReset();


		revealOptions(fourteenthchoice);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: ATTACK THEM</br>Option 2: TALK WITH THEM</br>");
        $(".yes30").one("click",function(){
			$('#buttonReveal').hide();
                    msg = "<p>I pulled out my pistol and methodically shot the three of them. Boom, boom, boom. Three head shots. I heard a bang from behind me and turned just as I felt a crushing blow on the left side of my head. I couldn't make out my attacker and this is the end of my story.</p>";
                    deadanddead(msg, fourteenthchoice);
                });
        $(".no30").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '28');
            instruct = 'I walked closer and asked the surgeon, "What happened to your face?" He stared at me, making odd sounds. Jessica screamed! "They have no tongues!" She was right, none of these individuals had tongues. "What the..." I said and I looked down at the patient they were operating on. His brain was exposed. It appeared they were performing a surgery. But I noticed the patient wasn\'t breathing. He also stunk. "He\'s dead. Why are you operating on a corpse?" The surgeon\'s eyes flashed and he pointed at the door behind him. His assistants stood staring. It was evident they wanted us to leave...<br>';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        firstfifteenthchoice();
                    });
                });
    }

    function firstfifteenthchoice(){
        buttonReset();


		revealOptions(firstfifteenthchoice);

        addToInstructions("<br>I opened the door, let Jessica in and shut it behind us. I then locked it. Glad to be away from that room. \"This is a nightmare,\" I said. Jessica fell to the floor and rested against the wall. I sat next to her. She was shaking. \"What...is...happening...here?\" She trembled. \"I\'ve never heard of or seen such filth and such depravity...\" She asked me, \"What were those people doing? Why were they disfigured?\" I looked at her and tried to think of something comforting to say. But nothing intelligent entered my mind. I sat, confused and upset.</br>WHAT DID I DO?</br>Option 1: SIT IN SILENCE</br>Option 2: TALK WITH JESSICA</br>");
        $(".yes31").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '29');
            instruct = "<p>I looked around the room we were in. It was small and undecorated. It was wild to me that this \'house\' had so many elements. It didn't mesh well; a library, an old-fashioned dining room, a laboratory... I still didn't know where I was or how I got here exactly. I looked up and checked out the room we were in. </p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        fifteenthchoice();
                    });
                });
        $(".no31").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '29');
            instruct = "<p>\"Look Jessica,\" I said. \"I have no idea what\'s going on in this place. I\'ve never experienced anything remotely like this. Do you know how you got here?\" \"The last memory I had was being at work,\" she answered, \"And then I awoke on a path outside this house. I don\'t know how or why I arrived here. I\'m just trying to stay alive. .I acknowledged her. I wanted to find out more but knew that we couldn\'t sit here any longer.</p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        fifteenthchoice();
                    });
                });
    }

    function fifteenthchoice(){
        buttonReset();


		revealOptions(fifteenthchoice);

        addToInstructions("</br>I opened the door, let Jessica in and shut it behind us. I then locked it. Glad to be away from that room. \"This is a nightmare,\" I said. Jessica fell to the floor and rested against the wall. I sat next to her. She was shaking. \"What...is...happening...here?\" She trembled. \"I\'ve never heard of or seen such filth and such depravity...\" I looked at her and tried to think of something comforting to say. But nothing intelligent entered my mind. All I knew is that we couldn\'t sit here. \"We need to get out of this torment.\" I looked over the room. It was small. There were two doors. One door with light coming from the bottom. The other door had a cool breeze and no light on the bottom.</br>WHAT DID I DO?</br>Option 1: ENTER THE ROOM WITH THE BREEZE</br>Option 2: ENTER THE DOOR WITH THE LIGHT</br>");
        $(".yes32").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '30');
            instruct = "<p>I stood up, grabbed Jessica's hand and lifted her to a standing position. We walked to the door and opened it. I blinked. We were outside! I scanned the area. Wait... We were outside but we weren't outside. We were in an outdoor corridor. To my left was the exterior of the house, to my right was a 15 foot tall fence with brutal spikes at the top and in front of us was a path that appeared to lead to another door. </p>";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        sixteenthchoice();
                    });
                });
        $(".no32").one("click",function() {
			$('#buttonReveal').hide();
                    msg="</br>I stood up, grabbed Jessica\'s hand and lifted her to a standing position. We walked to the door and opened it. It was a mistake. In front of us was a large conference table with about 30 people at it. They held an assortment of weapons. I mustered my words and began saying, \"Please don\'t kill-\" and this is the end of my story.";
                    deadanddead(msg,fifteenthchoice);
                });
    }

    function sixteenthchoice(){
        buttonReset();


		revealOptions(sixteenthchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: CLIMB THE FENCE</br>Option 2: TAKE THE PATH TO THE DOOR</br>");
        $(".yes33").one("click",function(){
			$('#buttonReveal').hide();
                    msg = "<p>I walked over the fence and gripped the bars. \"Are you sure that\'s a good idea?\" Jessica asked. She eyed the spikes at the top. \"I\'m a good climber.\" I replied. \"I\'ll figure something out.\" \"Okay,\" she said. \"But I can\'t climb it, so what happens when you get over?\" \"I said I\'d figure it out!\" I snapped back. I handed her my pistol and began making my way up the fence. The bars were slightly rusted, which helped my grip. I made it to the top, sweating and out of breath. I reached over the spikes and pulled. I slipped and fell forward. I heard Jessica yell and then felt the rusted spikes impale my throat and upper body. And this is the end of my story.</p>";
                    deadanddead(msg, sixteenthchoice);
                });
        $(".no33").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '31');
            instruct = 'Jessica breathed a sigh of relief. \"Thank goodness you\'re not going to climb that fence. That would be a death wish!\" I chuckled. We made our way down the dark path, gravel crunching under our feet. I reached the door and turned the handle. It was locked.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        seventeenthchoice();
                    });
                });
    }

    function seventeenthchoice(){
        buttonReset();


		revealOptions(seventeenthchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: LOOK FOR THE KEY</br>Option 2: KICK THE DOOR DOWN</br>");
        $(".yes34").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '32');
            instruct = "\"Jessica, help me find the key.\" I looked on the path. Jessica lifted the door mat and what do you know? There was a key. It was an old-fashioned, large fancy-looking key. \"You\'re welcome,\" she winked as she handed it to me. I tried it and it worked! The door clicked and opened. Immediately something jumped on top of me and knocked me on my back.";
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    seventeenthseventeenthchoice();
                    });
                });
        $(".no34").one("click",function() {
			$('#buttonReveal').hide();
                    msg ="<p>\"I have always wanted to do this,\" I said to Jessica. She grinned. I lifted my leg and kicked the door. Bang! It cracked near the handle but didn\'t give. I lifted my leg for a second blow and heard a noise behind us. The door we had entered from opened. I turned to see a crowd of people pouring out. \"They heard us!\" Jessica yelled. She held her hatchet up and I pulled out my pistol. We didn\'t stand a chance, we were outmanned and outgunned. The last thing I saw was a barrel of a shotgun and this is the end of my story.</p>";
                    deadanddead(msg, seventeenthchoice);
                });
    }

    function seventeenthseventeenthchoice(){
        buttonReset();


		revealOptions(seventeenthseventeenthchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: CALL FOR HELP</br>Option 2: ATTACK WHATEVER WAS ON TOP OF ME</br>");
        $(".yes35").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '33');
            instruct = "I yelled for Jessica. She swung her hatchet, there was a shrill yelp and blood splattered across my face. I quickly wiped my eyes and stood to my feet, pistol at the ready. On the floor, there was a dead dog, half of its neck sliced through. It was a wolf-like dog, large and, by all appearances, hungry. \"Really?\" I asked. \"Crazy people and now a killer dog...\" I looked to Jessica, she was panting and her hatchet dripped. \"Thank you.\" She nodded in response. In the corner there was a set of television screens. \"I think it\'s a security system.\" I said to Jessica and myself.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        eighteenthchoice();
                    });
                });
        $(".no35").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '33');
            instruct = "I pushed my hands against the heavy attacker. Jessica swung her hatchet, there was a shrill yelp and blood splattered across my face. I quickly wiped my eyes and stood to my feet, pistol at the ready. On the floor, there was a dead dog, half of its neck sliced through. It was a wolf-like dog, large and, by all appearances, hungry. \"Really?\" I asked. \"Crazy people and now a killer dog...\" I looked to Jessica, she was panting and her hatchet dripped. \"Thank you.\" She nodded in response. In the corner there was a set of television screens. \"I think it\'s a security system.\" I said to Jessica and myself.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        eighteenthchoice();
                    });
                });
    }

    function eighteenthchoice(){
        buttonReset();


		revealOptions(eighteenthchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: TURN THE SCREENS ON?</br>Option 2: LEAVE THEM BE?</br>");
        $(".yes36").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '34');
            instruct = "I turned the security system screens on. There were eight screens. I could see some areas where we had been and a couple we had not. Suddenly there was a tall figure on one of the screens. He was coming up the path we had just walked on. He held a long butcher\'s knife in his right hand. I couldn\'t make out his face. \"Jessica!\" I hissed, \"Someone\'s coming.\"";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        nineteenthchoice();
                    });
                });
        $(".no36").one("click",function() {
			$('#buttonReveal').hide();
                    msg ="<p>I didn\'t turn on security camera screens. Jessica and I scanned the room. I searched a nearby bookcase. There were books on human anatomy and neurology. I picked up one entitled \"Brains and Minds\" and flipped through. There were diagrams of different section of the brains indicating where to cut to supposedly affect behavior. \"Jessica, you have to see -\" I turned my head and saw Jessica being held from behind by a tall man. How did I not hear him? He had a knife to her throat. I raised my weapon and while staring directly at me, the man ran the knife through the front of her neck. Jessica died. I took my ax and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. And this is the end of my story.</p>";
                    deadanddead(msg, eighteenthchoice);
                });
    }

    function nineteenthchoice(){
        buttonReset();


		revealOptions(nineteenthchoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: HIDE</br>Option 2: PREPARE TO ATTACK</br>");
        $(".yes39").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '35');
            instruct = "\"We need to hide, now!\" I hissed at Jessica. There was a stand-alone closet that had thin horizontal slats. I pulled Jessica inside and shut the doors just in time. The man entered the room. He immediately walked over to the screens and looked them over. He began walking around the room and appeared to be looking for us. He walked in front of our closet and looked at the doors. We held our breath. Can he see us?";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        twentychoice();
                    });
                });
        $(".no39").one("click",function() {
			$('#buttonReveal').hide();
                    msg ="<p>\"Get your weapon ready,\" I told Jessica. I stood by the door readied. I heard a small noise and turned my head and saw Jessica being held from behind my a tall man. He had a knife to her throat. How did he get by us? How did we not see or hear him? I raised my weapon and while staring directly at me, the man ran the knife through the front of her neck. Jessica died. I took my ax and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. And this is the end of my story.</p>";
                    deadanddead(msg, nineteenthchoice);
                });
    }

    function twentychoice(){
        buttonReset();


		revealOptions(twentychoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: WAIT IT OUT</br>Option 2: ATTACK</br>");
        $(".yes40").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '36');
            instruct = "My heart raced. I hoped he wouldn't hear it pounding. After what was merely two seconds but seemed like an eternity he continued walking. He finished his circle of the room. He paused at the door he came in. Glanced back over toward our closet. And then he left the room. Jessica and I simultaneously breathed sighs of relief. We exited the closet.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        twentytwentychoice();
                    });
                });
        $(".no40").one("click",function() {
			$('#buttonReveal').hide();
                    msg ="<p>I took my ax, smashed opened the closet doors and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. And this is the end of my story.</p>";
                    deadanddead(msg, twentychoice);
                });
    }

    function twentytwentychoice(){
        buttonReset();


		revealOptions(twentytwentychoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: LOOK AT SECURITY SCREENS AGAIN</br>Option 2: SEARCH THE ROOM</br>");
        $(".yes42").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '37');
            instruct = "I took a look at the security cameras again. Behind us, in the path we came from there was huddle of men. There were three of them and they appeared to be talking and pointing. The screens showed that the room ahead of us had no one in it but contained several coffins!";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        twentyonechoice();
                    });
                });
        $(".no42").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '37');
            instruct = "I glanced around the room and saw nothing of interest. So I took a look at the security cameras again. Behind us, in the path we came from there was huddle of men. There were three of them and they appeared to be talking and pointing. The screens showed that the room ahead of us had no one in it but contained several coffins!";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        twentyonechoice();
                    });
                });
    }

    function twentyonechoice(){
        buttonReset();


		revealOptions(twentyonechoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: MOVE BACKWARD</br>Option 2: MOVE FORWARD</br>");
        $(".yes43").one("click",function(){
			$('#buttonReveal').hide();
                    msg = "<p>I readied my gun, opened the door and opened fire on the three men. Bam! One down. Bam! Another down. The third one had made his way close to me and grabbed for the gun. There was a struggle. He was twice my size and overpowered me. Bam! A shot went off. I heard a noise. Jessica had fallen to the ground - blood rushing out of her head. And then... Bam! And this is the end of my story.</p>";
                    deadanddead(msg, twentyonechoice);
                });
        $(".no43").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '38');
            instruct = 'Jessica and I opened the door and made our way into the coffined room. It was rancid. The floor was concrete and the walls and ceiling were stone. Each coffin was numbered with gold lettering; 1-17. Jessica eyed the room with her hand on her face. On one of the walls I saw what looked to be hand-smeared blood. The blood messily spelled out three sets of numbers; "3" "17" "5"...';
            localStorage.setItem('instruction', instruct);
                    addToInstructions(instruct, function(){
                        twentyoneonechoice();
                    });
                });
    }

    function twentyoneonechoice(){
        buttonReset();


		revealOptions(twentyoneonechoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: CONTINUE CHECKING THE ROOM</br>Option 2: OPEN A COFFIN</br>");
        $(".yes44").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '39');
            instruct = 'I looked over the walls and it looked like we were in a dead end (no pun intended). The only door in the room was the one we entered through. Jessica ran her hand against the wall. "It\'s damp," she said.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        twentytwochoice();
                    });
                });
        $(".no44").one("click",function() {
			$('#buttonReveal').hide();
                    coffin();
                });
    }

    function twentytwochoice(){
        buttonReset();


		revealOptions(twentytwochoice);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: LEAVE THROUGH THE DOOR I ENTERED</br>Option 2: OPEN A COFFIN</br>");
        $(".yes45").one("click",function(){
			$('#buttonReveal').hide();
                    msg = "<p>Because we couldn't find a way, Jessica and I left the room the way we came in. And it seemed the three men we had seen earlier on the security displays had caught up with us. Jessica jumped in front of me swinging her hatchet. She didn't stand a chance. The last thing I saw was the barrel of a gun. And this is the end of my story.</p>";
                    deadanddead(msg, twentytwochoice);
                    $('#no').off();
                });
        $(".no45").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '40');
                    coffin();
                    $('#yes1').off();
                });
    }

    function coffin(){
        localStorage.setItem('num', '41');
        instruct = "</br>I decided to open one of the caskets. Hopefully there was nothing inside...";
        localStorage.setItem('instruction', instruct);
        addToInstructions( instruct, function(){
            coffinone();
        });
    }

    function coffinone(){

        $("#buttonOptions").hide();
        $("#buttonYes").hide();
        $("#textInput").show();
        addToInstructions("<br>Which coffin did I open first?</br>choose a number from 1-17");
        $("#button").one("click",function(){
            var choice = document.getElementById("myText").value;
            if(choice <= 2 || choice >= 4){
                msg="<p>I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...and this is the end of my story.</p>";
            deadanddead(msg, coffinone);
                }
            else if (choice > 17) {
                instruct = "</br></br>Please enter a number between 1-17";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function (){
                    coffinone();
                });
            }
            else if (choice == 3) {
                localStorage.setItem('num', '42');
                instruct = "</br>I reached down and opened the lid. There was a note. On it was scrawled \"first step on your path downward.\"";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    coffintwo();
                    });
            }
            else {
                instruct = "</br></br>Please enter a number between 1-17";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function (){
                    coffinone();
                    });
            }
        });
    }

    function coffintwo(){

        $("#buttonOptions").hide();
        $("#buttonYes").hide();
        $("#textInput").show();
        addToInstructions("<br>Which coffin did I open second?</br>choose a numeral from 1-17");
        $("#button").one("click",function(){
            choice = document.getElementById("myText").value;
            if(choice != 3 && choice != 17){
                msg="<p>I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...and this is the end of my story.</p>";
            deadanddead(msg, coffintwo);
            }
            else if(choice == 17){
                localStorage.setItem('num', '43');
                instruct = "</br></br>I reached down and opened the lid. There was another note. \"One more motion toward the depths below.\"";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function () {
                    coffinthree();
                });
            }
            else if (choice == 3) {
                instruct = "</br>I already opened coffin number 3...";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function () {
                    coffintwo();
                });
            }
            else if(choice > 17){
                instruct = "</br>Please enter a number between 1-17";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function () {
                    coffintwo();
                });
            }
            else{
                instruct = "</br>Please enter a number between 1-17";
                localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function () {
                    coffintwo();
                });
            }
        });
    }

    function coffinthree(){

        $("#buttonOptions").hide();
        $("#buttonYes").hide();
        $("#textInput").show();
        addToInstructions("</br>Which coffin did I open third?</br>choose a numeral from 1-17");
        $("#button").one("click",function(){
        var choice = document.getElementById("myText").value;
        if(choice !=3 && choice !=17 && choice !=5){
            msg="<p>I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...and this is the end of my story.</p>";
        deadanddead(msg, coffinthree);
        }
        else if(choice==5){
            localStorage.setItem('num', '44');
            instruct = "</br>I opened the coffin with the gold letter 5 on top. The floor began to shake. Dust fell from the walls and ceiling. Step by step, a rough staircase began to form. Jessica grabbed me and pulled me back. It was extremely loud and I glanced at the door, convinced that we would be heard.";
            localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function () {
                downstairsone();
            });
        }
        else if(choice==17 || choice==3){
            instruct = "</br>I already opened coffin number "+choice+"...";
            localStorage.setItem('instruction', instruct);
            addToInstructions(instruct, function () {
                coffinthree();
            });
        }
        else if(choice>17){
            instruct = "Please enter a number between 1-17.";
            localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function () {
                coffinthree();
            });
        }
        else{
            instruct = "Please enter a number between 1-17.";
            localStorage.setItem('instruction', instruct);
            addToInstructions( instruct, function () {
                coffinthree();
            });
            }
        });
    }

    function downstairsone(){
        buttonReset();


        $("#textInput").hide();
		revealOptions(downstairsone);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: BLOCK THE DOOR WITH A COFFIN</br>Option 2: HIDE IN A COFFIN</br>");
        $(".yes46").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '45');
            instruct = 'We pushed a coffin against the door. It was very heavy and I broke a sweat. The stairs finished moving into place and there was a pounding at the door. I really had no choice. We headed down the stairs. The stairs were made of stone. There was no light on the staircase but I could make out a dim glow at the bottom. The pounding above continued but the door was thick and the coffin heavy. I looked at Jessica. She was dirty and sweaty. I realized that I must look like a mess. But in times like these, appearance is the least concern. "Well we can\'t seem to get a moment\'s peace and there are men wanting to kill us who are slamming away above," Jessica said. "I hate this place. And at the risk of sounding trite, I just want to go home. To top it all off, I hate the dark." I grunted.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsoneone();
                    });
                });
        $(".no46").one("click",function() {
			$('#buttonReveal').hide();
                    msg ="<p>Jessica and I hid in separate coffins. The stairs finish moving into place just as three large men burst in the room. We were easily found and I hit one with an ax. The second one began strangling Jessica. The last man had opened fire at us. I don't know what happened to Jessica but this is the end of my story.</p>";
                    deadanddead(msg, downstairsone);
                });
    }

    function downstairsoneone(){
        buttonReset();


		revealOptions(downstairsoneone);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: CONTINUE DOWN THE STAIRS</br>Option 2: SIT DOWN</br>");
        $(".yes47").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '46');
            instruct = 'I arrived at the bottom of the stairs. In front of me was a disgusting sight. There was a man with a bloodied butcher\'s frock, a dustmask and a cleaver. On the table next to him was a gutted corpse.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairstwo();
                    });
                });
        $(".no47").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '46');
            instruct = 'I was tired. I sat down on the cold, hard stairs. Jessica immediately pulled at me, "What the hell are you doing?" She asked, "There are people trying to get at us!" I stood up and made my way down the stairs. We arrived at the bottom of the stairs. In front of me was a disgusting sight. There was a man with a bloodied butcher\'s frock, a dustmask and a cleaver. On the table next to him was a gutted corpse.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairstwo();
                    });
                });
    }

    function downstairstwo(){
        buttonReset();


		revealOptions(downstairstwo);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: ATTACK</br>Option 2: TALK</br>");
        $(".yes48").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '47');
            instruct = "Without delay, I raised my pistol and shot him between the eyes. He collapsed several feet backward and landed flat on his back. Suddenly another person entered the room. He had a long knife.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsthree();
                    });
                });
        $(".no48").one("click",function() {
			$('#buttonReveal').hide();
                    msg ='<p>"What is happen-" I started. The man moved quickly and his cleaver struck me in the side of the head. The first blow knocked me down. I attempted to raise my weapon but my arm wouldn\'t move. He struck me again and this is the end of my story.</p>';
                    deadanddead(msg, downstairstwo);
                });
    }

    function downstairsthree(){
        buttonReset();


		revealOptions(downstairsthree);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: SHOOT</br>Option 2: ORDER HIM TO DROP KNIFE</br>");
        $(".yes49").one("click",function(){
			$('#buttonReveal').hide();
                    msg="<p>I pulled the trigger. Bam! He dodged to the left and I missed! I attempted another shot but he was upon me. His knife slid deep into my right eye. The pain was deathly. I saw red and this is the end of my story.</p>";
                    deadanddead(msg,downstairsthree);
                });
        $(".no49").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '48');
            instruct = "</br>I yelled, \"Drop the knife, I have a gun!\" He glanced at me and set the knife down. He then said, \"Where the moon shines exists the deepest lord of nightly experiences. At times, I eat all but glory.\" He fell on the floor and rocked back and forth. Rope lay nearby. Jessica clicked the flashlight off and bravely picked up his knife.'";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsfour();
                    });
                });
    }

    function downstairsfour(){
        buttonReset();


		revealOptions(downstairsfour);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: TIE HIM UP</br>Option 2: WALK PAST HIM</br>");
        $(".yes50").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '49');
            instruct = "I grabbed the rope. I had learned knots as a child. I couldn't recall all the names but I remembered how to tie the knots I felt were useful. I grabbed the man's arm and he struggled. He took a swing at me and I brought the butt of my pistol on the back of his head. He yelped but continued struggling. I hit him again on the top of his head and knocked him unconscious. I tied him to the leg of a nearby table that was secured to the floor, arms behind his back.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsfourfour();
                    });
                });
        $(".no50").one("click",function() {
			$('#buttonReveal').hide();
                    msg="<p>I figured he was insane and continued past him. I heard a rapid shuffling and felt a sharp sting in the back of my neck.The stinging became an unbearable pain. I coughed blood. The man had stabbed me in the back of the neck. And this is the end of my story.</p>";
                    deadanddead(msg,downstairsfour);
                });
    }

    function downstairsfourfour(){
        buttonReset();


		revealOptions(downstairsfourfour);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: SEARCH THE ROOM</br>Option 2: LOOK FOR A WAY OUT</br>");
        $(".yes51").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '50');
            instruct = "I finally had a moment to scan the room. The butcher lay in a pool of mixed blood on the floor. There were two doors. One on the left and another further to my right.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsfourfourfour();
                    });
                });
        $(".no51").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '50');
            instruct = "I looked around the room. The butcher lay in a pool of mixed blood on the floor. There were two doors. One on the left and another further to my right.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsfourfourfour();
                    });
                });
    }

    function downstairsfourfourfour(){
        buttonReset();


		revealOptions(downstairsfourfourfour);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: OPEN THE DOOR TO THE LEFT</br>Option 2: OPEN THE DOOR TO THE RIGHT</br>");
        $(".yes52").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '51');
            instruct = "I opened the door on the left. It was a closet. Inside was some clean clothing. I was filthy and decided to change my clothes. Jessica turned away. The fresh attire was nice. Jessica and I traded places and she changed into a clean shirt. Left with no other options besides going backwards, we headed out the door on the right.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        rightdoor();
                    });
                });
        $(".no52").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '51');
                    rightdoor();
                });
    }

    function rightdoor(){
        localStorage.setItem('num', '52');
        instruct = "I opened the right door and in front of me was pitch black. I asked Jessica to pass me the flashlight and I clicked it back on. And of course, in keeping with our terrible experience thus far the flashlight didn\'t turn on. \"Crap, the batteries are dead.\" I said. Suddenly, on the stairs behind us we heard footsteps pounding. Jessica grabbed my arm.";
        localStorage.setItem('instruction', instruct);
        addToInstructions( instruct, function(){
            downstairsfive();
        });
    }

    function downstairsfive(){
        buttonReset();


		revealOptions(downstairsfive);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: WAIT FOR THEM TO ARRIVE AND FIGHT</br>Option 2: HEAD INTO THE DARKNESS</br>");
        $(".yes53").one("click",function(){
			$('#buttonReveal').hide();
                    msg = "<p>I readied my pistol, aiming it toward the door. A man appeared at the bottom of the stairs. His face was filthy and he held a large ax in either hand. BANG! I shot him in the arm. He dropped one ax. Behind him several more large, armed, men arrived in the room. Jessica impaled one of them with her knife. We were no match for them. The last thing I saw was gleaming steel and this is the end of my story.</p>";
                    deadanddead(msg, downstairsfive);
                });
        $(".no53").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '53');
            instruct = 'I shut the door behind us. "Hold my hand so we aren\'t separated," I told Jessica. I felt the wall. It was cold and wet. Some sort of a slimy masonry. We slowly made our way around the room. I could see nothing. The only sound was our footsteps and breathing. My hand touched something sharp. Whatever it was that I touched, I had knocked it over. I moved back quickly and it clattered noisily across the floor. The sound must have awoke something because I immediately heard a low growl. I clutched my weapons and felt Jessica clench. The growling grew closer.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsfivefive();
                    });
                });
    }

    function downstairsfivefive(){
        buttonReset();


		revealOptions(downstairsfivefive);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: SWING MY AX</br>Option 2: STAY STILL</br>");
        $(".yes54").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '54');
            instruct = "I swung my ax into the darkness. Nothing. Jessica struck out with her knife. A shriek! She had cut someone or something. Then a loud noise from the door behind us. Light shone in the room. Two men with weapons entered. Jessica had stabbed a beast of some sort, barely hurting it. It was large, the size of a small bear and had matted fur. It was like no animal I have ever seen.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairssix();
                    });
                });
        $(".no54").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '54');
            instruct = "I stood still. Then Jessica struck out with her knife. A shriek! She had cut someone or something. Then a loud noise from the door behind us. Light shone in the room. Two men with weapons entered. Jessica had stabbed a beast of some sort, barely hurting it. It was large, the size of a small bear and had matted fur. It was like no animal I have ever seen.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairssix();
                    });
                });
    }

    function downstairssix(){
        buttonReset();


		revealOptions(downstairssix);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: ATTACK THE MEN</br>Option 2: ATTACK THE BEAST</br>");
        $(".yes55").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '55');
            instruct = "I shot at one of the men and missed. Another yelled and pointed at me. The beast then turned to the men and charged. I grabbed Jessica and made our way to the nearest door. I pulled her out of the room, shut the door behind us and locked it. I could hear screams from where we had just left. I turned around and found us in a hallway. It was long and there appeared to be only one door. A red door.";
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairssixsix();
                    });
                });
        $(".no55").one("click",function() {
			$('#buttonReveal').hide();
                    msg ='<p>I shot at the beast with my gun. It seemed to barely affect it. It charged at me. I looked over to see the men attacking Jessica. I tried to stab the beast but it easily overpowered me. I died knowing how it feels to be eaten alive. And this is the end of my story.</p>';
                    deadanddead(msg, downstairssix);
                });
    }

    function downstairssixsix(){
        buttonReset();


		revealOptions(downstairssixsix);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: SEARCH THE HALLWAY</br>Option 2: GO THROUGH THE DOOR</br>");
        $(".yes56").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '56');
            instruct = '"Let\'s look around," I told Jessica. I scanned the walls, floor and ceiling. They were barren. No doors. No windows. Just a long, undecorated hallway. "I can\'t find anything," Jessica said. So, we headed toward the door.<p>We walked down the long hallway and reached the door. We opened the door. And we were outside again! "This time, we are getting out of here." I said. We were in a sort of yard; there was an iron door leading into a separate building and there was a large fence. This fence wasn\'t like the last one though. It was a wooden fence. Behind us a man opened the door. He held a rifle and he laughed. He had a stained flannel shirt on, old blue jeans and no shoes. His face was scarred and evil.</p>';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsseven();
                    });
                });
        $(".no56").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '56');
            instruct = 'We walked down the long hallway and reached the door. We opened the door. And we were outside again! "This time, we are getting out of here." I said. We were in a sort of yard; there was an iron door leading into a separate building and there was a large fence. This fence wasn\'t like the last one though. It was a wooden fence. Behind us a man opened the door. He held a rifle and he laughed. He had a stained flannel shirt on, old blue jeans and no shoes. His face was scarred and evil.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        downstairsseven();
                    });
                });
    }

    function downstairsseven(){
        buttonReset();


		revealOptions(downstairsseven);

        addToInstructions("<br>WHAT DID I DO?</br>Option 1: SHOOT THE MAN</br>Option 2: RUN FOR THE FENCE</br>");
        $(".yes57").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '57');
            instruct = 'I shot the man in the face. He died instantly. I knew more would be coming. We ran over to the fence and I kicked at the planks. They were very solid. Jessica did the same. "I found a loose one!" She yelled. We both took turns at kicking it in. The boards shattered and there was enough room for one of us to make it through. Three more men entered the yard.';
            localStorage.setItem('instruction', instruct);
                    addToInstructions( instruct, function(){
                        endone();
                    });
                });
        $(".no57").one("click",function() {
			$('#buttonReveal').hide();
                    msg ='<p>We ran for the fence. Behind us the man aimed his rifle. I was hoping that due to his obviously deranged mental state, that he\'d be a poor shot. I was wrong. I heard a crack just as a bullet blew through the back of my head. And this is the end of my story.</p>';
                    deadanddead(msg, downstairsseven);
                });
    }

    function endone(){
        buttonReset();


		revealOptions(endone);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: GO THROUGH THE FENCE FIRST</br>Option 2: LET JESSICA GO THROUGH FIRST</br>");
        $(".yes58").one("click",function(){
			$('#buttonReveal').hide();
                msg="<p>I crawled through the fence. Jessica was behind me. I heard a gun shot. Jessica yelled and fell to the dirt. I stood up and looked behind. The men were running towards me, shooting. I began to run. A bullet tore at my leg. I stumbled and dropped my pistol. Another in my lower back. I fell. I crawled further but a final bullet ended me. And this is the end of my story.</p>";
                deadanddead(msg,endone);
            });
        $(".no58").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '58');
            instruct = "</br>I urged Jessica, \"Run!\" I\'ll take care of them. She crawled under the fence. I turned and shot one of the three men. He fell back and luckily knocked the other two over. Jessica looked at me and said, \"My last name is Brickley. I am from Denver. Find me.\" I responded, \"Get to safety. I will catch up with you. Just run!\" She didn\'t think twice and ran. I got down and started crawling through the fence. I felt a strong grip on my leg and was ripped back through. A muscular man threw me a couple feet. My gun fell by my side. I gripped my ax. He dove on top of me and I swung my ax into his neck. His body went limp on top of mine. I pushed him off me to see two men blocking my exit through the fence.";
            localStorage.setItem('instruction', instruct);
                addToInstructions( instruct, function(){
                    endtwo();
                });
            });
    }

    function endtwo(){
        buttonReset();


		revealOptions(endtwo);

        addToInstructions("<br><br>WHAT DID I DO?</br>Option 1: FIGHT THEM</br>Option 2: RUN INTO THE BUILDING</br>");
        $(".yes59").one("click",function(){
			$('#buttonReveal').hide();
                msg="<p>I gripped my ax and ran toward the men. One of them sidestepped and punched me in the side of my face. I was dazed and I dropped my ax. I reached down to pick up my weapon and felt another blow on the back of my head. I collapsed next to the group. The men proceeded to kick my head in and this is the end of my story.</p>";
                deadanddead(msg,endtwo);
            });
        $(".no59").one("click",function() {
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
            localStorage.setItem('num', '59');
                final();
            });
    }

    function final(){

        $('#buttonOptions').hide();
        $('#buttonYes').hide();
        $('#textInput').hide();
        localStorage.setItem('num', '60');
        instruct = "<p>I turned and ran toward the nearby building. Jessica had escaped. The men had turned their attention to me. One of them threw a knife. I dodged it. The yard now had around ten people in it, all rapidly making their way toward me.  I reached the door and turned the handle. The door was very heavy and I pushed it open. I quickly locked the door behind me. The door not only had a deadbolt lock, it had a sliding bar that latched it shut. It looked very sturdy. I paused for a moment, dreading whatever existed behind me. What I'd gone through so far had left me strung out and pessimistic. I slowly turned. It was a bright, well-furnished room. Behind a long cherry oak desk sat three people. They were older men, who smiled at me. In front of them lay clipboards and files. The room was styled in a reddish-brown fashion and behind them roared a pleasant fire. I heard a bang on the iron door behind me. One of the men at the table pushed a button on a panel in front of them and then there was silence. I stared, dumbfounded at the change in scenery and too tired to act quickly. Finally one of the men spoke, \"Well done " + name +". You're the first person to make it through.\" He sat in the middle of the table. White hair, glasses and thin. \"Make it through what?\" I asked. \"Consider it a test of the human brain.\" \"The man replied. \"Tonight, you've been presented several choices. Each of which has led you here. Had you chosen wrong at any point, we would have never met.\" \"I don't understand...\" I said. The man to the left spoke, \"We are running the 'Human Choice Program'.\" This man had black hair, with a beard. He was bald and had dark eyes.</p> <p>\"We have been taking critics of our company and systematically entering them into this program. Of course, many of them died in the process. We figured it was fine since they were to be assassinated anyways.\" \"Wait... You\'re saying that this whole thing is a game?\" I asked, completely baffled. The middle man spoke again. \"No sir. Those are real people with weapons. Each of them are psychotic patients that we have armed and told to kill you. We have outfitted around 100 psychiatric patients and run this project. Before you, they have eliminated many threats for us.\"</p><p>The man on the left joined in, \"You're on a highly controlled base. Each of the patients has a chip implanted in their head which allows us to administer varying levels of shocks. From 'slap on the wrist' to 'death'. If any of them disagrees with us or refuses to follow orders, we kill them with the push of a button.\" I started making some sense of things and asked, \"So, earlier you mentioned using this base to silence critics - what does that mean exactly?\" The remaining man who had up to now remained quiet, spoke. \"We are the psychiatric department of Mankley Industries. The major international company that handles things ranging from weapons to pharmaceutical drugs. As you can imagine, we have our fair share of antagonists. As the head of the mental health council, we've been charged with the removal of those who attempt exposing the company.\" \"What do I have to do with that?\" I asked. I noticed at this point, screens with security camera feeds. I could see the rooms Jessica and I had been in. They had been watching us. The white-haired man spoke again. \"You work for a major blog site. You were doing an article on disappearances of people investigating Mankley Industries. Now of course you don't remember that, because we have wiped your memory. You'd be surprised about what the right combination of drugs and electric shock can do.\" At that moment, memories poured in. I fell to one knee. It was a completely foreign and new experience. Years streamed back into my mind. \"Prior to your arrival, we had successfully run 132 people through this experiment.\" The man continued. \"All have died. It has shown us much insight into the human mind and the choices people make when under stress. We obviously will need to make it more challenging since you made it through but we figured these people were slated to die already so we might as well learn from it.\" The combination of my fatigue, the returned memories and the sheer evil I was confronting overwhelmed me. I backed into a corner and sat down. The man with the beard began speaking again, \"Now, before we kill you, we have a few questions. First, what did you learn from this?\"</p><p>WHAT DID I DO?</p><p>To be continued...</p>";
        localStorage.setItem('instruction', instruct);
        addToInstructions( instruct, function(){
            finaltwo();
        });
    }

    function finalone(){
        buttonReset();


		revealOptions(finalone);

        addToInstructions("Please click 'submit'<br>");
        $(".yes60").one("click",function(){
			$('#buttonReveal').hide();
			$('#buttonOptions').hide();
			finaltwo();
		});
        $(".no60").one("click",function() {
			$('#buttonReveal').hide();
			finaltwo();
		});
    }

    function finaltwo() {
        addToInstructions("Thanks for playing!", function(){
            exit();
        });
    }

    function deadanddead(why, progress){
        $('#textInput').hide();
        $('#buttonOptions').hide();
        $('#buttonYes').show();
        $('#yes').off();
        $('#no').off();
        $('.yesDead').off();
        $('.noDead').off();
        document.getElementById('laugh').play();

        addToInstructions(why+"<br> I died. <br>Would you like to play again? <br> ");
            $(".yesDead").one("click",function(){
                addToInstructions("Back into hell you go...");
                $('.buttonOptions').show();
                $('.buttonYes').hide();
                $("#instructions").empty();
                // $('.yesDead').off();
                // $('.noDead').off();
                console.log(progress);
                progress();
            });
            $(".noDead").one("click",function(){
                addToInstructions("Smart decision. Get out while you still can.", function() {
                // $('.yesDead').off();
                // $('.noDead').off();
                return;
            });
            });
        }
});
