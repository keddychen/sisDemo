$(function(){
	//switch
	$("#switchInput").on("click",function(){
		setTimeout(function(){
			location.href = "../index.html";
		},500);
	});
	$(".nav li").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
	});
	
	//回到首页
	$(".back_index").on("click",function(){
		location.href="../index.html";
	});
	
	//日历
	$("#showDates").on("click",function(){
		$(".pop").show();
	});
	$(".hide_btn").on("click",function(){
		$(".pop").hide();
	});
	
	//表格
	$("#tableChange").on("click",function(){
		if($(this).hasClass("table_off")){
			$(this).removeClass("table_off").addClass("table_on").attr("src","../styles/images/bg-table.jpg");
		}else{
			$(this).removeClass("table_on").addClass("table_off").attr("src","../styles/images/bg-table-2.jpg");
		}
	});
	
	//扫一扫
	$(".camera").on("click",function(){
		location.href="camera.html";
	});
	//职位代码
	$(".show_job").on("click",function(){
		$(".pop").show();
	});
	$(".input_job").on("input",function(){
		$(".hide_job_list").show();
	});
	$(".input_job").on("blur",function(){
		$(".hide_job_list").hide();
	});
	$(".hide_job_list").on("click",function(){
		$(this).hide();
	});
	
	//投保人客户信息
	$("#showTouBao,#preTou").on("click",function(){
		$(".sub_nav").hide().find("li").removeClass("current");
		$("#touInfo").show();
		$("#beiInfo").hide();
		$(".footer_btn").eq(1).hide();
		$(".footer_btn").eq(0).show();
	});
	//被保险人客户信息
	$("#showBeiBao,#nextBei").on("click",function(){
		$(".sub_nav").show();
		$("#beiInfo").show();
		$("#touInfo").hide();
		$(".footer_btn").eq(0).hide();
		$(".footer_btn").eq(1).show();
	});
	$("#preTou").on("click",function(){
		$(".sub_nav").hide().find("li").removeClass("current");
		$(".nav li").removeClass("current").eq(0).addClass("current");
		$("#touInfo").show();
		$("#beiInfo").hide();
	});
	$("#showBeiBaoList li img").on("click",function(){
		$(this).parent().remove();
	});

});
function addNavDelete(obj){
	var _obj = document.getElementById(obj),
		startX = 0,isDown = false,movingX = 0;
	_obj.addEventListener("mousedown",function(e){
		isDown = true;
		startX = e.clientX;
	});
	_obj.addEventListener("mousemove",function(e){
		if(isDown == true){
			movingX = e.clientX - startX;
			if(movingX >= 10){
				$("#showBeiBaoList li div").css({"transform":"translateX(0px)"});
				return false;
			}else if(movingX <= -10){
				$("#showBeiBaoList li div").css({"transform":"translateX(0px)"});
				$("#"+obj).find("div").css({"transform":"translateX(-95px)"});
				return false;
			}
		}
	});
	_obj.addEventListener("mouseup",function(e){
		isDown = false;
		startX = 0;
	});
	_obj.addEventListener("mouseout",function(e){
		isDown = false;
		startX = 0;
	});
}