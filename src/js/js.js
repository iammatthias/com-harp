    var $toggle = $('.nav-toggle');
    var $menu = $('.nav-menu');

    $toggle.click(function() {
      $(this).toggleClass('is-active');
      $menu.toggleClass('is-active');
    });

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
