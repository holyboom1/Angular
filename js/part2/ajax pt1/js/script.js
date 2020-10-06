window.onload = function () {
	let selectvalue="bun"
	function ce(name="div",text,event,fn){
		let x = document.createElement(name);
		if(text!=undefined){
			x.innerHTML=text;
		}

		if(event!=undefined){
			x.addEventListener(event,fn);
		}

		return x;
	}
	function init() {
		let select = ce("select", "", "change", changeSelect);
		select.name = "valuta";
		let option1 = ce("option", "$")
		let option2 = ce("option", "eur")
		let option3 = ce("option", "bun")
		option3.setAttribute("selected", "");
		select.append(option1);
		select.append(option2);
		select.append(option3);
		document.body.append(select);
	}
	init();
	function getvalue(value){
	console.log(value)
		if (value=="$"){
			gender(rendercours(145));
		}
		if (value=="eur"){
			gender(rendercours(292))
		}
		if (value=="bun") {
			gender(0)
		}
		function gender(x) {
			let items = new XMLHttpRequest();
			items.open("GET", "/data/items.json", true);
			items.send();
			items.onload = function () {
				let arr = JSON.parse(items.response)
				arr.forEach(item => {
					let main = document.createElement("div")
					main.id = "app"
					let div = document.createElement("div");
					let title = document.createElement("p");
					let preview = document.createElement("p");
					let price = document.createElement("p");
					title.innerHTML = item.title;
					preview.innerHTML = item.preview;

					price.innerHTML = `цена: ${item.price}*${x} ${selectvalue}`;
					price.className = "price"
					div.className = "item";
					div.append(title);
					div.append(preview);
					div.append(price);
					document.body.append(main);
					document.querySelector("#app").append(div);

				})
			}
		}
	}
	getvalue(selectvalue);
	function changeSelect() {
			console.log(this.value)
			selectvalue=this.value
			document.getElementById("app").remove()
			getcours(this.value);
			getvalue();

			console.log(222)
	}

	function rendercours(valueID) {
		let currency =  new XMLHttpRequest();
		currency.open("GET",`https://www.nbrb.by/api/exrates/rates/${valueID}`, true);
		currency.send();
		currency.responseType="json";
		currency.onload = function(){
			console.log(currency.response)
			console.log(currency.response.Cur_ID)
			console.log(currency.response.Cur_Name)
			console.log(currency.response.Cur_OfficialRate)
			return currency.response.Cur_OfficialRate
		}

	}
}