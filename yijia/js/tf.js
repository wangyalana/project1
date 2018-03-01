//head
$(function(){
			     $(".nav-li").hover(function(){
				   $(this).find("ul.feicui").stop().slideDown(2000,"elasticOut");
				 },function(){
				    $(this).find("ul.feicui").stop().slideUp(100,"easeIn");
				 });
				 
				 $(".a").hover(function(){
				 	
				 	$(this).addClass("active");
				 	
				 },function(){
				 	$(this).removeClass("active");
				 }).click(function(){
				 	
				 	$(this).addClass("active1").siblings().removeClass("active1");
				 });
				 
				 
			  });