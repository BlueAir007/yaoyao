$('#login-button').click(function(event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    //修改密码请改此处
    if (userName == "111" && pwd == "1127") {
        event.preventDefault();
        $('form').fadeOut(500);
        $('.container').fadeOut(500);
        requestFullScreen();
        setTimeout(function() {
            location.href = "BirthdayCake.html";
        }, 2000);
    } else {
        alert("密码错误啦!");
    }
});

function requestFullScreen(element) {
    var element = document.documentElement;
    var requestMethod = element.requestFullScreen || //W3C
        element.webkitRequestFullScreen || //Chrome等
        element.mozRequestFullScreen || //FireFox
        element.msRequestFullScreen; //IE11
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}