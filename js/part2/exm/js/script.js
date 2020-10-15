window.onload = function () {
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    var n = randomInteger(5,5);
    var array = [];
    for(let i=0;i<n; i++){
        array.push(randomInteger(1,9));

    }
    let temp="";
    let temp1="";
    k=0;
    k1=0;
    //[3, 7, 2, 1, 3, 6, 6, 6, 8, 4, 5, 9]

    for (let i=0; i<array.length;i++){
       if (array[i+1]>array[i]){
           temp+=array[i];
           temp+=array[i+1];
           i++
           k++

        }
       else if (k>k1){
           temp1=temp;
           k1=k;
           temp=""
           k=0;
       }

       }
        console.log (temp);

    console.log (array, temp, temp1)

    let x=prompt("введите слово","sweqwe")
    arr=x.split("");
    for (let i=0; i<arr.length;i++){
        for (let k=0; k<i;k++){
            document.body.innerText+=".."
        }
        document.body.innerText+=arr[i]+"\n"

    }
    console.log(arr)
}