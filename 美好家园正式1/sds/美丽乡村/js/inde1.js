	var html = document.getElementsByTagName("html")[0];
window.onload = window.onresize = function() {
		        var width = document.documentElement.clientWidth || document.body.clientWidth;
		        var f = (100/640) * width; //先有个比例这里用的20/520，的比例
		        html.style.fontSize = f + 'px';

		    
	jQuery(function ($){
		// 头部透明度切换函数
			var arr=['五谷杂粮你知道多少1','五谷杂粮你知道多少2','五谷杂粮你知道多少3','五谷杂粮你知道多少4','五谷杂粮你知道多少5']
			var n=0;
			var tim=null;

			$('.jianj').get(0).innerHTML=arr[n];
			function runr(){
				n++;
				if(n>$('.nav li').length-1){
					n=0;
				}

				$('.jianj').get(0).innerHTML=arr[n];
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
				$('.jianj').get(0).innerHTML=arr[n];
				$('.nav li').eq(n).addClass('ff').siblings().removeClass();
			}
			// touchstart     // touches
			// touchmove      // touches
			// touchend       // changedTouches
			var stax,stay,endx,endy;
			var move=true;
			$('#lo').get(0).addEventListener('touchstart',function (event){
				event.stopPropagation()
				var tou=event.touches[0];
				stax=tou.clientX;
				stay=tou.clientY;
				
			},false);
			$('#lo').get(0).addEventListener('touchmove',function (event){
				move=false;
				event.preventDefault();
			},false);
			$('#lo').get(0).addEventListener('touchend',function (event){
				event.stopPropagation()
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
//			// 头条切换函数
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
			//swiper tab切换
			var tabsSwiper = new Swiper('.swiper-container',{
				speed:500,
				onSwiperCreated:function(){
					var H=$(".content-slide").eq(0).height();
				
					$(".swiper-wrapper").css('height', H+'px');
					$(".swiper-slide").css('height', H+'px');
				},
				onSlideChangeStart: function(swiper){
					var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
					
					$(".tabs .active").removeClass('active');
					$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
					$(".swiper-slide").css('height', H + 'px');
					$(".swiper-wrapper").css('height', H + 'px');
					$(".tabs .active").removeClass('active');
					$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
				}
			});
			
			$(".tabs a").on('touchstart mousedown',function(e){
				e.preventDefault()
				$(".tabs .active").removeClass('active');
				$(this).addClass('active');
				tabsSwiper.swipeTo($(this).index());
			});
			
			$(".tabs a").click(function(e){
				e.preventDefault();
			});
		}) 
		/****点击下载****/
		$(".as").eq(0).on('touchstart mousedown',function(e){
					var ua = navigator.userAgent.toLowerCase();
			    if (/iphone|ipad|ipod/.test(ua)) {
			      $(".as").eq(0).attr("href","http://a.app.qq.com/o/simple.jsp?pkgname=com.fosung.meihaojiayuanlt"); 
			    } else {
			          $("a").attr("href","https://www.pgyer.com/Otv8"); 
			    }
		});
		//点击隐藏
		$('.cha').eq(0).on('touchstart mousedown',function(e){
			$(this).parent().hide();
		})	
		
}