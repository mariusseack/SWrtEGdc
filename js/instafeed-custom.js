$(document).ready(function() {
  var userFeed = new Instafeed({
    get: 'user',
    userId: '5864226392',
    limit: 9,
    resolution: 'standard_resolution',
    accessToken: '5864226392.1677ed0.d419e0abe0cf4bceb6c47906a264816c',
    sortBy: 'most-recent',
    template: '<a href="instagram://media?id={{id}}" target="blank"><div class="img-wrapper pointer"><div class="img-overlay"><i class="fa fa-heart fa-4x center-align" aria-hidden="true"></i></div><img src="{{image}}" class="img"></div></a>',
    before: function() {
      $(".load-instafeed-group>button").addClass("hide");
      $(".load-instafeed-group>div").removeClass("hide");
    },
    after: function() {
      $(".load-instafeed-group>div").addClass("hide");
      $(".load-instafeed-group>button").removeClass("hide");
      // disable button if no more results to load
      if (!this.hasNext()) {
        $(".load-instafeed-group>button").addClass("hide");
      }
    },
  });

  //template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  userFeed.run();

  $(".load-instafeed-group>button").on("click", function() {
    userFeed.next()
  });

});
