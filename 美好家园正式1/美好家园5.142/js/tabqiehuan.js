//swiper tab切换
				function GetRequest() {
				   var url = location.search; //获取url中"?"符后的字串
				   if (url.indexOf("?") != -1) {    //判断是否有参数
				      var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
				      strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
				    return strs[1]         //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
				   }
				}
				var sds=null;
				var tr=true;
				var vasl
				var sjs=1;
				var sj=1;
				var sj1=1;
				var sj2=1;
				var sj3=1;
				var sid=GetRequest();
				var hm='';
				var hm1='';
				var hm2='';
				var hm3='';
				var htms1='<li style="text-align: center; padding: 0.2rem; color: #ccc;">暂无数据</li>';
				var htms2='数据已全部加载完毕';
				var vals=$('.ins').eq(0).val();
				$.ajaxSetup({ 
				    async : false 
				});
				function ax1(urls,obj){
					$.post(urls,obj,function(data) {
					sds=data;
					}, "json");
				}
				function inits(){
					hm='';
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':1,'page':sj});
					console.log(sds);
					if(sds.data.length==0){
						$('.tb1').eq(0).html(htms1);
						$('.linps1').eq(0).html('');
					}else {
						$('.hide1').eq(0).html(htms2).hide();
						$('.linps1').eq(0).html('点击加载更多数据').show();
						$.each(sds.data, function(ik) {
							hm+='<li class="slis"><a  href=zhiboxiangqing.html?v_id='+sds.data[ik].info_id+'>'
							hm+='<div class="touxian"><img src='+sds.data[ik].image+'></div><div class="sjianjie">';
							hm+='<h1 class="sname">'+sds.data[ik].name+'</h1><p class="szhiwu">'+sds.data[ik].des+'</p></div></a></li>';
							/*准备加图片判断0-3张*/
						});	
						$('.tb1').eq(0).html(hm);
					}
				}
				inits();
				function inist(){
					hm='';
					if(sds.data.length==0){
						$('.tb1').eq(0).html(htms1);
						$('.linps1').eq(0).html('');
					}else{
						$('.hide1').eq(0).html(htms2).hide();
						$('.linps1').eq(0).html('点击加载更多数据').show();
						$.each(sds.data, function(ik) {
							hm+='<li class="slis"><a  href=zhiboxiangqing.html?v_id='+sds.data[ik].info_id+'>'
							hm+='<div class="touxian"><img src='+sds.data[ik].image+'></div><div class="sjianjie">';
							hm+='<h1 class="sname">'+sds.data[ik].name+'</h1><p class="szhiwu">'+sds.data[ik].des+'</p></div></a></li>';
						});	
						$('.tb1').eq(0).html(hm);
					}
				}
				function inist1(){
					if(sds.data.length==0){
						$('.hide1').eq(0).html(htms2).show();
						$('.linps1').eq(0).html('').hide();
					}else{
						$.each(sds.data, function(ik) {
							hm+='<li class="slis"><a  href=zhiboxiangqing.html?v_id='+sds.data[ik].info_id+'>'
							hm+='<div class="touxian"><img src='+sds.data[ik].image+'></div><div class="sjianjie">';
							hm+='<h1 class="sname">'+sds.data[ik].name+'</h1><p class="szhiwu">'+sds.data[ik].des+'</p></div></a></li>';
						});	
						$('.tb1').eq(0).html(hm);
					}
				}
				function tab2s(){
					hm1='';
					if(sds.data.length==0){
						$('.XXus').eq(0).html(htms1);
						$('.linps2').eq(0).html('');
					}else {
						$('.hide2').eq(0).html(htms2).hide();
						$('.linps2').eq(0).html('点击加载更多数据').show();
						$.each(sds.data, function(ik,obj) {
							hm1+='<li><a href=xiaoxixiangqing.html?message_id='+sds.data[ik].info_id+'><div class="xxds"><h1 class="xxh1  xxh2">'+sds.data[ik].name+'</h1></div>';
							hm1+='<p class="ps">'+sds.data[ik].des+'</p><div class="xx02">';
							$.each(sds.data[ik].images,function (imt){
								if(sds.data[ik].images.length==0){
									hm1+='';
								}else {
									hm1+='<img class=dotai_'+sds.data[ik].images.length+' src='+sds.data[ik].images[imt].thumb_url+' />';
								}
							})
							hm1+='</div></a><p class="xxxt"><img src='+sds.data[ik].user_thumb+' /><span class="xt">'+sds.data[ik].user_name+'</span>';
							hm1+='<span class="time">'+sds.data[ik].addtime+'</span></p></li>';
						});
						$('.XXus').eq(0).html(hm1);
					}
				}
				function tab2s1(){
					if(sds.data.length==0){
						$('.hide2').eq(0).html(htms2).show();
						$('.linps2').eq(0).html('').hide();
					}else {
						$.each(sds.data, function(ik,obj) {
							hm1+='<li><a href=xiaoxixiangqing.html?message_id='+sds.data[ik].info_id+'><div class="xxds"><h1 class="xxh1  xxh2">'+sds.data[ik].name+'</h1></div>';
							hm1+='<p class="ps">'+sds.data[ik].des+'</p><div class="xx02">';
							$.each(sds.data[ik].images,function (imt){
								if(sds.data[ik].images.length==0){
									hm1+='';
								}else {
									hm1+='<img class=dotai_'+sds.data[ik].images.length+' src='+sds.data[ik].images[imt].thumb_url+' />';
								}
							})
							hm1+='</div></a><p class="xxxt"><img src='+sds.data[ik].user_thumb+' /><span class="xt">'+sds.data[ik].user_name+'</span>';
							hm1+='<span class="time">'+sds.data[ik].addtime+'</span></p></li>';
						});
						$('.XXus').eq(0).html(hm1);
					}
					
				}
				function tab3s(){
					hm3='';
					if(sds.data.length==0){
						$('.zjlst').eq(0).html(htms1);
						$('.linps3').eq(0).html('');
					}else {
						$('.hide3').eq(0).html(htms2).hide();
						$('.linps3').eq(0).html('点击加载更多数据').show();
						$.each(sds.data, function(ik,obj) {
							hm3+='<li class="lis"><a  href=zhuanjiageren.html?lecturer_id='+sds.data[ik].info_id+'><div class="touxia"><img src='+sds.data[ik].image+' />';
							hm3+='</div><div class="jianjie"><h1 class="name">'+sds.data[ik].name+'</h1>';
							hm3+='<p class="zhiwu">'+sds.data[ik].des+'</p>';
							hm3+='<p class="shangchang">'+sds.data[ik].skill_area+'</p></div></a></li>';
						})
						$('.zjlst').eq(0).html(hm3);
					}
					
				}
				function tab3s1(){
					
					if(sds.data.length==0){
						$('.hide3').eq(0).html(htms2).show();
						$('.linps3').eq(0).html('').hide();
					}else {
						$.each(sds.data, function(ik,obj) {
							hm3+='<li class="lis"><a  href=zhuanjiageren.html?lecturer_id='+sds.data[ik].info_id+'><div class="touxia"><img src='+sds.data[ik].image+' />';
							hm3+='</div><div class="jianjie"><h1 class="name">'+sds.data[ik].name+'</h1>';
							hm3+='<p class="zhiwu">'+sds.data[ik].des+'</p>';
							hm3+='<p class="shangchang">'+sds.data[ik].skill_area+'</p></div></a></li>';
						})
						$('.zjlst').eq(0).html(hm3);
					}
					
				}
			
				function tab4s(){
					hm2='';
					if(sds.data.length==0){
						$('.ksweus').eq(0).html(htms1);
						$('.linps4').eq(0).html('');
					}else {
						$('.hide4').eq(0).html(htms2).hide();
						$('.linps4').eq(0).html('点击加载更多数据').show();
							$.each(sds.data, function(ik,obj) {
								if(sds.data[ik].lectruer_id>0){
									hm2+='<li><a href=weihuifu.html?question_id='+sds.data[ik].info_id+'><p class="xxxt">'
								}else {
									hm2+='<li><a href=wendaxiangqing.html?question_id='+sds.data[ik].info_id+'><p class="xxxt">'
								}
								if(sds.data[ik].user_thumb==''){
									hm2+='<img src="img/user@2x.png"/>';
								}else {
									hm2+='<img src='+sds.data[ik].user_thumb+'>';
								}
								hm2+='<span class="xt">'+sds.data[ik].name+'</span><time>'+sds.data[ik].addtime+'</time></p>';
								hm2+='<h1>'+sds.data[ik].des+'</h1><div class="xx02">';
								$.each(sds.data[ik].images, function(imt) {
									if(sds.data[ik].images.length==0){
										hm2+='';
									}else if(sds.data[ik].q_type==2){
										hm2+='<video controls src='+sds.data[ik].images[imt].thumb_url+' style="width:100%;"></video>';
									}else {
										hm2+='<img class=dotai_'+sds.data[ik].images.length+' src='+sds.data[ik].images[imt].thumb_url+' />';
									}
								});
								hm2+='</div></a></li>';
							})
							$('.ksweus').eq(0).html(hm2);
					}
				}
				function tab4s1(){
					if(sds.data.length==0){
						$('.hide4').eq(0).html(htms2).show();
						$('.linps4').eq(0).html('').hide();
					}else {
							$.each(sds.data, function(ik,obj) {
								if(sds.data[ik].lectruer_id>0){
									hm2+='<li><a href=weihuifu.html?question_id='+sds.data[ik].info_id+'><p class="xxxt">'
								}else {
									hm2+='<li><a href=wendaxiangqing.html?question_id='+sds.data[ik].info_id+'><p class="xxxt">'
								}
								if(sds.data[ik].user_thumb==''){
									hm2+='<img src="img/user@2x.png"/>';
								}else {
									hm2+='<img src='+sds.data[ik].user_thumb+'>';
								}
								hm2+='<span class="xt">'+sds.data[ik].name+'</span><time>'+sds.data[ik].addtime+'</time></p>';
								hm2+='<h1>'+sds.data[ik].des+'</h1><div class="xx02">';
								$.each(sds.data[ik].images, function(imt) {
									if(sds.data[ik].images.length==0){
										hm2+='';
									}else if(sds.data[ik].q_type==2){
										hm2+='<video controls src='+sds.data[ik].images[imt].thumb_url+' style="width:100%;"></video>';
									}else {
										hm2+='<img class=dotai_'+sds.data[ik].images.length+' src='+sds.data[ik].images[imt].thumb_url+' />';
									}
								});
								hm2+='</div></a></li>';
							})
							$('.ksweus').eq(0).html(hm2);
					}
				}
			var sd;
			var ctiv;
			var tabsSwiper = new Swiper('.swiper-container',{
//				speed:500,
//				noSwiping : true,
//				autoHeight: true
//				onSlideChangeStart: function() {
//				var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
//				$(".swiper-slide").css('height', H + 'px');
//				$(".swiper-wrapper").css('height', H + 'px');
//				}
			});
//			$(".swiper-wrapper").css("height","100%");
			
			var sd=tabsSwiper.activeIndex+1;
			
			// 进入页面直接点击加载更多
//			$(".linps1").eq(0).on('touchstart',function(e){
//				e.preventDefault()
//				if($('.ins').eq(0).val()==''&&tr==true){
//					sjs++;
//					console.log(sj);
//					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':1,'page':sjs});
//					console.log(sds);
//					inist1();
//					var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
//					console.log(H);
//					$(".swiper-slide").css('height','100%');
//					$(".swiper-wrapper").css('height', H + 'px');
//				}	
//			})

			$(".tabs a").on('touchstart',function(e){
				e.preventDefault()
				$(".tabs .active").removeClass('active');
				tr=false;
				sj=1;
				sj1=1;
				sj2=1;
				sj3=1;
//				console.log(sj3);
				$(this).addClass('active');
				tabsSwiper.slideTo($(this).index());
				sd=tabsSwiper.activeIndex+1;
//				console.log(sd);
//				sech();
				vals=$('.ins').eq(0).val();
				if(vals==''){
					if(sd==1){
						inits();
					}else if(sd==2){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj});
						console.log(sds);
						tab2s();	
					}else if(sd==3){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj2});
						console.log(sds);
						tab3s();
					}else if(sd==4){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj3});
						console.log(sds);
						tab4s();
					}
				}else {
					if(sd==1){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj});
						console.log(sds);
						inist();	
//						dianji2('.linps1',vals,sj,inist1)
					}else if(sd==2){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj1});
						console.log(sds);
						tab2s();
//						dianji2('.linps2',vals,sj1,tab2s1);
					}else if(sd==3){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj2});
						console.log(sds);
						tab3s();
//						dianji2('.linps3',vals,sj2,tab3s1);
					}else if(sd==4){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj3});
						console.log(sds);
						tab4s();
//						dianji2('.linps4',vals,sj3,tab4s1);
					}
				}
				var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
				console.log(H);
				$(".swiper-slide").css('height','100%');
				$(".swiper-wrapper").css('height', H + 'px');
			});
			
			$('.linps1').eq(0).on('touchend',function(e){
					e.preventDefault();
					if(vals==''){
						sj++;
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj});
						console.log(sds);
						inist1();
					}else {
						sj++;
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj});
						console.log(sds);
						inist1();
					}
					var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
					console.log(H);
					$(".swiper-slide").css('height','100%');
					$(".swiper-wrapper").css('height', H + 'px');
				})
			$('.linps2').eq(0).on('touchend',function(e){
				e.preventDefault();
				if(vals==''){
					sj1++;
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj1});
					console.log(sds);
					tab2s1();
				}else {
					sj1++;
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj1});
					console.log(sds);
					tab2s1();
				}
				var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
				console.log(H);
				$(".swiper-slide").css('height','100%');
				$(".swiper-wrapper").css('height', H + 'px');
			})
			$('.linps3').eq(0).on('touchend',function(e){
				e.preventDefault();
				if(vals==''){
					sj2++;
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj2});
					console.log(sds);
					tab3s1();
				}else {
					sj2++;
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj2});
					console.log(sds);
					tab3s1();
				}
				var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
				console.log(H);
				$(".swiper-slide").css('height','100%');
				$(".swiper-wrapper").css('height', H + 'px');
			})
			$('.linps4').eq(0).on('touchend',function(e){
				e.preventDefault();
				if(vals==''){
					sj3++;
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj3});
					console.log(sds);
					tab4s1();
				}else {
					sj3++;
					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj3});
					console.log(sds);
					tab4s1();
				}
				var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
				console.log(H);
				$(".swiper-slide").css('height','100%');
				$(".swiper-wrapper").css('height', H + 'px');
			})
			
			
//			function sech(){
//				vals=$('.ins').eq(0).val();
//				if(vals==''){
//					if(sd==1){
//						inits();
//						dianji1('.linps1',sj,inist1);
//					}else if(sd==2){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj});
//						console.log(sds);
//						tab2s();
//						dianji1('.linps2',sj1,tab2s1);
//					}else if(sd==3){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj2});
//						console.log(sds);
//						tab3s();
//						dianji1('.linps3',sj2,tab3s1);
//					}else if(sd==4){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':sj3});
//						console.log(sds);
//						tab4s();
//						dianji1('.linps4',sj3,tab4s1);
//					}
//				}else {
//					if(sd==1){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj});
//						console.log(sds);
//						inist();	
//						dianji2('.linps1',vals,sj,inist1)
//					}else if(sd==2){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj1});
//						console.log(sds);
//						tab2s();
//						dianji2('.linps2',vals,sj1,tab2s1);
//					}else if(sd==3){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj2});
//						console.log(sds);
//						tab3s();
//						dianji2('.linps3',vals,sj2,tab3s1);
//					}else if(sd==4){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj3});
//						console.log(sds);
//						tab4s();
//						dianji2('.linps4',vals,sj3,tab4s1);
//					}
//				}
//				}
//			function dianji1(a,b,fn){
//				$(a).eq(0).on('touchstart',function(e){
//					e.preventDefault();
//					b++;
//					console.log(b);
//					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','type':sd,'page':b});
//					console.log(sds);
//					fn();
//					var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
//					console.log(H);
//					$(".swiper-slide").css('height','100%');
//					$(".swiper-wrapper").css('height', H + 'px');
//				})
//			}
//			function dianji2(a,val,b,fn){
//				$(a).eq(0).on('touchstart',function(e){
//					e.preventDefault()
//					b++;
//					ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':val,'type':sd,'page':b});
//					console.log(sds);
//					fn();
//					var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
//					console.log(H);
//					$(".swiper-slide").css('height','100%');
//					$(".swiper-wrapper").css('height', H + 'px');
//				})
//			}
//			function dianji3(a,val,b,fn){
//				$(a).eq(0).on('touchstart',function(e){
//					e.preventDefault();
//					if(val==''){
//						return false;
//					}else {
//						b++;
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':val,'type':sd,'page':b});
//						console.log(sds);
//						fn();
//						var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
//						console.log(H);
//						$(".swiper-slide").css('height','100%');
//						$(".swiper-wrapper").css('height', H + 'px');
//					}
//					
//				})
//			}
//			function submits(){
//				if(sd==1){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj});
//						console.log(sds);
//						inist();	
//						dianji3('.linps1',vals,sj,inist1)
//					}else if(sd==2){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj1});
//						console.log(sds);
//						tab2s();
//						dianji3('.linps2',vals,sj1,tab2s1);
//					}else if(sd==3){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj2});
//						console.log(sds);
//						tab3s();
//						dianji3('.linps3',vals,sj2,tab3s1);
//					}else if(sd==4){
//						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj3});
//						console.log(sds);
//						tab4s();
//						dianji3('.linps4',vals,sj3,tab4s1);
//					}
//			}


			// 右侧搜索按钮
			$('.sudmt').eq(0).on('touchstart',function(e){
				sj=1;
				sj1=1;
				sj2=1;
				sj3=1;
				e.preventDefault()
				vals=$('.ins').eq(0).val();
				if(vals==''){
					return false;
				}else{
					if(sd==1){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj});
						console.log(sds);
						inist();	
					}else if(sd==2){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj1});
						console.log(sds);
						tab2s();
					}else if(sd==3){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj2});
						console.log(sds);
						tab3s();
					}else if(sd==4){
						ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.web.search','keywords':vals,'type':sd,'page':sj3});
						console.log(sds);
						tab4s();
					}
				}
				var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
				console.log(H);
				$(".swiper-slide").css('height','100%');
				$(".swiper-wrapper").css('height', H + 'px');
			})					
			$(".tabs a").click(function(e){
				e.preventDefault();
			});