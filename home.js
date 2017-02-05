$(document).ready(function() {
  var interval;

  // Automatically start the slideshow and adequately
  // change the download button for the current platform.
  startSlideshow();
  setDownloadLink();

  $('.switch').on('click', function() {
    changeSlide($(this));
  });

  $('.showcase .container').on('mouseenter', function() {
    pauseSlideshow();
  });

  $('.showcase .container').on('mouseleave', function() {
    startSlideshow();
  });

  function startSlideshow() {
    interval = setInterval(function() {
      if ($('.switch.active').data('slide') == '3')
        changeSlide($('.switch').first());
      else
        changeSlide($('.switch.active').next());
    }, 6000);
  }

  function pauseSlideshow() {
    clearInterval(interval);
  }

  function changeSlide(switcher) {
    $('.switch.active').removeClass('active');
    switcher.addClass('active');

    var id         = switcher.data('slide');
    var curr_desc  = $('.description.active')
    var curr_slide = $('.slide.active');
    var next_desc  = $('.description[data-slide="'+ id + '"]');
    var next_slide = $('.slide[data-slide="'+ id + '"]');

    var ltr = id > curr_slide.data('slide');

    if (ltr)
      var initial = 603;
    else
      var initial = -603;

    curr_desc.fadeOut(500, function() {
      curr_desc.removeClass('active');

      next_desc.fadeIn(100);
      next_desc.addClass('active');
    });

    next_slide.removeClass('hidden');
    next_slide.css({left: initial + 'px'});

    curr_slide.animate({
      left: -initial + 'px'
    }, 500, function() {
      $(this).removeClass('active').addClass('hidden');
    });

    next_slide.animate({
      left: 0
    }, 500, function() {
      $(this).addClass('active');
    });
  }

  function setDownloadLink() {
    if (navigator.userAgent.match(/Linux/i))
      $('.os-placeholder').html('for Linux');
    else if (navigator.userAgent.match(/Mac OS/i))
      $('.os-placeholder').html('for Mac OS X');
    else if (navigator.userAgent.match(/Windows/))
      $('.os-placeholder').html('for Windows');
  }
});
