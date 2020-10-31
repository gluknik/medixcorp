$('.nav-toggle').click(function() {
  $(this).toggleClass('open');
});

function checkSize() {
  if ($('.site-header__mobile-nav').css('display') == 'block'){
    $('.site-menu').addClass('collapse');

    if ($('.site-menu__item.login').length == 0) {
      $('.site-menu__list').append('<li class="site-menu__item login"></li>');
      $('.site-header__login').appendTo('.site-menu__item.login');
    }

  } else {
    $('.site-menu').removeClass('collapse');

    if ($('.site-menu__list .site-header__login').length != 0) {
      $('.site-menu__list .site-header__login').appendTo('.site-header__links');
      $('.site-menu__item.login').remove();
    }
  }
}

$(document).ready(function() {
  checkSize();
  $(window).resize(checkSize);
});



