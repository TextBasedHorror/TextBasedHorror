var idleTime = 0;

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

$(document).ready(function(){

  setTimeout(function(){
    $("#flicker").addClass("animateFlicker");
  }, 2500);
  setTimeout(function(){
    $("#flicker2").addClass("animateFlicker");
  }, 2700);
  setTimeout(function(){
    $("#flicker3").addClass("animateFlicker");
  }, 2200);
});

$(document).ready(function() {
    document.addEventListener("keydown", function(event) {
        if (skippable) {impatience();}
    });
    document.addEventListener("click", function(event) {
        if (skippable && !muteButton.click) {impatience();}
    });

    var interval = setInterval(timerIncrement, 3500);
    start_game();
});

// I fixed the lightning strikes in the main game so that they correspond to the thunder sound and fire every 5 secs, but that broke the lightning strikes on the index.html. These blocks are commented out because they seem to be the reason for the breakage.

//function timerIncrement(){
 // idleTime = idleTime +1;
 // if (idleTime > 0) {
//      document.getElementById('thunder').play();
//      setTimeout(function(){document.body.style.backgroundColor = '#000000'},0);
//setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},100);
//      setTimeout(function(){document.body.style.backgroundColor = '#000000'},150);
//      setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},200);
 //     setTimeout(function(){document.body.style.backgroundColor = '#000000'},250);
//  }
//}




// this is for the timed thunder strikes
//$(document).ready(function(){
 // var interval = setInterval(timerIncrement(), 3500);  
 // $(this).mousedown(function(e){
//      idleTime = 0;
//  });
//});
