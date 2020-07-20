

function GetRowData(row) { //输入行 转换为json
	var rowData = {}; //创建一个空对象
	for (let j = 0; j < row.length - 1; j++) { //遍历该行的所有单元格
		let key;
		if (row.eq(j).text() == "") {
			value = row.eq(j).find("input").val();
		} else {
			value = row.eq(j).text();
		}
		switch (j) {
			case 0:
				key = "id";
				break;
			case 1:
				key = "schno";
				break;
			case 2:
				key = "schname";
				break;
			case 3:
				key = "zyno";
				break;
			case 4:
				key = "zyname";
				break;
		}
		rowData[key] = value; //为对象添加属性和添加值
	}
	return rowData; //返回该对象
}



function GetTableData(table) { //输入表 转换为json数组
	var tableData = new Array(); //创建数组
	//alert("行数：" + table.find("tr").length); //弹出总行数
	for (var i = 1; i < table.children("tr").length; i++) { //遍历每行
		tableData.push(GetRowData(table.find("tr").eq(i).find("td"))); //传递每行,
	}
	return tableData;
}

$(function() {
	$("#toExcel").click(function() { //将tab导出成Excel
		var jsonData = GetTableData($("#tab>tbody"));//转换为json数组
		let str = `序号,学校代码,学校名称,专业代码,专业名称\n`;
		//增加\t为了不让表格显示科学计数法或者其他格式
		for (let i = 0; i < jsonData.length; i++) {
			for (let item in jsonData[i]) {
				str += `${jsonData[i][item] + '\t'},`;
			}
			str += '\n';
		}
		//encodeURIComponent解决中文乱码
		let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
		//通过创建a标签实现
		let link = document.createElement("a");
		link.href = uri;
		//对下载的文件命名
		link.download = "我的志愿表.csv";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});
	
	$(".add").on("click", function() {//点击添加事件，将志愿项目添加到zy表中
		if ($(this).attr("name") == "sx") { //增添
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			td.innerHTML = $("#tab tr").length;
			tr.append(td);
			for (var i = 0; i < 4; i++) {
				var td = document.createElement("td");
				var input = document.createElement("input");
				input.type = "type";
				td.append(input);
				tr.append(td);
			}
			var bu = document.createElement("td");
			bu.innerHTML =
				'<td><nobr><button id ="del">删除</button>&nbsp;<nobr><button id ="up">上移</button>&nbsp;<nobr><button id ="down">下移</button></td>';
			tr.append(bu);
			$("#tab").append(tr);
		} else { //加入候选
			var ta = document.getElementById("tab");
			var a = $(this).parent().parent().index();
			var tr = $("#tab2 tr").eq(a).clone();
			tr.eq(0).find("td").eq(4).remove();
			tr.eq(0).find("td").eq(4).remove();
			var td = document.createElement("td");
			//tr.append(td);
			td.innerHTML = $("#tab tr").length;
			tr.prepend(td);
			tr.append($(
				'<td><nobr><button id ="del">删除</button>&nbsp;<nobr><button id ="up">上移</button>&nbsp;<nobr><button id ="down">下移</button></td>'
			));
			$("#tab").append(tr);
		}
	});
	
	$("#del").on("click", function() { //删除按钮
		$(this).parentsUntil("tr").parent().remove();
		for (let i = 1; i < $("#tab tr").length; i++) {
			var tr = $("#tab tr").eq(i);
			tr.find("td").eq(0).remove();
			var td = document.createElement("td");
			td.innerHTML = i;
			tr.prepend(td);
		}
	});
	
	$("#clearAll").on("click", function() { //清空按钮
		$("#tab").html(
			"<tr><th width='8%'>序号</th><th width='12%'>学校代码</th><th width='22%'>学校名称</th><th width='12%'>专业代码</th><th width='22%'>专业名称</th><th width='24%'>操作<button id ='clearAll'>清空</button><th></tr>"
		);
	});
	
	$("#up").on("click", function() {//上移
		var self = $(this).parent().parent().parent().index() + 1;
		var up = self - 1;
		if (up == 1) {
			return;
		}
		//更改序号
		var tr = $("#tab tr").eq(self - 1);
		tr.find("td").eq(0).remove();
		var td = document.createElement("td");
		td.innerHTML = up - 1;
		tr.prepend(td);
		var tr = $("#tab tr").eq(up - 1);
		tr.find("td").eq(0).remove();
		var td2 = document.createElement("td");
		td2.innerHTML = self - 1;
		tr.prepend(td2);
		$("#tab tr:nth-child(" + up + ")").insertAfter($("#tab tr:nth-child(" + self + ")"));
	});
	
	$("#down").on("click", function() {//下移
		var self = $(this).parent().parent().parent().index() + 1;
		var down = self + 1;
		//更改序号
		var tr = $("#tab tr").eq(self - 1);
		tr.find("td").eq(0).remove();
		var td = document.createElement("td");
		td.innerHTML = down - 1;
		tr.prepend(td);
		var tr = $("#tab tr").eq(down - 1);
		tr.find("td").eq(0).remove();
		var td2 = document.createElement("td");
		td2.innerHTML = self - 1;
		tr.prepend(td2);
		$("#tab tr:nth-child(" + self + ")").insertAfter($("#tab tr:nth-child(" + down + ")"));
	});
})
