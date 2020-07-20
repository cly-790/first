$(function() {
	$('#login').submit(function() {
		//此处可做表单验证
		if ($("#name").val() == "") {
			alert("用户名不能为空");
			return false;
		}
		$.ajax({
			type: "post",
			url: "/login",
			data: $("#login").serialize(), //序列化表单
			beforeSend: function() {
				$("#btn-submit").attr("disabled", true); //防止用户重复提交表单
				$("#btn-submit").val("正在登陆...");
			},
			success: function(json) {
				if (json.number == 0) {
					alert('登陆成功');
					var exp = new Date();
					exp.setTime(exp.getTime() + 60 * 1000 * 60 * 24); //24小时
					document.cookie = "userName=" + json.data.username + ";expires=" + exp.toGMTString();
					document.cookie = "passWord=" + json.data.password + ";expires=" + exp.toGMTString();
					// document.cookie = "score=" + json.data.score + ";expires=" + exp.toGMTString();
					document.cookie = "tele=" + json.data.userphone + ";expires=" + exp.toGMTString();
					// document.cookie = "scoreRank=" + json.data.scoreRank + ";expires=" + exp.toGMTString();;
					window.location.href = "index.html";
				} else {
					$("#btn-submit").attr("disabled", false);
					$("#btn-submit").val("登陆");
					alert("用户或密码错误！");
				}
			}
		});
	});
	$('#register').submit(function() {
		//此处可做表单验证
		if ($("#regpass").val() != $("#reregpass").val()) {
			alert("两次输入密码不一致!");
			return false;
		}
		$.ajax({
			type: "POST",
			url: "/register",
			data: $("#register").serialize(),
			beforeSend: function() {
				$("#btn-submit").attr("disabled", true); //防止用户重复提交表单
				$("#btn-submit").val("正在注册...");
			},
			success: function(json) {
				if (msg == 0) {
					alert('注册成功,正在跳转....');
					var exp = new Date();
					exp.setTime(exp.getTime() + 60 * 1000 * 60 * 24); //24小时
					document.cookie = "userName=" + $("#regname").val() + ";expires=" + exp.toGMTString();
					document.cookie = "passWord=" + $("#regpass").val() + ";expires=" + exp.toGMTString();
					// document.cookie = "score=";
					// document.cookie = "scoreRank=";
					document.cookie = "tele=";
					window.location.href = "index.html";
				} else {
					$("#btn-submit").attr("disabled", false);
					$("#btn-submit").val("注册");
					alert("该账号已被注册！");
				}
			}
		});
	});
	$(".input input").focus(function() {

		$(this).parent(".input").each(function() {
			$("label", this).css({
				"line-height": "18px",
				"font-size": "18px",
				"font-weight": "100",
				"top": "0px"
			})
			$(".spin", this).css({
				"width": "100%"
			})
		});
	}).blur(function() {
		$(".spin").css({
			"width": "0px"
		})
		if ($(this).val() == "") {
			$(this).parent(".input").each(function() {
				$("label", this).css({
					"line-height": "60px",
					"font-size": "24px",
					"font-weight": "300",
					"top": "10px"
				})
			});

		}
	});

	$(".button").click(function(e) {
		var pX = e.pageX,
			pY = e.pageY,
			oX = parseInt($(this).offset().left),
			oY = parseInt($(this).offset().top);

		$(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) +
			'px;margin-top:' + (pY - oY) + 'px;"></span>')
		$('.x-' + oX + '.y-' + oY + '').animate({
			"width": "500px",
			"height": "500px",
			"top": "-250px",
			"left": "-250px",

		}, 600);
		$("button", this).addClass('active');
	})

	$(".alt-2").click(function() {
		if (!$(this).hasClass('material-button')) {
			$(".shape").css({
				"width": "100%",
				"height": "100%",
				"transform": "rotate(0deg)"
			})

			setTimeout(function() {
				$(".overbox").css({
					"overflow": "initial"
				})
			}, 600)

			$(this).animate({
				"width": "140px",
				"height": "140px"
			}, 500, function() {
				$(".box").removeClass("back");

				$(this).removeClass('active')
			});

			$(".overbox .title").fadeOut(300);
			$(".overbox .input").fadeOut(300);
			$(".overbox .button").fadeOut(300);

			$(".alt-2").addClass('material-buton');
		}

	})

	$(".material-button").click(function() {

		if ($(this).hasClass('material-button')) {
			setTimeout(function() {
				$(".overbox").css({
					"overflow": "hidden"
				})
				$(".box").addClass("back");
			}, 200)
			$(this).addClass('active').animate({
				"width": "700px",
				"height": "700px"
			});

			setTimeout(function() {
				$(".shape").css({
					"width": "50%",
					"height": "50%",
					"transform": "rotate(45deg)"
				})

				$(".overbox .title").fadeIn(300);
				$(".overbox .input").fadeIn(300);
				$(".overbox .button").fadeIn(300);
			}, 700)

			$(this).removeClass('material-button');

		}

		if ($(".alt-2").hasClass('material-buton')) {
			$(".alt-2").removeClass('material-buton');
			$(".alt-2").addClass('material-button');
		}

	});

});
