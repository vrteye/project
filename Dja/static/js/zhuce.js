$(function(){
	
	var yanzen1 = false;
	var yanzen2 = false;
	var yanzen3 = false;
	var yanzen4 = false;
//	手机号
	$(".f1-2-1").keyup(function(){
		var phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		if(phone.test($(this).val())){
			$(".f1-2 span").eq(0).html("-该手机号码可以注册！");
			yanzen1 = true;
		}
		else{
			$(".f1-2 span").eq(0).html("-用户名错误");
			yanzen1 = false;
		}
	})
//	密码
	$(".f1-2-3").keyup(function(){
		var mima = 	/^[a-z0-9_-]{6,18}$/;
		var ruo = /^.{6,11}$/;
		var zhong = /^.{11,15}$/;
		var qiang = /^.{15,18}$/;
		if(mima.test($(this).val())){
			if(ruo.test($(this).val())){
				$(".f1-2 span").eq(2).html("-密码强度为弱！");
				$(".list1 li").eq(0).css("background","red");
			}
			if(zhong.test($(this).val())){
				$(".f1-2 span").eq(2).html("-密码强度为中级！");
				$(".list1 li").eq(2).siblings().css("background","orange");
			}
			if(qiang.test($(this).val())){
				$(".f1-2 span").eq(2).html("-密码强度为高级！");
				$(".list1").children().css("background","green");
			}	
			yanzen2 = true;
		}
		else{
			$(".f1-2 span").eq(2).html("-密码错误");
			yanzen2 = false;
		}
	});
//	确认密码
	$(".f1-2-4").keyup(function(){
		if($(this).val()==($(".f1-2-3").val())){
			$(".f1-2 span").eq(3).html("-密码正确！");
			yanzen3 = true;
		}
		else{
			$(".f1-2 span").eq(3).html("-密码不相符");
			yanzen3 = false;
		}
	})
//	用户协议勾选
	function cheched(){
		if($(".f1_2_6").attr('checked')){
			yanzen4 = true;
		}
		else{
			yanzen4 = false;
		}
	}
	
	$(".m-1").click(function(){

		cheched();
		if(yanzen1==true && yanzen2==true && yanzen3==true && yanzen4==true){
					
			$.cookie("user", $(".f1-2-1").val(), {expires:30, path:"/"});
		    $.cookie("password", $(".f1-2-3").val(), {expires:30, path:"/"});

			//ajax
			var xhr = new XMLHttpRequest();
			xhr.open("post", "http://localhost/LOHO_glass/index/register.php", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			var str = "user="+$(".f1-2-1").val()  + "&password="+$(".f1-2-3").val() ;
			xhr.send(str);
			xhr.onreadystatechange = function () {
				if (xhr.readyState==4 && xhr.status==200) {
					//console.log(xhr.responseText);
					var data = JSON.parse(xhr.responseText);
					if(data.status==1){
						//console.log("注册成功");
						location.href = "denglu.html";
					}
					else{
						alert(data.msg);
					}
					//json解析
					//如果注册成功则进入登录页面
					//如果失败则弹出提示信息
				}
			}


		}
		else{
			$(".f1-2 span").eq(5).html("-登录失败！");
		}

	})
	
	
	
	
	
	
	
	
})
