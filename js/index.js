const links = document.querySelectorAll("nav ul li a");
let urlHome = "./html-partials/home.html";
let urlportfolio = "./html-partials/portfolio.html";
let container = document.querySelector(".load");
let errorContainer = document.querySelector(".error");

/*function loadContent(urlValue) {
	
	//here is where you want to use your fetch methos
	fetch(urlValue)
		.then()
		.then()
		.catch();
}*/

function pageLoad () {
	fetch(urlHome)
		.then(function (response) {
			if (response.statusText === "OK") {
				return response.text();
			}

			throw new Error(response.statusText)
		})
		.then(function (data) {
			// use the partials
			container.innerHTML = data;
		})
		.catch(function (err) {
			errorContainer.textContent = `${err.name}: ${err.message}`;
		});
}

function handleClick(ev) {
	//preventing the default behaviour of the link tag!
	ev.preventDefault();
	
	let currentLink = ev.target;
	
	let lable = currentLink.textContent;
	
	if(lable === "Home") {
		fetch(urlHome)
		.then(function (response) {
			if (response.statusText === "OK") {
				return response.text();
			}

			throw new Error(response.statusText)
		})
		.then(function (data) {
			// use the partials
			container.innerHTML = data;
		})
		.catch(function (err) {
			errorContainer.textContent = `${err.name}: ${err.message}`;
		});
	   
	   }
	
	if(lable === "Portfolio") {
		fetch(urlportfolio)
		.then(function (response) {
			if (response.statusText === "OK") {
				return response.text();
			}

			throw new Error(response.statusText)
		})
		.then(function (portfolio) {
			// use the partials
			container.innerHTML = portfolio;
		})
		.catch(function (err) {
			errorContainer.textContent = `${err.name}: ${err.message}`;
		});
	   
	   }
	
		
	
}

for (let link of links) {
	link.addEventListener("click", handleClick);
}

