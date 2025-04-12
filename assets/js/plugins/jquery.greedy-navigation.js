/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
<<<<<<< HEAD
=======
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
>>>>>>> upstream/master
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
<<<<<<< HEAD
  if($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children('*:not(.masthead__menu-item--lg)').length > 0) {

=======
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
>>>>>>> upstream/master
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
<<<<<<< HEAD
      $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

      availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
      
      // Show the dropdown btn
      if($btn.hasClass('hidden')) {
        $btn.removeClass('hidden');
      }
=======
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
>>>>>>> upstream/master
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
<<<<<<< HEAD
    while(breaks.length > 0 && availableSpace > breaks[breaks.length-1]) {
      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
=======
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
>>>>>>> upstream/master
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
<<<<<<< HEAD
    if(breaks.length < 1) {
=======
    if (breaks.length < 1) {
>>>>>>> upstream/master
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

<<<<<<< HEAD
=======
  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

>>>>>>> upstream/master
}

// Window listeners

<<<<<<< HEAD
$(window).on('resize', function() {
  updateNav();
});
screen.orientation.addEventListener("change", function(){
  updateNav();
});

$btn.on('click', function() {
=======
$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
>>>>>>> upstream/master
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();