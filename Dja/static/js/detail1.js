$(function(){

	var param = location.search.substring(1);
	var pid = getParams(param,"id");
	console.log(pid);
	
	$.get("json/mycart.json", function(data){
		var arr = data;
		
		for(var i=0; i<arr.length; i++){
			var obj = arr[i];
			if(obj.id == pid){
				loadUI(obj);
				
				var obj1 = obj;
				$('.b1-1').click(function(){
					//alert('s');
					$(".tck").show();
					
					var arr2 = $.cookie("cart")? JSON.parse($.cookie("cart")): [];
		
					var isExist = false;
					for(var i=0; i<arr2.length; i++){
						if(arr2[i].id == obj1.id){
							arr2[i].num++;
							isExist = true;
							break;
						}
					}
					if(isExist == false){
						obj1.num = 1;
						arr2.push(obj1);
					}
					
					$.cookie("cart",JSON.stringify(arr2), {expires:30, path:"/"});
					
				})
			}
		}
	})
	
	function loadUI(obj){
		$('<img class="img1" style="width: 600px; height: 237px;" src="'+obj.zhongImg1+'" />').appendTo(".k2-1-1");
		$('<li><img style="width: 162px; height: 65px;" src="'+obj.zhongImg1+'"</li>').appendTo(".k212-1");
		$('<li><img style="width: 162px; height: 65px;" src="'+obj.zhongImg2+'"</li>').appendTo(".k212-1");
		$('<li><img style="width: 162px; height: 65px;" src="'+obj.zhongImg3+'"</li>').appendTo(".k212-1");
		$('<h2>'+obj.name+'</h2>').appendTo(".k2-2-1");
		$('<li><span>LOHO价：</span><span class="a1-1">'+"￥"+obj.price+'</span></li>').appendTo(".a-1");
		$('<img class="img3" style=" position: relative; left: 0; top: 0; width: 900px; height: 346px;" src="'+obj.zhongImg1+'" />').appendTo(".k2-1-2");
	}
	
	function getParams(str,name){
		var arr = str.split("&");
		for(var i=0; i<arr.length; i++){
			var str1 = arr[i];
			var arr1 = str1.split("=");
			if(arr1[0] == name){
				return arr1[1];
			}
		}
		return "";
	}
	// 加操作
	$('.bt-wrapper .glyphicon glyphicon-minus').click(function () {
		console.log('加操作')
        }
		
	)
	// 减操作
	$('a1-3').click(function () {
		console.log('减操作')
        }

	)
//放大镜

	$(".k2-1-1").mousemove(function(e){ 
		
		$(".k211-1").css("display","block");
		$(".k2-1-2").css("display","block");
		
		var x = e.pageX-$(".k2-1-1").offset().left-$(".k211-1").width()/2;
		var y = e.pageY-$(".k2-1-1").offset().top-$(".k211-1").height()/2;
		//console.log(y)
		if(x<0){
			x=0;
		}
		else if(x>$(".k2-1-1").width()-$(".k211-1").width()){
			x=$(".k2-1-1").width()-$(".k211-1").width();
		}
		if(y<0){
			y=0;
		}
		else if(y>$(".k2-1-1").height()-$(".k211-1").height()){
			y=$(".k2-1-1").height()-$(".k211-1").height();
		}
		
		$(".k211-1").css({left:x,top:y});
		
		$(".img3").css({left:-1.5*x,top:-1.5*y});
		
	});
	
	$(".k2-1-1").mouseleave(function(){
		$(".k211-1").css("display","none");
		$(".k2-1-2").css("display","none");
	})
	
	$(".k212-1").on("mouseenter","li", function(){
		var index = $(this).index();
		console.log($(this).find("img").attr("src"))
		$(".k2-1-1 .img1").attr("src",$(this).find("img").attr("src")) 
		$(".img3").attr("src",$(this).find("img").attr("src")) 
	});
 
	
//二维码滑块	
	$(window).scroll(function(){
		var gao = $(window).scrollTop()+$(window).height()*0.3
		
		$(".dingwei").animate({top:gao},30);
	})
	
	
	
	
	
	
})


