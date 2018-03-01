$(function(){
	var musicIndex = 0;
	//音乐播放
	$(".foot-ul").find("li").hover(function(){
		//让	musicIndex自增1	
		musicIndex++;
		//获取当前点击的span的index，以设置需要加载的music的地址。	
		index = $(this).index();
		
		if(navigator.appName=="Microsoft Internet Explorer"){ //如果是ie
			$("body").append('<bgsound class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autostart=true loop=false>');
		}else if(navigator.userAgent.indexOf("Firefox")>0){ //如果是火狐
			$("body").append('<object  class="myaudio'+ musicIndex +'" data="music/sound0'+ index +'.mp3" type="application/x-mplayer2" width="0" height="0">'+
					'<param name="src" value="music/sound0'+ index +'.mp3">'+
					'<param name="autostart" value="1">'+
					'<param name="playcount" value="infinite">'+
				'</object>')
		}else{ //其他
			$("body").append('<embed class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autostart="" loop="false" hidden="true"   ></embed>');
		}
		var removeIndex = musicIndex;
		setTimeout(function(){
			$(".myaudio"+removeIndex).remove();
		},2000);
		
	});
	
	//备案声明点击打开查询网站
	$("#beiaishenmin").click(function(){
		window.open("http://www.miitbeian.gov.cn");
	})
})