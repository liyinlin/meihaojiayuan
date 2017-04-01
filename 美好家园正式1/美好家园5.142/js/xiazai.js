/****点击下载****/
$(function (){
	$(".ly-as").on('touchstart mousedown',function(e){
		$(".ly-as").attr("href","http://jiayuan.meihaojy.com/app.php?s=index/down"); 
	});
	$('.cha').eq(0).on('touchstart mousedown',function(e){
		$(this).parent().hide();
	})
	$(".ksweus").on("touchstart", "li .dj", function(event){
	    location.href='http://jiayuan.meihaojy.com/app.php?s=index/down';
	});
	$(".ksweus").on("touchstart", "li .imks", function(event){
	    location.href='http://jiayuan.meihaojy.com/app.php?s=index/down';
	});
})
	

