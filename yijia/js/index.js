$(function(){
	$("#header").load("head.html");
	$("#footers").load("foot.html");
	
//	scroll
    $(window).scroll(function(){
			     var sctop = $(this).scrollTop();
				  //alert(sctop);
				  if(sctop>300){
					$(".scroll").show();
				  }else{
				    $(".scroll").hide()
				  }
			  })
    
    $(".scroll-one").click(function(){
			      $("body,html").animate({scrollTop:"0"},600);
			  });
    

			  

			  
	
//	主页气球banner轮播
		       var imgs =["images/banner02_bg.jpg","images/banner01_bg.jpg","images/banner03_bg.jpg"];
			   var timer;
			   var index=0;
			   //banner获取左边按钮
			   var btn_prev = $("#banner .btn-prev"); 
			   var btn_next = $("#banner .btn-next");
			   //banner获取点击li
			   var liList = $("#banner .banner-list li");

                function play(){
				     index++;
					 if(index>2){
					    index=0;
					 }
					 //让li的背景跟着计时器一起动
					 /*liList.css("background","url(images/next&prev_others.png)").eq(index).css("background","url(images/next&prev_now.png)");

                     $("#banner-wrap").css("background","url("+imgs[index]+")");
					 $(".banner").find("img").removeClass("animated fadeInLeft fadeInRight");
					 $(".banner").hide().eq(index).show();
					 $(".banner").eq(index).find(".a").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".b").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".c").addClass("animated fadeInRight");*/
					 changeBg();
				}

timer = setInterval(play,2000);

				//banner左边按钮的hover
                /*btn_prev.hover(function(){
				    $(this).css("background","url(images/prev_jiantou_hover.png)");
					$(this).addClass("animated tada");
				},function(){
				    $(this).css("background","url(images/prev_jiantou.png)");
					$(this).removeClass("animated tada");
				});*/
                //banner右边按钮的hover
				/*btn_next.hover(function(){
				    $(this).css("background","url(images/next_jiantou_hover.png)");
					$(this).addClass("animated tada");
				},function(){
				    $(this).css("background","url(images/next_jiantou.png)");
					$(this).removeClass("animated tada");
				});*/

				function changeBtn(btnName,a){
				    btnName.hover(function(){
				    $(this).css("background","url(images/"+a+"_jiantou_hover.png)");
					$(this).addClass("animated tada");
					},function(){
						$(this).css("background","url(images/"+a+"_jiantou.png)");
						$(this).removeClass("animated tada");
					});
				}
                changeBtn(btn_prev,"prev");
				changeBtn(btn_next,"next");

			    btn_prev.click(function(){
				    //clearInterval(timer);
				    index--;
					index = index<0?2:index;

					/*liList.css("background","url(images/next&prev_others.png)").eq(index).css("background","url(images/next&prev_now.png)");

                    $("#banner-wrap").css("background","url("+imgs[index]+")");
					 $(".banner").find("img").removeClass("animated fadeInLeft fadeInRight");
					 $(".banner").hide().eq(index).show();
					 $(".banner").eq(index).find(".a").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".b").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".c").addClass("animated fadeInRight");*/
					 changeBg();
                     //timer = setInterval(play,2000);
				});
				btn_next.click(function(){
				    clearInterval(timer);
				    index++;
					index = index>2?0:index;

					/*liList.css("background","url(images/next&prev_others.png)").eq(index).css("background","url(images/next&prev_now.png)");

                    $("#banner-wrap").css("background","url("+imgs[index]+")");
					 $(".banner").find("img").removeClass("animated fadeInLeft fadeInRight");
					 $(".banner").hide().eq(index).show();
					 $(".banner").eq(index).find(".a").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".b").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".c").addClass("animated fadeInRight");*/
					 changeBg();
					 //timer = setInterval(play,2000);
				});
				liList.click(function(){
				    clearInterval(timer);
					index = $(this).index();

				    /*liList.css("background","url(images/next&prev_others.png)").eq(index).css("background","url(images/next&prev_now.png)");
					
					$("#banner-wrap").css("background","url("+imgs[index]+")");
					 $(".banner").find("img").removeClass("animated fadeInLeft fadeInRight");
					 $(".banner").hide().eq(index).show();
					 $(".banner").eq(index).find(".a").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".b").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".c").addClass("animated fadeInRight");*/
					 changeBg();
					 //timer = setInterval(play,2000);
				});

				//图片切换以及li背景图片切换的公用函数
				function changeBg(){
				     liList.css("background","url(images/next&prev_others.png)").eq(index).css("background","url(images/next&prev_now.png)");
					
					$("#banner-wrap").css("background-image","url("+imgs[index]+")");
					 $(".banner").find("img").removeClass("animated fadeInLeft fadeInRight");
					 $(".banner").hide().eq(index).show();
					 $(".banner").eq(index).find(".a").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".b").addClass("animated fadeInLeft");
					 $(".banner").eq(index).find(".c").addClass("animated fadeInRight");
				}
				
				
//about company
            var imagesTwo=["images/lantu.png","images/jianjie_image01.jpg","images/lantu.png","images/jianjie_image01.jpg","images/lantu.png","images/jianjie_image01.jpg"];
            var indexTwo=0;
            var liBtn=$(".btn-li");
            
             liBtn.click(function(){
             	indexTwo=$(this).index();
             	$(".big-btn").css("display","none");
              	$(this).find(".big-btn").css("display","block");
              	
             	$(".gaishu-left2-imgs img").removeClass("animated fadeInLeft");
              	$(".gaishu-font").removeClass("animated fadeInRight");
              	
      
              	setTimeout(function(){
              	$(".gaishu-left2-imgs img").attr("src",imagesTwo[indexTwo]).addClass("animated fadeInLeft");
             	$(".gaishu-font").addClass("animated fadeInRight");
              	},100)

             });
             
//  公司简介轮播
//           左按钮
		    $(".pre-box").click(function(){
		    	indexTwo++;
		    	if(indexTwo>5){
		    		indexTwo=0;
		    	}
		    		$(".gaishu-left2-imgs img").removeClass("animated fadeInLeft");
              	$(".gaishu-font").removeClass("animated fadeInRight");
		    	setTimeout(function(){
		    	$(".gaishu-left2-imgs img").attr("src",imagesTwo[indexTwo]).addClass("animated fadeInLeft");
		    	$(".gaishu-font").addClass("animated fadeInRight");
		    	},100)
		    
		    	});
		    	
		    	
//		    右按钮
            $(".nex-box").click(function(){
		    	indexTwo--;
		    	if(indexTwo<0){
		    		indexTwo=5;
		    	}
		    	$(".gaishu-left2-imgs img").removeClass("animated fadeInLeft");
              	$(".gaishu-font").removeClass("animated fadeInRight");
		    	setTimeout(function(){
		    	$(".gaishu-left2-imgs img").attr("src",imagesTwo[indexTwo]).addClass("animated fadeInLeft");
		    	$(".gaishu-font").addClass("animated fadeInRight");
		    	},100)
		    
		    });
		    	
		    	
//          滑入滑出
            var flag1 = true;
             $(".jiacha").click(function(){
             	$(this).parent().next().slideToggle();
             	if(flag1){
             		$(this).css("background", "url(images/business_zhankaishouqi.png) no-repeat center bottom");
             		flag1=false;
             	}else{
             		$(this).css("background", "url(images/business_zhankaishouqi.png) no-repeat center top");
             		flag1 = true;
             	}
             	
             })
             
//团队介绍轮播
//				左按钮的hover
			   var btnPre=$(".btntwo .btn-list2 .btn-prev");
			   var btnNext=$(".btntwo .btn-list2 .btn-next");
			   btnPre.hover(function(){
			   	$(this).css("background","url(images/prev_jiantou_hover.png)");
			   	$(this).addClass("animated tada");
			   },function(){
			   	$(this).css("background","url(images/prev_jiantou.png)");
			   	$(this).removeClass("animated tada");
			   });
//			   右按钮的hover
              btnNext.hover(function(){
			   	$(this).css("background","url(images/next_jiantou_hover.png)");
			   	$(this).addClass("animated tada");
			   },function(){
			   	$(this).css("background","url(images/next_jiantou.png)");
			   	$(this).removeClass("animated tada");
			   });
			   
//			   小按钮
            var liLists = $(".btntwo .btn-list2 .banner-list li");
            

             
//				点击click
              var indexs = 1;
			  var flags = false;
              $(".tundui-box").css("marginLeft","-1100px");
              function funright(){
			        indexs++;
					if(indexs>4){
						   indexs = 2;
						   $(".tundui-box").css("marginLeft","-1100px");
					}
					if(indexs==1||indexs==4){
						liLists.css("background","url(images/next&prev_others.png)").eq(0).css("background","url(images/next&prev_now.png)");
					}else{
						liLists.css("background","url(images/next&prev_others.png)").eq(indexs-1).css("background","url(images/next&prev_now.png)");
					}
					
                    
                    $(".tundui-box").stop().animate({marginLeft:"+=200px"},300,function(){
					   
					   $(".tundui-box").stop().animate({marginLeft:"-"+1100*indexs+"px"},900,function(){
							flags = false;
						});
					});
					
			  }

			  function funleft(){
			       indexs--;
				   if(indexs<0){
						  indexs = 2;
						  $(".tundui-box").css("marginLeft","-3300px");
					}
				   
				   $(".tundui-box").stop().animate({marginLeft:"-=200px"},300,function(){
				      $(".tundui-box").stop().animate({marginLeft:"+=1300px"},800,function(){
							flags = false;
					 });
				   })
				   
			  }

			  btnNext.click(function(){
			     if(!flags){
				    flags = true;
				    clearInterval(timerOne);
				   funright();
				   timerOne = setInterval(funright,2000);
				 }
			      
			  });

			  btnPre.click(function(){
			      if(!flags){
				     flags = true;
				    clearInterval(timerOne);
					funleft();
				    timerOne = setInterval(funright,2000);
				  }
			      
			  });

var timerOne = setInterval(funright,2000);
              
            
//  业务范围        
$(".qiye-img").hover(function(){
	$(this).addClass("animated tada");
},function(){
	$(this).removeClass("animated tada");
});
            
            
            
            
            
            
            
            
            
            
            
            
            
		   });
		   

