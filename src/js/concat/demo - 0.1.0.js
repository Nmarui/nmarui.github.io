/*!demo - 0.1.0-2020-03-20 *///验证码点击后效果
var wait = 60;
function time(object){
    if(wait===0){
    object.removeAttribute("disabled");
    wait = 60;
    }
    else{
    object.setAttribute("disabled",true);
    wait--;
    object.value = wait + "秒后重新发送";
    setTimeout(
        function(){
            time(object);
        },1000);
    }
}
document.getElementById("getting").onclick = function(){time(this);};
//验证手机号
function isPoneAvailable($pone) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test($pone.val())) {
        return false;
    } else {
        return true;
    }
}
//检验用户名和密码
function check() {
    var user = document.getElementById("user");
    var password = document.getElementById("password").value;

    var userMsg = document.getElementById("userMsg");
    var passwordMsg = document.getElementById("passwordMsg");

    var length = user.value.length;
    if(length > 14 ) {
        userMsg.innerText = "用户名长度不能超过7个汉字或14个字符";
    } else {
        userMsg.innerText = "";
    }

    if(password.length < 6 || password.length > 14) {
        passwordMsg.innerText = "密码必须在6-14之间";
    } else  {
        passwordMsg.innerText = "";        
    }
}

