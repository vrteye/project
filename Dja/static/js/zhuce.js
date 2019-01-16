function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  };

  return cookieValue;
}


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

		    var phone = $(".f1-2-1").val();
			var password = $(".f1-2-3").val();

			var csrftoken = getCookie('csrftoken');
			 $.ajax({
						type:"POST",
						url: '/mt/zhuce/',
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						data: {
							'phone':phone,
							'password':password,
						},
						dataType: 'json',
						beforeSend: function(xhr, settings) {
							if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
							  xhr.setRequestHeader("X-CSRFToken", csrftoken);
							}
						},
						success: function (result) {
						 alert('成功');
						 // var status = result['status']
						location .href='/mt/'
						},
						error: function () {
						  alert('错误');
						},
					  })



		}
		else{
			$(".f1-2 span").eq(5).html("-登录失败！");
		}

	})








})
