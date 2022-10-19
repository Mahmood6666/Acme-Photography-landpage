$(".view-work").on("click", function () {
	const images = $("#our-work").position().top;
	$("html,body").animate(
		{
			scrollTop: images,
		},
		900
	);
});
