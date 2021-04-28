var btn = document.getElementById("btn");
var ha2 = document.getElementById("height-abs-2");
btn.addEventListener("click", () => {
	if (ha2.style.height === "500px") {
		ha2.style.height = "0px";
	} else {
		ha2.style.height = "500px";
	}
});
