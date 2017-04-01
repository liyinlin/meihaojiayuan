var html = document.getElementsByTagName("html")[0];
window.onload = window.onresize = function() {
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var f = (100/640) * width; //先有个比例这里用的20/520，的比例
    html.style.fontSize = f + 'px';
	document.body.style.display='block';
	myScroll = new iScroll('wrapper', {
		snap: true,
		hScrollbar: false});
}	
var tim=null;
if (tim != null) {clearInterval(tim)}

	jQuery(function ($){
			var sds=null;
			var sj=1;
			$.ajaxSetup({ 
			    async : false 
			});
//			function ax1(urls,obj){
//				$.post(urls,obj,function(data) {
//				sds=data;
//				}, "json");
//			}
			function ax2(urls,obj){
			
				$.ajax({
					type: "post",
					url: urls,
					data:obj,
					dataType: "json",
					success: function(data) {
					sds=data;
				
					}
				});
			}
//			进入页面加载的baner等
			var hm2='';
			var hm1='';
			ax2("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.index','page':sj});
			//console.log(sds);
//			$('#lo img').each(function(index){
//				$('#lo img').eq(index).attr('src',sds.data.banner[index].banner_image);
//				$('#lo a').eq(index).attr('href',sds.data.banner[index].banner_url);
//			
//			})
			$.each(sds.data.banner, function(is,obj) {
				if(sds.data.banner[is].banner_type==1){
					hm1+='<a class="show" href=zhiboxiangqing.html?v_id='+sds.data.banner[is].banner_video_id+'>';						
				}else if(sds.data.banner[is].banner_type==3){
					hm1+='<a class="show" href=xiaoxixiangqing.html?message_id='+sds.data.banner[is].banner_news_id+'>';	
				}else {
					hm1+='<a class="show" href=xiaoxixiangqing.html?message_id='+sds.data.banner[is].banner_url+'>';
				}
				hm1+='<img src='+sds.data.banner[is].banner_image+'></a>';
			});
			$('#lo').html(hm1);
			// 头条加载
			$.each(sds.data.news,function (it){
				hm2+='<li>'
				if(sds.data.news[it].message_type==1){
					hm2+='<a class="show" href=toutiaoxiangqing.html?message_id='+sds.data.news[it].message_id+'>';	
				}else if(sds.data.news[it].message_type==2){
					hm2+='<a class="show" href=zhiboxiangqing.html?v_id='+sds.data.news[it].message_video_id+'>';
				}
				hm2+=sds.data.news[it].message_title+'</a></li>';
			})
			$('.tout').eq(0).html(hm2);
			// Video加载
			var hm = '';
			//console.log(sds);
			$.each(sds.data.video, function (index, obj) {	
				hm += '<li><a href=zhiboxiangqing.html?v_id='+sds.data.video[index].v_id+'><div class="vi">';
				hm += '<img class="Lim" src='+sds.data.video[index].v_image+' /><p class="Lzb"><img src="img/ico.png"/>';
				hm += '<span class="ss">'+sds.data.video[index].v_length_time+'</span></p></div><div class="lzbr">';
				hm += '<p class="fz">'+sds.data.video[index].v_name+'</p><p class="laiy">';
				hm += '<span>讲师:'+sds.data.video[index].v_teacher+'</span>';
				if(sds.data.video[index].v_type=='回顾'){
					hm += '<img src="img/hg.png"/>';
				}
				if(sds.data.video[index].v_type=='直播'){
					hm += '<img src="img/zb.png"/>';
				}
				if(sds.data.video[index].v_type=='预告'){
					hm += '<img src="img/yug.png"/>';
				}
				hm += '</p></div></a></li>';
				$('.us').get(0).innerHTML=hm;
			});
//		点击加载更多
		$(".linps").on('touchend',function(e){
				e.preventDefault()
				e.stopPropagation();
					sj++;
				//console.log(sj);
					ax2("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.index','page':sj});
					console.log(sds);
					if(sds.data.video.length!=0){
						$.each(sds.data.video,function (index, obj) {
						hm += '<li><a href=zhiboxiangqing.html?v_id='+sds.data.video[index].v_id+'><div class="vi">';
							hm += '<img class="Lim" src='+sds.data.video[index].v_image+'><p class="Lzb"><img src="img/ico.png"/>';
							hm += '<span class="ss">'+sds.data.video[index].v_length_time+'</span></p></div><div class="lzbr">';
							hm += '<p class="fz">'+sds.data.video[index].v_name+'</p><p class="laiy">';
							hm += '<span>讲师:'+sds.data.video[index].v_teacher+'</span>';
							if(sds.data.video[index].v_type=='回顾'){
								hm += '<img src="img/hg.png"/>';
							}
							if(sds.data.video[index].v_type=='直播'){
								hm += '<img src="img/zb.png"/>';
							}
							if(sds.data.video[index].v_type=='预告'){
								hm += '<img src="img/yug.png"/>';
							}
							hm += '</p></div></a></li>';
							$('.us').get(0).innerHTML=hm;
						});
					}else {
						$(this).html('已经全部加载完毕');
					}
					
			});
			
		// 头部透明度切换函数
			var n=0;
			function runr(){
//				clearInterval(tim);
				n++;
				if(n>$('.nav li').length-1){
					n=0;
				}
				$('.L-head a').eq(n).fadeIn().siblings().fadeOut();
				$('.nav li').eq(n).addClass('ff').siblings().removeClass();
			}
			tim=setInterval(runr,3000);
			function runl(){
//				clearInterval(tim);
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
				clearInterval(tim);
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
					tim=setInterval(runr,3000);
				}else {
					clearInterval(tim);
					runr();
					tim=setInterval(runr,3000);
				}
			},false);		

		}) 

		/****点击下载****/
		$(".as").eq(0).on('touchstart mousedown',function(e){
//					var ua = navigator.userAgent.toLowerCase();
//			    if (/iphone|ipad|ipod/.test(ua)) {
			      $(".as").eq(0).attr("href","http://jiayuan.meihaojy.com/app.php?s=index/down"); 
//			    } else {
//			          $(".as").eq(0).attr("href","https://www.pgyer.com/Otv8"); 
//			    }
		});
		//点击隐藏
		$('.cha').eq(0).on('touchstart mousedown',function(e){
			$(this).parent().hide();
		})	

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