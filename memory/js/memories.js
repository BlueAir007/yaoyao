$(function() {
    $('#dowebok').fullpage({
        afterLoad: function(anchorLink, index) {
            if (index == 9) {
                clearInterval(secDown);
                setTimeout(function() {
                    window.location.href = '../birthday/birthday.html';
                }, 8000);
            }
        }
    });

    var secDown = setInterval(function() {
        $.fn.fullpage.moveSectionDown();
    }, 1000 * 8);
});