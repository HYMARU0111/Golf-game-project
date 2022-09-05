$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

$(document).scroll(function () {
    $("#navbar").toggleClass("scrolled", $(this).scrollTop() > $("#navbar").height());
});

$(document).scroll(function () {
    if ($(this).scrollTop() > $('.about').offset().top) {
        $("#playnowbutton").css("visibility", "visible")
    } else {
        $("#playnowbutton").css("visibility", "hidden")
    }
});


$("li.credit")
    .mouseenter(function () {
        $("img", this).css("width", "120px");
    })
    .mouseleave(function () {
        $("img", this).css("width", "100px");
    }
);

$(document).ready(function () {
    $(document).mousemove(function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        $('.cursor').css({
            left: mouseX + "px",
            top: mouseY + "px"
        })
    })
})

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')
);
    
