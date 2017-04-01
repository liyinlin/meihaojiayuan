	var html = document.getElementsByTagName("html")[0];
		    window.onload = window.onresize = function() {
		        var width = document.documentElement.clientWidth || document.body.clientWidth;
		        var f = (100/640) * width; //先有个比例这里用的20/520，的比例
		        html.style.fontSize = f + 'px';
 }
		    
	jQuery(function ($){
		// 头部透明度切换函数
			var n=0;
			var tim=null;
			console.log($('.nav li').length)
			function runr(){
				n++;
				if(n>$('.nav li').length-1){
					n=0;
				}
				console.log(n)
				$('.L-head a').eq(n).fadeIn().siblings().fadeOut();
				$('.nav li').eq(n).addClass('ff').siblings().removeClass();
			}
			tim=setInterval(runr,2000);
			function runl(){
				n--;
				if(n<0){
					n=$('.nav li').length-1;
				}
				$('.L-head a').eq(n).fadeIn().siblings().fadeOut();
				$('.nav li').eq(n).addClass('ff').siblings().removeClass();
			}
			// touchstart     // touches
			// touchmove      // touches
			// touchend       // changedTouches
			var stax,stay,endx,endy;
			var move=true;
			$('#lo').get(0).addEventListener('touchstart',function (event){
				var tou=event.touches[0];
				stax=tou.clientX;
				stay=tou.clientY;
				
			},false);
			$('#lo').get(0).addEventListener('touchmove',function (event){
				move=false;
				event.preventDefault();
			},false);
			$('#lo').get(0).addEventListener('touchend',function (event){
				if(move==true){
					return false;
				}
				var tous=event.changedTouches[0];
				endx=tous.clientX;
				endy=tous.clientY;
				if(stax-endx<0){
					clearInterval(tim);
					runl();
					tim=setInterval(runl,2000);
				}else {
					clearInterval(tim);
					runr();
					tim=setInterval(runr,2000);
				}
			},false);
			// 头条切换函数
			var ln=0;
			var tim2=null;
			$('.xinxi li').eq(ln).show();
			tim2=setInterval(function (){
				ln++;
			
				if(ln>$('.xinxi li').length-1){
					ln=0;
				}
				
				$('.xinxi li').eq(ln).show().siblings().hide();
			},3000)
		})