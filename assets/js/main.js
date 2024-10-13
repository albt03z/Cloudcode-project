//------------------------------
//navbar
//------------------------------

	//navbar scroll class
	$(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
              $('nav').addClass('scroll');
            }
  
            else{
                $('nav').removeClass('scroll');	
            }
        })
      });
      
      $( ".nav-link" ).click(function() {
          if($(".navbar-collapse").hasClass('show')){
              $(".navbar-toggler").click();
          }
      });
  
  //------------------------------
  //Smooth In-page navigation
  //------------------------------
  
      $('a[href*="#"]').on('click', function(e) {
          $('html, body').animate(
              {
                  scrollTop: $($(this).attr('href')).offset().top,
              },
              500,
              'linear'
          );
      });
  
  //------------------------------
  //Counter
  //------------------------------	
  
              $(function () {
                    $("#counter_up").waypoint(function (direction) {
                      if (direction === "down") {
                          $(".counter").each(function () {
                              var $this = $(this);
                              var counterNumber = $this.attr("data-count");
                              $({
                                couterInit: $this.text()
                              }).animate({
                                couterInit: counterNumber
                              }, {
                                      duration: 3000,
                                      easing: 'swing',
                                      step: function () {
                                          $this.text(Math.ceil(this.couterInit));
                                      },
                                      complete: function () {
                                          $this.text(this.counterNumbercountNum);
                                      }
                                  })
                                  });
                                  }
                                },{
                                      offset:"50%"
                                  });
                          });
  
  
  //------------------------------
  //Pre-Loader
  //------------------------------
  
      $(window).on('load', function () {
          $('#pre_loader').fadeOut('slow');
          $('#pre_loader').css({"display":"none"});
      });
  