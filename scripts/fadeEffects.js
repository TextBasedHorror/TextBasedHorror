// var btn_Play = document.getElementById("btn_Play");
// var btn_About = document.getElementById("btn_About");

$(document).ready(function(){$("#logo").addClass("imageXplode")});
$(document).ready(function(){$("#intro2").hide(0).delay(3000).fadeIn(3000)});
$(document).ready(function(){$(".frontButton").hide(0).delay(6000).fadeIn(3000)});
$(document).ready(function(){$(".aboutButton").hide(0).delay(6000).fadeIn(3000)});

$(document).ready(function(){
  setTimeout(function(){
    $("#logo").addClass("finalImage");
  }, 3000);
});

$(document).ready(function(){$("#footer").hide(0).delay(3000).fadeIn(3000)});


function showNewGameMenu() {
	$("#content").fadeOut(500);
	$("#newGameMenu").delay(1000).fadeIn(3000);
	document.getElementById('laugh').play();
	// if user has any cookies saved, show continue option
	if (localStorage.getItem('name') === null) {
    	$("#continueButton").hide();
  		} else {
    	$("#continueButton").fadeIn(3000);
    };
};

// fade audio out and then load story
function newGame() {
	$("#newGameMenu").fadeOut(500);
	document.getElementById('ghost1').play();
	var rainAudio = $("#rain");
	var thunderAudio = $("#thunder");
	rainAudio.animate({volume: 0}, 2000);
	thunderAudio.animate({volume: 0}, 1600); //make sure the thunder fades down quick
	// $("#newGameMenu".hide().delay(2000));
	window.localStorage.clear(); 
	window.sessionStorage.clear(); 
	setTimeout(function() {
		window.location.assign("LiveProject.html");
	}, 3000);
};

// fade audio out and then load story
function continueGame() {
	$("#newGameMenu").fadeOut(500);
	document.getElementById('witches_house').play();
	var rainAudio = $("#rain");
	var thunderAudio = $("#thunder");
	rainAudio.animate({volume: 0}, 2000);
	thunderAudio.animate({volume: 0}, 1600);
	setTimeout(function() {
		window.location.assign("LiveProject.html");
	}, 3000);
	story_mode(localStorage).getItem('save_point');
};

// func called from play/new game menu
function showMainMenu() {
	document.getElementById('m_chains').play();
	$("#newGameMenu").fadeOut(500);
	$("#content").delay(1000).fadeIn(3000);
};

function showAboutPage() {
	document.getElementById('swamp2').play();
	$("#content").fadeOut(500);
	$("#contentAbout").delay(1000).fadeIn(2000);
};

// _about is the function that's called from about us section
function goBackToMainPage() {
	document.getElementById('howl1').play();
	$("#contentAbout").fadeOut(500);
	$("#content").delay(1000).fadeIn(3000);
};

