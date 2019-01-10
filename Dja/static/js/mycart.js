$(function(){
	refresh();
	function refresh(){

		$(".f12-1").remove();
		var arr = $.cookie("cart");
		if(arr){
			arr = JSON.parse(arr);

			var totalPrice = 0;
			
			for(var i=0; i<arr.length; i++){
				var obj = arr[i];
				
				var ul = $('<ul class="f12-1 clearfix"></ul>').appendTo(".f1-2");
				if(obj.checked){
					$('<li class="f2-1"><input type="checkbox" checked="checked"/></li>').appendTo(ul);
				}
				else{
					$('<li class="f2-1"><input type="checkbox" /></li>').appendTo(ul);
				}
				
				$('<li class="f2-2"><img style="width: 100px; height: 41px;" src="'+obj.zhongImg1+'"/></li>').appendTo(ul);
				$('<li class="f2-3">'+obj.name+'</li>').appendTo(ul);
				$('<li class="f2-4"><p>颜色：枪色</p><p>条码：201302160824001</p></li>').appendTo(ul);
				$('<li class="f2-5"><p>'+obj.price+'</p><p class="f5-1">促销优惠</p></li>').appendTo(ul);
				$('<li class="f2-6"><div><span class="f6-1">-</span><input class="f6-2" value="'+obj.num+'"/><span class="f6-3">+</span></div></li>').appendTo(ul);
				$('<li class="f2-7">'+(obj.price * obj.num)+'</li>').appendTo(ul);
				$('<li class="f2-8"><a class="f8-1" href="#">删除</a><br /><a href="#">移入收藏夹</a></li>').appendTo(ul); 
				
				if(obj.checked){
					totalPrice += obj.price * obj.num;
				}
				
			}
			for(var i=0; i<arr.length; i++){
				$(".d2-2").html("¥"+"&nbsp;"+totalPrice);
			}				
		}
		else{
			console.log("购物车为空");
		}

    }

//数量增加
	$(".f1-2").on("click",".f6-3", function(){

		var index = $(this).index(".f2-6 .f6-3");
		
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num++;
		
		$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
		
		refresh();
		
	})
	
//数量减少
	$(".f1-2").on("click",".f6-1", function(){

		var index = $(this).index(".f2-6 .f6-1");
		
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num--;
		if(arr[index].num < 1){
			arr[index].num = 1;
		}
		
		$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
		
		refresh();
		
	})

//删除
	$(".f1-2").on("click",".f8-1", function(){
		var index = $(this).index(".f12-1 .f8-1");
		
		var arr = JSON.parse($.cookie("cart"));
		arr.splice(index, 1);
		
		$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
		refresh();
		
		
	})
	
//勾选	
	$(".f1-2").on("click",".f2-1", function(){
		var index = $(this).index(".f12-1 .f2-1");
		
		var uls=$(this).parent().parent().children()
		for(var i = 0; i<uls.length; i++){
			if(uls[i].firstChild.firstChild.checked){
				$(".f11-6")[0].checked=true;
			}else{
				$(".f11-6")[0].checked=false;
				break;
			}
		}
		var arr = JSON.parse($.cookie("cart"));
		arr[index].checked = !arr[index].checked;
		
		$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
		
		isAllSelect();
		
		refresh();
		
	})

//判断是否全部勾选
	isAllSelect();
	function isAllSelect(){
		var arr = $.cookie("cart");
		if(!arr){
			return;
		}
		
		var arr = JSON.parse($.cookie("cart"));
		var sum = 0;
		for(var i=0; i<arr.length; i++){
			sum += arr[i].checked;
		}
		
		if(sum == arr.length){
			$(".f2-1").prop("checked",true);
		}
		else{
			$(".f2-1").prop("checked",false);
		}
	}
	
//全选	
	$(".f11-6").click(function(){
		
		var arr = $.cookie("cart");
		if(!arr){
			return;
		}
		
		var arr = JSON.parse($.cookie("cart"));
		for(var i=0; i<arr.length; i++){
			if($(this).prop("checked")){
				arr[i].checked = true;
			}
			else{
				arr[i].checked = false;
			}
		}
		
		$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
		refresh();
	})
	
	

	
	
	
	
	
	
	
	
	
	
})
