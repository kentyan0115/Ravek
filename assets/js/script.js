"use strict";

jQuery(function () {
  jQuery('.hamburger').on('click', function () {
    jQuery(this).toggleClass('hamburger--active');

    if (jQuery(this).hasClass('hamburger--active')) {
      jQuery('.drawer').addClass('drawer--active');
      jQuery('body').css('overflow', 'hidden');
    } else {
      jQuery('.drawer').removeClass('drawer--active');
      jQuery('body').css('overflow', 'auto');
    }
  });
  jQuery('.drawer-item').on('click', function () {
    jQuery('.hamburger').toggleClass('hamburger--active');

    if (jQuery(this).hasClass('drawer--active')) {
      jQuery('.drawer').addClass('drawer--active');
      jQuery('body').css('overflow', 'hidden');
    } else {
      jQuery('.drawer').removeClass('drawer--active');
      jQuery('body').css('overflow', 'auto');
    }
  });
  jQuery('.question__item-body').hide();
  jQuery('.js-toggle').on('click', function () {
    jQuery(this).next('.question__item-body').stop(true, false).slideToggle();
    jQuery(this).toggleClass('question__item-open');
  }); // スクロールヒント

  new ScrollHint('.js-scrollable', {
    scrollHintIconAppendClass: 'scroll-hint-icon-white',
    // white-icon will appear
    applyToParents: true,
    i18n: {
      scrollable: 'スクロールできます'
    }
  });
});