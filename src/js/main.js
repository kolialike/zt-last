jQuery(function($){
  var body = $("body");


  var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.partners .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        // centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
          1500: {
            slidesPerView: 2,
          }
        }
    });


    var swiper = new Swiper('.certificate-container .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        // centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,

    });

    var institutionSmallPictures = $(".fxc-item-img-small > div");
    var institutionBigPictures = $(".fxc-item-img-big > img");
    institutionSmallPictures.on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = institutionSmallPictures.index($(this));
        institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
    });

    var btnMore = $(".vacancie-container-l-item-buttoms .more");
    btnMore.on('click', function(event) {
      event.preventDefault();
      $(this).parent().parent().toggleClass('vacancie-container-l-item-text-open');
      console.log($(this).parent().parent().hasClass('vacancie-container-l-item-text-open'));
      if ($(this).parent().parent().hasClass('vacancie-container-l-item-text-open')) {
        $(this).text("Приховати");
      }else{
        $(this).text("Більше");
        
      }
    });

     // menu-list-tile
      var menuTileList = $(".menu-tile-list a");
      var menuTile = $("#menu-tile");
      var menuList = $("#menu-list");
      menuTileList.on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = menuTileList.index($(this));
        if (index == 0) {
            menuTile.addClass('open');
            menuList.removeClass('open');
        } else {
            menuTile.removeClass('open');
            menuList.addClass('open');
        }
      });

      // var body = $("body")
    // menu
    var menuBurger = $(".menu-burger");
    menuBurger.on('click', function(event) {
        event.preventDefault();
        body.toggleClass('mobile-menu-open');
    });
    // var mobileMenu = $(".mobile-menu");
    // mobileMenu.on('click', function(event) {
    //     event.preventDefault();
    //     body.removeClass("mobile-menu-open");
    // });
    $(".close-mobile-menu").on('click', function(event) {
      event.preventDefault();
      body.removeClass("mobile-menu-open");
    });
    // var mobileMenuItem = $(".mobile-menu-item");
    // mobileMenuItem.on('click', function(event) {
    //     var thisLala = event.target;
    //     if(!$(thisLala).data('lang')) event.stopPropagation();     
    // });
    

    var filterSearch = $(".filter-search");
    filterSearch.on('click', function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('search-filte-open');
    });

    var language = $(".language");
    language.on('click', 'a', function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('language-open');
    });


    $('#map_human area, .atc-group a').each(function() {
      var id = $(this).data('human')?$(this).data('human'):$(this).attr('id');
      if($(this).data('massh')) {
        var thereId = $(this).data('massh').split(',');
        $(this).mouseover(function() {
          thereId.forEach(function(item) {
            $('.humanhover .'+item).addClass('active');
          });
        });
        $(this).mouseout(function() {
          thereId.forEach(function(item) {
            $('.humanhover .'+item).removeClass('active');
          });
        });
      } else {
        var thiHuh = $(this).data('huho');
        if(thiHuh) {
          $(this).mouseover(function() {
            $('.humanhover .'+id).addClass('active');
            $("a[data-human="+thiHuh+"]").addClass('active');
          });
          $(this).mouseout(function() {
            $('.humanhover .'+id).removeClass('active');
            $("a[data-human="+thiHuh+"]").removeClass('active');
          });
        } else {
          hoverHuman(this, id);
        }
        
        
      }
      

    });
    $(document).on('click', '#map_human area, .atc-group a', function(e) {
      e.preventDefault();
      $(".atc-group > a").removeClass('active_a');
      $(".humanhover > div").removeClass('active_a');
      if($(this).parent().hasClass('atc-group')) {
        $(this).addClass('active_a');
        $('.humanhover .'+$(this).data('human')).addClass('active_a');
        if($(this).data('massh')) {
          var thereId = $(this).data('massh').split(',');
          thereId.forEach(function(item) {
            $('.humanhover .'+item).addClass('active_a');
          });
        }

      } else {
        $('.humanhover .'+$(this).attr('id')).addClass('active_a');

        var thiHuh = $(this).data('huho');
        if(thiHuh) {
           $("a[data-human="+thiHuh+"]").addClass('active_a');
        } else {
           
           $("a[data-human="+$(this).attr('id')+"]").addClass('active_a');
        }

      }
    });
    $(".search-icon").on('click', function(event) {
      event.preventDefault();
      body.addClass('language-search-open');
    });
    
});

$(document).click(function(e) {
        var div = $(".login-language .search, .search-icon");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
           $('body').removeClass('language-search-open');
        }
    });

function hoverHuman(get, id) {
  $(get).mouseover(function() {
    $('.humanhover .'+id).addClass('active');
    $("a[data-human="+id+"]").addClass('active');
  });
  $(get).mouseout(function() {
    $('.humanhover .'+id).removeClass('active');
    $("a[data-human="+id+"]").removeClass('active');
  });
}
