!function(e){e.fn.GenerateDropdownMenu=function(o){var n,t,i,s=e.extend({transition:"slide",transition_speed:150,open_delay:300,close_delay:300},o);if(n=e(this),t=e(".menu-toggle"),i=e(".slideout-navigation"),n.attr("aria-haspopup","true"),n.children("ul").css({display:"none",opacity:0}),over=function(){if(!t.is(":visible")){var o=e(this);o.prop("hoverTimeout")&&o.prop("hoverTimeout",clearTimeout(o.prop("hoverTimeout"))),o.prop("hoverIntent",setTimeout(function(){"slide"==s.transition?o.children("ul").slideDown(s.transition_speed).animate({opacity:1},{queue:!1,duration:"fast"}).css("display","block"):o.children("ul").fadeIn(s.transition_speed).css("display","block"),o.addClass("sfHover")},s.open_delay))}},out=function(){if(!t.is(":visible")){var o=e(this);o.prop("hoverIntent")&&o.prop("hoverIntent",clearTimeout(o.prop("hoverIntent"))),o.prop("hoverTimeout",setTimeout(function(){o.children("ul").fadeTo(10,0,function(){o.children("ul").css("display","none")}),o.removeClass("sfHover")},s.close_delay))}},n.on("mouseenter",over).on("mouseleave",out),n.on("focusin",over).on("focusout",out),e(".dropdown-menu-toggle").on("click",function(){if(!t.is(":visible")&&"visible"!=i.css("visibility")){var o=e(this).parent().attr("href");"undefined"!=typeof o&&(window.location.href=e(this).parent().attr("href"))}}),"ontouchstart"in document.documentElement){if(t.is(":visible"))return;n.each(function(){var o=e(this);this.addEventListener("touchstart",function(e){1===e.touches.length&&(e.stopPropagation(),o.hasClass("sfHover")||((e.target===this||e.target.parentNode===this)&&e.preventDefault(),n.removeClass("sfHover"),o.addClass("sfHover"),o.children("ul").css({display:"block",opacity:1}),document.addEventListener("touchstart",closeDropdown=function(e){e.stopPropagation(),o.removeClass("sfHover"),o.children("ul").css({display:"none",opacity:0}),document.removeEventListener("touchstart",closeDropdown)})))},!1)})}e.fn.GenerateDropdownMenu.destroy=function(){n.children("ul").css("display",""),n.unbind("mouseenter mouseleave focusin focusout")}}}(jQuery),jQuery(document).ready(function(e){e(".sf-menu .menu-item-has-children").GenerateDropdownMenu()}),function(e){e.fn.superfish=function(){return!1}}(jQuery,window);