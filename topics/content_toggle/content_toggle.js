//  content toggle

$(document).ready(function () {
	$(".content-menu > a").click(function (event) {
		event.preventDefault();
		var activeContent = $(".content-menu > a.active").attr("href");
		var activeMenu = $(".content-menu > a.active");
		activeMenu.removeClass("active");
		$(this).addClass("active");
		$(activeContent).removeClass("active");
		console.log(activeContent);
		var targetContent = $(this).attr("href");
		console.log(targetContent);
		$(targetContent).addClass("active");
	});
});