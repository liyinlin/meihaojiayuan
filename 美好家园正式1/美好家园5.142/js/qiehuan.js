// 头条切换
		 function autoScroll(obj){  
		 	$(obj).find("ul").animate({  
		 		marginTop : "-0.32rem"  
		 	},500,function(){  
		 		$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
		 	})  
		 }  
		 $(function(){  
		 	setInterval('autoScroll(".apple")',3000);
		 }) 