var idleTime = 0;

function timerIncrement(){
  idleTime = idleTime +1;
  if (idleTime > 0) {
      document.getElementById('thunder').play();
      setTimeout(function(){document.body.style.backgroundColor = '#000000'},0);
      setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},100);
      setTimeout(function(){document.body.style.backgroundColor = '#000000'},150);
      setTimeout(function(){document.body.style.backgroundColor = '#FFFFFF'},200);
      setTimeout(function(){document.body.style.backgroundColor = '#000000'},250);
  }
}

$(document).ready(function(){$("#footer").hide(0).delay(3000).fadeIn(3000)});

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

$(document).ready(function(){
  var interval = setInterval(timerIncrement, 6000);
  $(this).mousedown(function(e){
      idleTime = 0;
  });
});
