	
//	对应xiaoxi.html
var html = document.getElementsByTagName("html")[0];
window.onload = window.onresize = function() {
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var f = (100/640) * width; 
    html.style.fontSize = f + 'px';
}
jQuery(function ($){
	var sds=null;
	var sj=1;
	$.ajaxSetup({ 
	    async : false 
	});
	function ax1(urls,obj){
		$.post(urls,obj,function(data) {
		sds=data;
		}, "json");
	}
	ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.message.index','page':sj});
	//console.log(sds);
	var hm = '';
	$.each(sds.data, function (index, obj) {
		if(sds.data[index].message_level==2){
			hm+='<li><a href=xiaoxixiangqing.html?message_id='+sds.data[index].message_id+'><div class="xxds"><img class="xxim" src="img/xiaoxijih.png"/>';
			hm+='<h1 class="xxh1">'+sds.data[index].message_title+'</h1></div><p class="ps">'+sds.data[index].message_content+'</p><div class="xx02">';
			$.each(sds.data[index].message_thumb, function(itm,obj) {
				if(sds.data[index].message_thumb[itm].length==0){
					hm+='';
				}else {
					hm+='<img class=dotai_'+sds.data[index].message_thumb.length+' src='+sds.data[index].message_thumb[itm].thumb_url+' />';
				}
			});	
			hm+='</div><p class="xxxt"><img src="'+sds.data[index].user_thumb+'"/><span class="xt">'+sds.data[index].user_name+'</span><span class="time">'+sds.data[index].message_addtime+'</span></p></a></li>';
		}else {
			hm+='<li><a href=xiaoxixiangqing.html?message_id='+sds.data[index].message_id+'><div class="xxds">';
			hm+='<h1 class="xxh1">'+sds.data[index].message_title+'</h1></div><p class="ps">'+sds.data[index].message_content+'</p><div class="xx02">';
			$.each(sds.data[index].message_thumb, function(itm,obj) {
				if(sds.data[index].message_thumb[itm].length==0){
					hm+='';
				}else {
					hm+='<img class=dotai_'+sds.data[index].message_thumb.length+' src='+sds.data[index].message_thumb[itm].thumb_url+' />';
				}
			});	
			hm+='</div><p class="xxxt"><img src="'+sds.data[index].user_thumb+'"/><span class="xt">'+sds.data[index].user_name+'</span><span class="time">'+sds.data[index].message_addtime+'</span></p></a></li>';
		};
		$('.lxus').get(0).innerHTML=hm;
	})
	$(".linps").on('touchstart',function(e){
		e.preventDefault()
		sj++;
		//console.log(sj);
		ax1("http://jiayuan.meihaojy.com/rest.php?s=web/index",{'method':'fosung.app.message.index','page':sj});
		
		if(sds.data.length!=0){
			$.each(sds.data, function (index, obj) {
				if(sds.data[index].message_level==2){
					hm+='<li><a href=xiaoxixiangqing.html?message_id='+sds.data[index].message_id+'><div class="xxds"><img class="xxim" src="img/xiaoxijih.png"/>';
					hm+='<h1 class="xxh1">'+sds.data[index].message_title+'</h1></div><p class="ps">'+sds.data[index].message_content+'</p><div class="xx02">';
					$.each(sds.data[index].message_thumb, function(itm,obj) {
						if(sds.data[index].message_thumb[itm].length==0){
							hm+='';
						}else {
							hm+='<img class=dotai_'+sds.data[index].message_thumb.length+' src='+sds.data[index].message_thumb[itm].thumb_url+' />';
						}
					});	
					hm+='</div><p class="xxxt"><img src="'+sds.data[index].user_thumb+'"/><span class="xt">'+sds.data[index].user_name+'</span><span class="time">'+sds.data[index].message_addtime+'</span></p></a></li>';
				}else {
					hm+='<li><a href=xiaoxixiangqing.html?message_id='+sds.data[index].message_id+'><div class="xxds">';
					hm+='<h1 class="xxh1">'+sds.data[index].message_title+'</h1></div><p class="ps">'+sds.data[index].message_content+'</p><div class="xx02">';
					$.each(sds.data[index].message_thumb, function(itm,obj) {
						if(sds.data[index].message_thumb[itm].length==0){
							hm+='';
						}else {
							hm+='<img class=dotai_'+sds.data[index].message_thumb.length+' src='+sds.data[index].message_thumb[itm].thumb_url+' />';
						}
					});	
					hm+='</div><p class="xxxt"><img src="'+sds.data[index].user_thumb+'"/><span class="xt">'+sds.data[index].user_name+'</span><span class="time">'+sds.data[index].message_addtime+'</span></p></a></li>';
				};
				$('.lxus').get(0).innerHTML=hm;
			})
		}else {
			$(this).html('已经全部加载完毕');
		}
	})
})

