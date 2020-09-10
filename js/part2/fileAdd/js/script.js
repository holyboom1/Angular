window.onload = function () {

    let countFiles=0;
    document.querySelector(`form[name="addFiles"]`).addEventListener("submit",addFile);

    function ce(name="div",text,event,fn) {
        let x = document.createElement(name);
        if (text != undefined) {
            x.innerHTML = text;

        }return x;
    }

        function addFile(e) {
            e.preventDefault();
            let delFile =  ce("img","","click",delFiles);
            delFile.setAttribute("src","/img/close.png");
            let addElem = ce("input");
            addElem.type="file"
            addElem.name=`File#${countFiles}`;
            this.parentElement.append(addElem);
            countFiles++
            console.log(addElem)
        }

        function delFiles() {

        }

}