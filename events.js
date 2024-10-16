const CO = document.getElementById("co");
const NE = document.getElementById("ne");
const CH = document.getElementById("ch");

CO.style.display = "flex"
NE.style.display = "none"
CH.style.display = "none"

const PerfilIcon = document.getElementById("co").children[0];
PerfilIcon.addEventListener("click", () => {
	let panel = ["panel", "sub-panel"];
	
	let rootSet = document.documentElement;
	let rootGet = getComputedStyle(rootSet);
	let red = 0, green = 0, blue = 0;
	let all = "";

	function getRGB(){
		red   = parseInt(all.slice(1, 3), 16);
		green = parseInt(all.slice(3, 5), 16);
		blue  = parseInt(all.slice(5), 16);
	}

	for(let i = 0; i < 2; i++){
		all = rootGet.getPropertyValue("--color-" + panel[i]);
		if((i == 0 && all.slice(1, 3) == "ce") || (i == 1 && all.slice(1, 3) == "83")) continue;
		getRGB()

		red   = red   + 4;
		green = green - 2;
		blue  = blue  - 1;

		if(red   > 255) red   = 255;
		if(green < 048) green = 048;
		if(blue  < 032) blue  = 032;

		all = "#" + red.toString(16) + green.toString(16) + all.slice(5);
		rootSet.style.setProperty("--color-" + panel[i], all);
	}

	all = rootGet.getPropertyValue("--color-link");
	if(all.slice(1, 3) != "8d"){
		getRGB();

		red   = red   - 2;
		green = green + 3;
		blue  = blue  - 1;

		if(red   < 064) red   = 064;
		if(green > 255) green = 255;
		if(blue  < 048) blue  = 048;

		all = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
		rootSet.style.setProperty("--color-link", all);
	}
});

(function(){
	let subTitles = [
		"Hello world!",
		"Try a fire resistance potion",
		"Very SUS",
		"Why are you reading this?",
		"Like a duck",
		"Any and all donation is welcome :D",
		"*quak*",
		"This is a easter egg!",
		"The floor is lava!",
		"HTML and CSS are not programming languages!",
		"DON'T TRY CSS!!",
		"This place is \"strange\"...",
		"It is only one page",
		"C is a big mother",
		"Lua is nice",
		"DOOM 1993!",
		"DOM 1990!",
	];

	let id = Math.floor(Math.random() * subTitles.length);
	const title = document.getElementById("page-title");
	title.textContent = title.textContent + ": " + subTitles[id];
})();
