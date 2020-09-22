window.onload = function () {

    if(checkCookie("user")) {
        auth.remove();
        let user_name=getCookie();
        let div = document.createElement("div");
            div.innerHTML=`Привет, ${user_name}`;


        let exit = document.createElement("span");
            exit.addEventListener("click",exitUser);
            exit.innerHTML=`Выйти`;
            document.body.append(div);
            document.body.append(exit);

    }

    else {
        auth.addEventListener("submit", getFormData);

    }

    function exitUser() {
        setCookie("user","", 0);
        location.reload();
    }

    function checkCookie(name) {
        return document.cookie.indexOf(name)!=-1 ? true : false;
    }

    function setCookie(name, val , expires) {
        document.cookie=`${name}=${val};max-age=${expires * 3600}`;
    }

    function getCookie() {
        return document.cookie.split("=")[1];
    }

    function getFormData(e) {
        e.preventDefault()

        if(!checkCookie("user")) {
            setCookie("user",document.querySelector("#user_name").value,1);
            location.reload();
        }
        else {
            console.log(getCookie());
        }
    }
}