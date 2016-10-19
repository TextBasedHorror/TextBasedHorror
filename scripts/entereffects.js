$(document).ready(function(){$("#intro2").hide(0).delay(0).fadeIn(3000)});
$(document).ready(function(){$(".frontButton2").hide(0).delay(1000).fadeIn(3500)});

$(document).ready(function(){
  if (localStorage.getItem('name') === null) {
    $(".frontButton3").hide();
  }else{
    $(document).ready(function(){$(".frontButton3").hide(0).delay(2000).fadeIn(3000)});
  }
});
