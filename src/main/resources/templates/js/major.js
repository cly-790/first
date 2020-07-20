/**
				 * 优化js代码
				 */

				var i_yxmc = "院校名称";
				var i_gkfs = "高考分数";
				var i_zymc = "专业名称";

				//定位到某层级
				var flag = 0;
				if (getUrlParam("pageId") && getUrlParam("type")) {
					flag = 1;
					var specId = getUrlParam("pageId").toString();
					var specType = getUrlParam("type").toString();
					var specIdCc = specId.substr(0, 4);
					var specIdMl = specId.substr(0, 6);
					var specIdXk = specId.substr(0, 8);
				}

				$(document).ready(function() {
					loadUl();
					$("#speciality_submit").click(function() {
						return querySpecialities();
					});
				});

				function judgeBorder() {
					var mlHeight = $('#mlUl').outerHeight(), //左侧第一个ul高度
						xkHeight = $('#xkUl').outerHeight(), //左侧第二个ul高度
						tableHeight = $('#listResult').outerHeight(), //table高度
						errNum = 24; //误差范围
					if ((mlHeight - errNum) > tableHeight || (xkHeight - errNum) > tableHeight) {
						$('#listResult').addClass('zyk-table-container-border');
					} else {
						$('#listResult').removeClass('zyk-table-container-border');
					}
				}

				function loadUl() {
					$.post(
						'https://gaokao.chsi.com.cn/zyk/zybk/ccCategory.action',
						'key=10',
						function(html) {
							$('#ccUl').html(html);
							if (flag) {
								$('#ccUl li#' + specIdCc).click();
							} else {
								$('#ccUl li').eq("0").click();
							}
						}
					);
				}

				//点击层次
				$('#ccUl').on('click', 'li', function() {
					var cc = $(this).attr("id");
					if ($(this).index() == 0) {
						$(this).addClass("onread notop").siblings("li").removeClass("onread");
					} else {
						$(this).addClass("onread").siblings("li").removeClass("onread notop");
					}
					$('#mlUl').html("<li><img src='' />&nbsp;正在加载...<li>");
					$('#xkUl').html("");
					$('#listResult').html("");
					if (cc != null && cc != '') {
						$.post(
							'/findMajor.html/ccaction',
							'key=' + cc,
							function(html) {
								$('#mlUl').html(html);
								if (flag && specType != "cc") {
									$('#mlUl li#' + specIDMl).click();
								} else {
									$('#mlUl li').eq("0").click();
								}
							}
						);
					}
				});

				//点击门类
				$('#mlUl').on('click', 'li', function() {
					var ml = $(this).attr("id");
					if ($(this).index() == 0) {
						$(this).addClass("onread notop").siblings("li").removeClass("onread");
					} else {
						$(this).addClass("onread").siblings("li").removeClass("onread notop");
					}
					$('#xkUl').html("<li><img src='//t1.chei.com.cn/gaokao/images/common/loading.gif' />&nbsp;正在加载...<li>");
					$('#listResult').html("");
					if (ml != null && ml != '') {
						$.post(
							'/findMajor.html/mlaction',
							'key=' + ml,
							function(html) {
								$('#xkUl').html(html);
								if (flag && specType == "xk") {
									$('#xkUl li#' + specIdXk).click();
								} else {
									$('#xkUl li').eq("0").click();
								}
							}
						);
					}
				})
				//点击学科
				$('#xkUl li').live("click", function() {
					var xk = $(this).attr("id");
					if ($(this).index() == 0) {
						$(this).addClass("onread notop").siblings("li").removeClass("onread");
					} else {
						$(this).addClass("onread").siblings("li").removeClass("onread notop");
					}
					$('#listResult').html(
						"<div style='text-align:center'><img src='//t1.chei.com.cn/gaokao/images/common/loading.gif' />&nbsp;正在加载...</div>"
					);
					if (xk != null && xk != '') {
						$.post(
							'/findMajor.html/xkaction',
							'key=' + xk,
							function(html) {
								$('#listResult').html(html);
								judgeBorder();
							}
						);
					}
					flag = 0;
				})
				//取得地址栏参数
				function getUrlParam(name) {
					var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
					var r = window.location.search.substr(1).match(reg);
					if (r != null) {
						return unescape(r[2]);
					}
					return null;
				}

				String.prototype.trim = function() {
					return this.replace(/(^\s*)|(\s*$)/g, "");
				}

				function querySpecialities() {
					var keyword = $('#speciality').val();
					if (keyword.trim() == "请输入专业名称") {
						alert("请输入专业名称");
						$('#speciality').focus();
						return false;
					}
					if (!isChineseAndTwo("#speciality", "专业名称")) {
						return false;
					}
				}

				//判断名称是汉字且至少两个
				function isChineseAndTwo(id, text) {
					var re = /[^\u4e00-\u9fa5]/;
					if ($(id).val().length < 2) {
						alert(text + "请至少输入两个汉字");
						$(id).focus();
						return false;
					}
					if (re.test($(id).val())) {
						alert(text + "请输入汉字");
						$(id).focus();
						return false;
					}
					return true;
				}