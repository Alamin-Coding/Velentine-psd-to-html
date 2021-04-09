



$(function(){
  // Stiky Header
  $(window).scroll(function(){
    var nav_Bar =$(this).scrollTop();
    if(nav_Bar >100){
      $('#navbar').addClass('add_nav');
    }
    else{
      $('#navbar').removeClass('add_nav');
    }
  });

// Scroll js
  $(window).scroll(function(){
    var alamin =$(this).scrollTop();
    if(alamin >100){
      $('.header').addClass('add');
    }
    else{
      $('.header').removeClass('add');
    }
  });

  // CounterUP JS
  $('.counter').counterUp({
		delay: 10,
		time: 3000
	});

// CountDown
$('#getting-started').countdown('2021/12/12', function(event) {
  // $(this).html(event.strftime('%D %H:%M:%S'));
  $('#day').text(
    event.strftime('%D')
    );
  $('#hours').text(
    event.strftime('%H')
    );
  $('#mins').text(
    event.strftime('%M')
    );
  $('#secs').text(
    event.strftime('%S')
    );
});

	
});

