//Adds "active" class to main nav
$(function(){
	$(".main-nav a").click(function()
		{
			$("a").removeClass("active");
			$(this).addClass("active");
	});
});

