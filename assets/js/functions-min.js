$(document).ready(function(){function e(e){var t=$(".side-nav").find(".is-active"),l=$(".side-nav").children().index(t),r=$(".side-nav").children().length-1,d=0;"swipeup"===e.type||40===e.keyCode||e>0?l!==r?(d=l+1,i(d),s(l,d,r)):(i(d),s(l,d,r)):("swipedown"===e.type||38===e.keyCode||0>e)&&(0!==l?(d=l-1,i(d),s(l,d,r)):(d=r,i(d),s(l,d,r)))}function i(e){$(".side-nav, .outer-nav").children().removeClass("is-active"),$(".side-nav").children().eq(e).addClass("is-active"),$(".outer-nav").children().eq(e).addClass("is-active")}function s(e,i,s){$(".main-content").children().removeClass("section--is-active"),$(".main-content").children().eq(i).addClass("section--is-active"),$(".main-content .section").children().removeClass("section--next section--prev"),e===s&&0===i||0===e&&i===s?$(".main-content .section").children().removeClass("section--next section--prev"):i>e?$(".main-content").children().eq(e).children().addClass("section--next"):$(".main-content").children().eq(e).children().addClass("section--prev"),0!==i&&i!==s?$(".header--cta").addClass("is-active"):$(".header--cta").removeClass("is-active")}function t(){$(".slider--prev, .slider--next").click(function(){var e=$(this),i=$(".slider").find(".slider--item-left"),s=$(".slider").children().index(i),t=$(".slider").find(".slider--item-center"),l=$(".slider").children().index(t),r=$(".slider").find(".slider--item-right"),d=$(".slider").children().index(r),a=$(".slider").children().length,n=$(".slider--item-left"),m=$(".slider--item-center"),c=$(".slider--item-right"),o=$(".slider--item");$(".slider").animate({opacity:0},400),setTimeout(function(){e.hasClass("slider--next")?a-1>s&&a-1>l&&a-1>d?(n.removeClass("slider--item-left").next().addClass("slider--item-left"),m.removeClass("slider--item-center").next().addClass("slider--item-center"),c.removeClass("slider--item-right").next().addClass("slider--item-right")):s===a-1?(o.removeClass("slider--item-left").first().addClass("slider--item-left"),m.removeClass("slider--item-center").next().addClass("slider--item-center"),c.removeClass("slider--item-right").next().addClass("slider--item-right")):l===a-1?(n.removeClass("slider--item-left").next().addClass("slider--item-left"),o.removeClass("slider--item-center").first().addClass("slider--item-center"),c.removeClass("slider--item-right").next().addClass("slider--item-right")):(n.removeClass("slider--item-left").next().addClass("slider--item-left"),m.removeClass("slider--item-center").next().addClass("slider--item-center"),o.removeClass("slider--item-right").first().addClass("slider--item-right")):0!==s&&0!==l&&0!==d?(n.removeClass("slider--item-left").prev().addClass("slider--item-left"),m.removeClass("slider--item-center").prev().addClass("slider--item-center"),c.removeClass("slider--item-right").prev().addClass("slider--item-right")):0===s?(o.removeClass("slider--item-left").last().addClass("slider--item-left"),m.removeClass("slider--item-center").prev().addClass("slider--item-center"),c.removeClass("slider--item-right").prev().addClass("slider--item-right")):0===l?(n.removeClass("slider--item-left").prev().addClass("slider--item-left"),o.removeClass("slider--item-center").last().addClass("slider--item-center"),c.removeClass("slider--item-right").prev().addClass("slider--item-right")):(n.removeClass("slider--item-left").prev().addClass("slider--item-left"),m.removeClass("slider--item-center").prev().addClass("slider--item-center"),o.removeClass("slider--item-right").last().addClass("slider--item-right"))},400),$(".slider").animate({opacity:1},400)})}function l(){$(".work-request--information input").focusout(function(){var e=$(this).val();""===e?$(this).removeClass("has-value"):$(this).addClass("has-value"),window.scrollTo(0,0)})}var r=!0,d=null;$(this).on("mousewheel DOMMouseScroll",function(i){if(!$(".outer-nav").hasClass("is-vis")){i.preventDefault();var s=i.originalEvent.wheelDelta?-i.originalEvent.wheelDelta:20*i.originalEvent.detail;s>50&&r?(r=!1,clearTimeout(d),d=setTimeout(function(){r=!0},800),e(1)):-50>s&&r&&(r=!1,clearTimeout(d),d=setTimeout(function(){r=!0},800),e(-1))}}),$(".side-nav li, .outer-nav li").click(function(){if(!$(this).hasClass("is-active")){var e=$(this),t=e.parent().find(".is-active"),l=e.parent().children().index(t),r=e.parent().children().index(e),d=$(this).parent().children().length-1;i(r),s(l,r,d)}}),$(".cta").click(function(){var e=$(".side-nav").find(".is-active"),t=$(".side-nav").children().index(e),l=$(".side-nav").children().length-1,r=l;i(l),s(t,r,l)});var a=document.getElementById("viewport"),n=new Hammer(a);n.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),n.on("swipeup swipedown",function(i){e(i)}),$(document).keyup(function(i){$(".outer-nav").hasClass("is-vis")||(i.preventDefault(),e(i))}),t(),l()});