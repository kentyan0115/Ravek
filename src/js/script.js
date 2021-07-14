jQuery(function() {

  // ドロワー 
  jQuery('.hamburger').on('click', function() {
    jQuery(this).toggleClass('hamburger--active');
    jQuery('body').toggleClass('body--fixed');
    if (jQuery(this).hasClass('hamburger--active')) {
      jQuery('.drawer').addClass('drawer--active');
    } else {
      jQuery('.drawer').removeClass('drawer--active');
    }
  });

  jQuery('.drawer__item').on('click', function() {
  jQuery('.hamburger').toggleClass('hamburger--active');
  jQuery('body').removeClass('body--fixed');
    if (jQuery(this).hasClass('drawer--active')) {
      jQuery('.drawer').addClass('drawer--active');
    } else {
      jQuery('.drawer').removeClass('drawer--active');
    }
  });


  // フローティングボタン
  jQuery('.to-top').on('click', function () {
    jQuery('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  jQuery('.to-top').hide();
  jQuery(window).on("scroll", function() {
    if (jQuery(this).scrollTop() > 300) {
      jQuery('.to-top').fadeIn();
    }else {
      jQuery('.to-top').hide();
    }
  });

});

