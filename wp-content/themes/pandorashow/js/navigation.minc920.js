!function(e){e.fn.GenerateMobileMenu=function(t){var a=e.extend({menu:".main-navigation"},t);e(a.menu).length&&e(this).on("click",function(t){return t.preventDefault(),e(this).closest(a.menu).toggleClass("toggled"),e(this).closest(a.menu).attr("aria-expanded","true"===e(this).closest(a.menu).attr("aria-expanded")?"false":"true"),e(this).toggleClass("toggled"),e(this).children("i").toggleClass("fa-bars").toggleClass("fa-close"),e(this).attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false"),!1})}}(jQuery),jQuery(document).ready(function(e){e("#site-navigation .menu-toggle").GenerateMobileMenu(),e(document).on("click","nav .dropdown-menu-toggle",function(t){t.preventDefault();var a=e(this),n=e(".menu-toggle"),i=e(".slideout-navigation");return(n.is(":visible")||"visible"==i.css("visibility"))&&(a.closest("li").toggleClass("sfHover"),a.parent().next(".children, .sub-menu").toggleClass("toggled-on"),a.attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false")),!1})});