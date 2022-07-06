$(function () {
	if (!$(".envelope").hasClass("open")) {
		$(".envelope").click(function () {
			var audio = document.getElementById("audio");
			audio.play();
			$(this).removeClass("new").addClass("open");
		});
	}
});
