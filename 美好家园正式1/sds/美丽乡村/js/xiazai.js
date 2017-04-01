/****点击下载****/
	$(".as").eq(0).on('touchstart mousedown',function(e){
				var ua = navigator.userAgent.toLowerCase();
		    if (/iphone|ipad|ipod/.test(ua)) {
		      $(".as").eq(0).attr("href","http://a.app.qq.com/o/simple.jsp?pkgname=com.fosung.meihaojiayuanlt"); 
		    } else {
		          $("a").attr("href","https://www.pgyer.com/Otv8"); 
		    }
	});
	$('.cha').eq(0).on('touchstart mousedown',function(e){
		$(this).parent().hide();
	})
	
