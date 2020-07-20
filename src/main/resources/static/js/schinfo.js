//vue for 循环 给选项渲染
new Vue({
			el: "#screen",
			data: {
				place:allPlace,
				value:allPlaceValue,
				types: scTypes,
				levels: levels
			}
		})
		

	function schajax(url,data,success){
		$.ajax({
			type: "POST", //请求方式
			url: url, //指定的链接
			data: data,//请求后端的参数
			dataType: "JSON", //或"val" //请求返回的数据类型
			async: false, //是否需要同步
			success:function(json){
				var html = '';
				$.each(json.data, function(key, value) {
					html += '<tr><td class="js-yxk-yxmc"> <a target="_blank" href="https://baike.baidu.com/item/' + value.schname +
						'">' + value.schname + '</a> </td>';
					html += '<td>' + value.schcode + '</td>';
					html += '<td>' + value.schpro + '</td>';
					html += '<td>' + value.schtypename + '</td>';
					html += '<td>' + value.schlevelname + '</td>';
					html += '<td class="ch-table-center ch-table-link"><a class="js-alert-myd" href="" data-id="99617187">' +
						value.hot + '</a> </td></tr>';
				})
				$('#schinfo').html(html);
			}
		})
	}

		$(function() {
			var schpro = '不限';//学校地方
			var schtypename ='不限';//学校种类 
			var schlevelname = '_';//专本科选择 后端使用like 所以这里使用_
			
			var data = {
				"schpro": schpro,
				"schtypename": schtypename,
				"schlevelname": schlevelname
			}
			var url = '/schoolinfo.html/action';
			
			schajax(url,data);
			
			$(".tag ").click(function() {
				if ($(this).parent().attr('id') == 'prov_filter') {
					schpro = $(this).attr('value');
				} else if ($(this).parent().attr('id') == 'type_filter') {
					schtypename = $(this).attr('value');
				} else {
					if ($(this).text() == "不限") {
						schlevelname = '_';
					} else {
						schlevelname = $(this).text();
					}
				}
				$(this).removeClass("tag ");
				$(this).addClass("tag active");
				$(this).siblings().removeClass(" active");
				schajax(url,data);
				})
			});