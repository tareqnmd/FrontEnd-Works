$(document).ready(function () {
	// Alert for code copied //
	$(".color_box").click(function () {
		$(".msg-dialog")
			.fadeIn("500")
			.delay(500)
			.queue(function (n) {
				$(this).fadeOut("500");
				n();
			});
	});

	//Script for copy color code //
	$("div#main").on("click", "div", function () {
		var self = $(this),
			text = self.text(),
			$temp = $("<input>");

		$(".color_code").append($temp);
		$temp.val(text).select();

		document.execCommand("copy");
		$temp.remove();
	});
});
