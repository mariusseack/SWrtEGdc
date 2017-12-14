var para_element;
var ele_offset;
var puffer;
var max_offset;

$(document).ready(function() {
  var para_element = $('.parallax-container .heading-container').children();
  var ele_offset = para_element.offset().top - para_element.height();
  var puffer = 150; //amount (in pixel) of puffer the element can scroll above top
  var max_offset = ele_offset + puffer;

  $(document).scroll(function() {
    //parallax custom scrolleffect
    var scroll_offset = $(window).scrollTop();
    var val = (max_offset - scroll_offset);
    var res = Math.round((val / max_offset) * 100) / 100;

    if (res >= 0.0 && res <= 1.0) {
      if (res < 0.2) {
        para_element.css({
          "opacity": "0"
        });
      } else {
        para_element.css({
          "opacity": res
        });
      }

    }
  });
});
