window.onload = function () {
		const wheatheGet=()=> new Promise((resolve, reject)=> {
			let wheather = new XMLHttpRequest();
			wheather.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=minsk&units=metric&lang=ru&appid=9c1b998af157fe0bf1db53040c70da0b", true);
			wheather.responseType = "json";
			wheather.send();
			wheather.onload = () => {
				console.log(wheather.response)
				resolve(wheather.response)

			};
			wheather.onerror = () => {
				reject(wheather.response)

			};
		});
		wheatheGet()
			.then(wheather=>{
				wheather.list.forEach(item=> {
					let date_txt = ce("div", `${item.dt_txt}`);
					let temp_min = ce("div", `${item.main.temp_min}`);
					let temp_feels = ce("div", `${item.main.feels_like}`);
					let temp_max = ce("div", `${item.main.temp_max}`);
					let temp = ce("div", `${item.main.temp}`);
					let description = ce("div", `${item.weather.{0}.description}`);
					let wheather_toTime = ce("div");
					wheather_toTime.append(date_txt);
					wheather_toTime.append(temp_min);
					wheather_toTime.append(temp_feels);
					wheather_toTime.append(temp_max);
					wheather_toTime.append(temp);
					wheather_toTime.append(description);
					document.getElementById("main").append(wheather_toTime);
				})
			})
			.catch(wheather=>console.log(wheather));
		function init() {
			let main=ce("div");
			main.id="main";
			document.body.append(main);
		}
		init();

	function ce(name = "div", text, event, fn) {
		let x = document.createElement(name);
		if (text != undefined) {
			x.innerHTML = text;
		}

		if (event != undefined) {
			x.addEventListener(event, fn);
		}

		return x;
	}
	// const xhr=(params)=> new Promise((resolve, reject)=>{
	// 	//code
	// 	let items = new XMLHttpRequest();
	// 	items.open(params.method,params.url,true);
	// 	items.responseType=params.response!=undefined ? params.response : "json"
	// 	items.send();
	// 	items.onload= function(){
	// 		resolve(items.response);
	// 	}
	//
	// 	items.onerror = function(){
	// 		reject(items.response);
	// 	}
	//
	// });
	//
	//
	// let x = xhr({
	// 	method:"GET",
	// 	url:"/data/items.json"
	// })
	// 	.then(data=>{
	// 		data.forEach(item=>{
	// 			item.price = item.price+20
	// 		})
	//
	// 		return data;
	// 	})
	// 	.then(info=>{
	// 		console.log(info)
	// 		return xhr({
	// 			method:"GET",
	// 			url:"https://www.nbrb.by/api/exrates/currencies"
	// 		})
	// 		/*
	// 		xhr({
	// 			method:"GET",
	// 			url:"https://www.nbrb.by/api/exrates/currencies"
	// 		}).then().catch()*/
	// 	})
	// 	.then(bnrb=>{
	// 		console.log(bnrb)
	// 	})
	// 	.catch(error=>console.log(error))
	//
	// console.log("hello")
	// console.log(x)
	//
	//
	/*
	let items = new XMLHttpRequest();
		items.open("GET","/data/items.json",true);
		items.send();
		items.onload= function(){
			let arr = JSON.parse(items.response)
			arr.forEach(item=>{
				let div = document.createElement("div");
				let title = document.createElement("p");
				let price = document.createElement("p");
					title.innerHTML = item.title;
					price.innerHTML = item.price;
					
					div.className="item";
					div.append(title);
					div.append(price);
					
					document.querySelector("#app").append(div);
				
			})
			
			let currency =  new XMLHttpRequest();
				currency.open("GET","https://www.nbrb.by/api/exrates/currencies", true);
				currency.send();
				currency.responseType="json";
				currency.onload = function(){
					//this => XMLHttpRequest Object
					// currency.response => this.response
					currency.response.forEach(item=>{
						let div = document.createElement("div");
							div.className="item-cur";
							div.innerHTML=`${item.Cur_Code} -- ${item.Cur_Name}`
							
							document.querySelector("#app").append(div);
						
					})
				}
		}*/
}