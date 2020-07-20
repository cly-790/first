var allPlace = ["安徽", "北京", "重庆", "福建", "甘肃", "贵州", "广东", "广西", "湖北", "海南", "黑龙江", "湖南", "河南", "河北", "吉林", "江西", "江苏",
	"辽宁", "宁夏", "内蒙古", "青海", "山西", "山东", "陕西", "四川", "上海", "天津", "西藏", "新疆", "云南", "浙江"
];
//学校所在地
//学校所在地全称
var allPlaceValue = ["安徽省", "北京市", "重庆省", "福建省", "甘肃省", "贵州省", "广东省", "广西省", "湖北省", "海南省", "黑龙江省", "湖南省", "河南省", "河北省",
	"吉林省", "江西省", "江苏省",
	"辽宁省", "宁夏省", "内蒙古", "青海省", "山西省", "山东省", "陕西省", "四川省", "上海市", "天津市", "西藏省", "新疆省", "云南省", "浙江省"
];
//学校类型
var scTypes = ["综合", "语言", "工科", "医药", "体育", "财经", "艺术", "民族", "师范", "林业", "农业", "政法"];
//学校种类
var levels = ["本科", "专科"];
//专业总类型
var zyTypes = [{name:"哲学",category:["哲学类","人文科学试验班类"]},
				{name:"经济学",category:["经济学类","财政学类","经济与贸易类","金融学类"]},
				{name:"法学",category:["社会学类","公安学类","政治学类","民族学类","法学试验班类","法学类","马克思主义理论类"]},
				{name:"教育学",category:["教育学类","体育学类"]},
				{name:"历史学",category:["历史学类"]},
				{name:"理学",category:["化学类","统计学类","理科试验班类","大气科学类","地质学类","海洋科学类","物理学类","生物科学类"
										,"地球物理学类","天文学类","数学类","地理科学类","心理学类"]},
				{name:"文学",category:["新闻传播学类","外国语言文学类","中国语言文学类","文科试验班类"]},
				{name:"工学",category:["水利类","海洋工程类","机械类","电气类","纺织类","矿业类","安全科学与工程类","农业工程类"
										,"计算机类","化工与制药类","仪器类","生物医学工程类","航空航天类","兵器类","测绘类","林业工程类"
										,"电子信息类","公安技术类","工科试验班类","食品科学与工程类","建筑类","交通运输类","环境科学与工程类"
										,"材料类","轻工类","地质类","能源动力类","土木类","自动化类","生物工程类","力学类","核工程类"]},
				{name:"农学",category:["自然保护与环境生态类","草学类","动物生产类","林学类","水产类","植物生产类","动物医学类"]},
				{name:"医学",category:["医学试验班类","药学类","护理学类","基础医学类","医学技术类","中药学类","中医学类"
										,"公共卫生与预防医学类","法医学类","口腔医学类","临床医学类"]},
				{name:"管理学",category:["物流管理与工程类","工商管理类","管理学试验班类","","电子商务类","农业经济管理类"
										,"工业工程类","公共管理类","旅游管理类","图书情报与档案管理类","管理科学与工程类"]}]





function getCookie(name) {
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for (var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if (arr[0] == name) return arr[1];
	}
	return "";
}


Vue.component("common-head", {
	data: function() {
		return {
			username:getCookie("userName"),
			score:getCookie("score")
		}
	},
	props:["findSchool"],
	template: `
		<div class="topNav clear">
			<div class="content clear">
				<ol class="topMenu fr">
					<li class="topMenu-item">
						<div class="act-vip">
							<a href="./index.html" rel="nofollow" class="agent" >
								<span>回到首页</span>
							</a>
						</div>
					</li>
					<li class="topMenu-item">
						<div class="act-vip">
							<a href="" rel="nofollow" class="agent">
								<span>新手教程</span>
							</a>
						</div>
					</li>
					<li class="topMenu-item">
						<div class="act-vip">
							<a href="" target="_blank" rel="nofollow" class="agent">
								<span>快速通道</span>
							</a>
						</div>
					</li>
					<li class="topMenu-item">
						<div class="act-vip">
							<span><a href="">开通</a></span> | <span class="btn-activate-vip">激活 VIP</span>
						</div>
					</li>				
					<li class="topMenu-item">
						<div class="act-user" v-if="username == null || username ==''">
							<span id="login_link"><a href="login.html">登录/注册</a></span> 
							<div class="drop user-menu" style = "width:100px" >
								<ul class="user-menu-item">
									<li class="logout"><a href="login.html">请先登录</a></li>
								</ul>
							</div> 
						</div>
						<div class="act-user" v-else>
							<span id="login_link"><a href="login.html">{{username}}</a></span> 
							<div class="drop user-menu" style = " width:100px" >
								<ul class="user-menu-item ">
									<li class="logout">
										<a>我的志愿表</a>
									</li>
									<li class="logout">
										<a>我的信息</a>
									</li><li class="logout">
										<a>帐号安全</a>
									</li>
									<li class="logout">
										<a id="logout_link">退出登录</a>
									</li>
								</ul>
							</div> 
						</div>
					</li>
				</ol>
			</div>
		</div>
		`
})

$(function(){
	var islogin = getCookie("userName");
	var isscore = getCookie("score");
	if (islogin !== '') {
		$(".product").html('<a href="myapply.html">个人中心</a>');
		$(".zhiyuan").html('<a href="myspace.html">填志愿</a>');
		if (isscore !== '') {
			$(".zhiyuan").html('<a href="applysch.html">填志愿</a>');
		}
	}
	
	$("#logout_link").on("click", function() {
		document.cookie = "userName=";
		document.cookie = "passWord=";
		document.cookie = "score=";
		document.cookie = "ScoreRank=";
		document.cookie = "tele=";
		window.location.reload(true);
	});
})


Vue.component("common-end", {
	template: `
	     <div class="content"> 
	      <div class="clear"> 
	       <div class="footer-left"> 
	        <div class="clear"> 
	         <div class="footer-list"> 
	          <h3>VIP</h3> 
	          <ul> 
	           <li> <a href="" class="js-buy">购买VIP</a> </li> 
	           <li><a href="javascript:;" class="btn-activate-vip">激活</a></li> 
	          </ul> 
	         </div> 
	         <div class="footer-list"> 
	          <h3>常见问题</h3> 
	          <ul> 
	           <li><a href="" rel="nofollow">产品使用</a></li> 
	           <li><a href="" rel="nofollow">会员充值</a></li> 
	           <li><a href="" rel="nofollow">功能介绍</a></li>  
	          </ul> 
	         </div> 
			 <div class="footer-list"> 
	          <ul> 
			  <h3>关于我们</h3>
	           <li><a href="" rel="nofollow">团队介绍</a></li> 
	           <li><a href="" rel="nofollow">联系我们</a></li> 
	           <li><a href="" rel="nofollow">商务合作</a></li> 
	           <li><a href="" rel="nofollow">服务条款</a></li> 
	          </ul> 
	         </div> 
			 <div class="footer-list"> 
			 <h3>关注我们</h3>
				<ul> 
					<li>
						<img src="高考志愿汇/img/dy_ewm.png" alt="" />
							<h3>云订阅号</h3>
					</li>
				</ul> 
				
			 </div> 
			 <div class="footer-list"> 
				<h3>~</h3>
				<ul> 
					<li>
						<img src="高考志愿汇/img/dy_ewm.png" alt="" />
							<h3>云服务号</h3>
					</li>
				</ul> 
			 </div> 
	
	        </div> 
	       </div> 
	       <div class="footer-right"> 
	        <h3>来电咨询:</h3> 
	        <p class="phone">400-xxx-xxxx</p> 
	        <p>期待为您提供帮助</p> 
	        <p>本服务只提供参考，不代表一定成功</p> 
	       </div> 
	      </div> 
	      <div class="service-tel">
	        客服热线：13456789
	      </div> 
	     </div> `
})

new Vue({
	el: ".g-head"
})
new Vue({
	el: ".footer"
});
