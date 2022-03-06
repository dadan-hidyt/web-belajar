(function(d,w){
	let menuToggle = d.querySelector("#toggle");
	let menuWebsite = d.querySelector("#menu-website")
	menuToggle.onclick = function(){
		menuWebsite.classList.toggle("buka");
	}
})(document,window)