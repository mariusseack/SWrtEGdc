var para_element;
var ele_offset;
var puffer;
var max_offset;
var main_productcontainer;

$(document).ready(function() {
  para_element = $('.parallax-container .heading-container').children();
  ele_offset = para_element.offset().top - para_element.height();
  puffer = 150; //amount (in pixel) of puffer the element can scroll above top
  max_offset = ele_offset + puffer;

  main_productcontainer = $(".main-productpicture-wrapper");


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

  $(".inline-productpicture-wrapper .image-element").click(function() {
    var image_ele = $(this).children('img');
    var image_src = image_ele.attr('src');
    var main_image = main_productcontainer.children('img');
    var main_image_src = main_image.attr('src');

    main_image.attr('src',image_src);
    image_ele.attr('src',main_image_src);
  });

});
