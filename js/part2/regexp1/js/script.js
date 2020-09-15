window.onload = function () {
    document.querySelector(`form[name="reg"]`).addEventListener("submit",getFormInfo);

    let re =[
        ["username", /^[a-z]{2,10}$/],
        ["city", /^[0-9]{5,10}$/]
    ];

    let textElements = document.querySelectorAll(`form[name="reg"] input, form[name="reg"] textarea`);
    textElements.forEach("input",blurFn)


    function blurFn() {


        let re = getRegExp(this.name);

        if(!re.test(this.value)) {
            showError(this,"Что-то не так");
        }
        else {
            removeError(this);
        }
    }

    function getRegExp(name) {
        let data = [];
        re.forEach((item)=>{
            if(name==item[0]) data.push(item[1]);
        })

        return data[0];
    }


    function showError(elem,message) {

        if(elem.nextElementSibling==null){
            let elemError = document.createElement("span");
                elemError.innerHTML = message;
                elemError.className="error-text";
                elem.parentElement.append(elemError);
                elem.className="form-error"

                //элемент_формы.focus()
                //элемент_формы.blur()
        }

        elem.focus();

    }
    
    function removeError(elem) {
        elem.classList.remove("form-error");
        elem.nextElementSibling!=null ? elem.nextElementSibling.remove() : null;
    }


}