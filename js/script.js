$(document).ready(function(){

	$('.single-item').slick({
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    variableWidth: true,
      responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                centerMode: true,
              }
        }]
	});

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'));
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
 	});

  $(".us").click(function(){
    $(".language").css({"flex-direction": "column-reverse", "justify-content": "flex-end"});
  });
  $(".ru").click(function(){
    $(".language").css({"flex-direction": "column", "justify-content": "flex-start"});
  });

 	$("#Phone").intlTelInput(
    {
      utilsScript       : 'js/utils.js',
      defaultCountry    : 'auto',
      separateDialCode  : false,
      nationalMode      : false,
      initialCountry    : 'auto',
      geoIpLookup       : function (callback) {
        $.get("https://ipinfo.io", function () {
        }, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      preferredCountries: ['ua', 'ru', 'by', 'kz']
    });

});

 new WOW().init();
 
$(document).ready(function(){
  $(".head").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
  });


  (function($){
        $(window).on("load",function(){
            $("main .reviews .width2 .right .single-item .slick-active p").mCustomScrollbar({
               theme:"rounded-dark"
            });
        });
    })(jQuery);



    $('.show-menu-btn').on('click', function() {
            $(this).toggleClass('open');
            $('.overlay-menu').toggleClass('active');
            $('body').toggleClass('menu-opened');
            return false;
        });
        $(".show-menu-btn").click(function(){
            $("header .nav ul").slideToggle("fast");
            $(".menu-open").slideUp("fast");
        });
        if ($(window).width() < 1200) {
            $("header .nav ul").hide();
            $(".open_menu").click(function(){
              $(".menu-open").slideUp("fast");
              $(this).siblings(".menu-open").stop().slideToggle("fast");
            });
        }

      $('.form-trigger').on('click', function() {
        $(this).toggleClass('is-clicked');
        $('.popup-forma2').toggleClass('is-active');
        return false;
      });
      $('.popup-close').on('click', function() {
          $('.form-trigger').removeClass('is-clicked');
          $('.popup-forma2').removeClass('is-active');
          return false;
      });
      $('.popup-forma2__cover').on('click', function() {
          $('.form-trigger').removeClass('is-clicked');
          $('.popup-forma2').removeClass('is-active');
          return false;
      });
      $(window).keydown(function(e) {
          if ($('.popup-forma2').hasClass('is-active')) {
              if (e.which === 27) {
                  $('.form-trigger').removeClass('is-clicked');
                  $('.popup-forma2').removeClass('is-active');
              }
          }
      });
       $("#Phone_popup").intlTelInput(
        {
          utilsScript       : 'js/utils.js',
          defaultCountry    : 'auto',
          separateDialCode  : false,
          nationalMode      : false,
          initialCountry    : 'auto',
          geoIpLookup       : function (callback) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },
          preferredCountries: ['ua', 'ru', 'by', 'kz']
        });
});

