var wpcr_old_btn_val = 'Оставить отзыв';
var wpcr_req = [];

function wpcr_strpos (haystack, needle, offset) {
  var i = (haystack+'').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}

function wpcr_ucfirst(str) {
    var firstLetter = str.slice(0,1);
    return firstLetter.toUpperCase() + str.substring(1);
}

function wpcr_del_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

function wpcr_jump_to() {
    jQuery(document).ready(function(){
        window.location.hash="wpcr_respond_1";
    });
}

function valwpcrform_2(newid,oldid,err) {
    
    var myval = '';
    
    for (var i in wpcr_req) {
        var col = wpcr_req[i];
        if (newid === col && jQuery("#"+oldid).val() === "") {			
            var nice_name = jQuery('label[for="'+oldid+'"]').html();
            nice_name = nice_name.replace(":","");
            nice_name = nice_name.replace("*","");
            nice_name = jQuery.trim(nice_name);
            err.push("You must include your "+nice_name+".");
        }
    }
    
    if (newid === 'femail' && jQuery("#"+oldid).val() !== "") {
        myval = jQuery("#"+oldid).val();
        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(myval) == false) {
            err.push("Ошибка в Email адресе.");
        }
    }
    
    if (newid === 'fwebsite' && jQuery("#"+oldid).val() !== "") {
        myval = jQuery("#"+oldid).val();
        if (/^\S+:\/\/\S+\.\S+.+$/.test(myval) == false) {
            err.push("%c3%90%c2%9e%c3%91%c2%88%c3%90%c2%b8%c3%90%c2%b1%c3%90%c2%ba%c3%90%c2%b0%20%c3%90%c2%b2%20%c3%91%c2%81%c3%90%c2%b0%c3%90%c2%b9%c3%91%c2%82%c3%90%c2%b5.%20%c3%90%c2%90%c3%90%c2%b4%c3%91%c2%80%c3%90%c2%b5%c3%91%c2%81%20%c3%90%c2%b4%c3%90%c2%be%c3%90%c2%bb%c3%90%c2%b6%c3%90%c2%b5%c3%90%c2%bd%20%c3%90%c2%bd%c3%90%c2%b0%c3%91%c2%87%c3%90%c2%b8%c3%90%c2%bd%c3%90%c2%b0%c3%91%c2%82%c3%91%c2%8c%c3%91%c2%81%c3%91%c2%8f%20%c3%91%c2%81%20http_/index.html");
        }
    }
    
    if (newid === "ftext" && jQuery("#"+oldid).val().length < 30) {
        err.push("Извините, очень короткий отзыв, напишите немного больше (минимум 30 знаков).");
    }
    if (newid === "fconfirm2" && jQuery("#fconfirm2").is(":checked") === false) {
        err.push("Подтвердите, что вы не спамер.");
    }
    if (newid === "fconfirm1" && jQuery("#fconfirm1").is(":checked") ) {
        err.push("Подтвердите, что вы не спамер. Code 2.");
    }
    if (newid === "fconfirm3" && jQuery("#fconfirm3").is(":checked") ) {
        err.push("Подтвердите, что вы не спамер. Code 3.");
    }
    
    return err;
}

function valwpcrform() {	
    var frating = parseInt(jQuery("#frating").val(), 10);
    if (!frating) { frating = 0; }
    
    var err = [];
    
    jQuery("#wpcr_commentform").find('input, textarea').each(function(){
        var oldid = jQuery(this).attr('name');
        var newid = oldid;
        var pos = wpcr_strpos(oldid,'-',0) + 1;
        if (pos > 1) {
            newid = oldid.substring(pos);
        } else {
            newid = oldid;
        }
        err = valwpcrform_2(newid,oldid,err);
    });
    
    if (frating < 1 || frating > 5) {
        err.push("Пожалуйста, поставьте оценку от 1 до 5.");
    }
    
    if (err.length) {
        var err2 = err.join("\n");
        alert(err2);
        jQuery("#wpcr_table_2").find("input:text:visible:first").focus();
        return false;
    }

	var f = jQuery("#wpcr_commentform");
	var newact = document.location.pathname + document.location.search;
	f.attr("action",newact).removeAttr("onsubmit");
    return true;
}

function wpcr_set_hover() {
    jQuery("#wpcr_commentform .wpcr_rating").unbind("click",wpcr_set_hover);
    wpcr_onhover();
}

function wpcr_onhover() {    
    jQuery("#wpcr_commentform .wpcr_rating").unbind("click",wpcr_set_hover);
    jQuery("#wpcr_commentform .base").hide();
    jQuery("#wpcr_commentform .status").show();
}

function wpcr_showform() {
    jQuery("#wpcr_respond_2").slideToggle();
    if (wpcr_old_btn_val == 'Оставить отзыв') {
        wpcr_old_btn_val = jQuery("#wpcr_button_1").html();
        jQuery("#wpcr_button_1").html('Оставить отзыв');
    } else {
        jQuery("#wpcr_button_1").html(wpcr_old_btn_val);
        wpcr_old_btn_val = 'Оставить отзыв';
    }
    jQuery("#wpcr_table_2").find("input:text:visible:first").focus();
}

function wpcr_init() {
    
    jQuery("#wpcr_button_1").click(wpcr_showform);    
    jQuery("#wpcr_commentform").submit(valwpcrform);

    jQuery("#wpcr_commentform .wpcr_rating a").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var wpcr_rating = jQuery(this).html();
            var new_w = 20 * wpcr_rating + "%";

            jQuery("#frating").val(wpcr_rating);
            jQuery("#wpcr_commentform .base").show();
            jQuery("#wpcr_commentform .average").css("width",new_w);
            jQuery("#wpcr_commentform .status").hide();

            jQuery("#wpcr_commentform .wpcr_rating").unbind("mouseover",wpcr_onhover);
            jQuery("#wpcr_commentform .wpcr_rating").bind("click",wpcr_set_hover);
    });

    jQuery("#wpcr_commentform .wpcr_rating").bind("mouseover",wpcr_onhover);
}

jQuery(document).ready(wpcr_init);