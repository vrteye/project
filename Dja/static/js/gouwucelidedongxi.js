function gouwuce(){
	var arr = JSON.parse($.cookie("cart"));
	
	var sum=0;
	for(var i=0; i<arr.length; i++){
		var obj = arr[i];
		
		sum+=obj.num;
	}
	return  sum;
}
