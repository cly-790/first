package com.zhddk.Springv1.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhddk.Springv1.commit.contronller.BaseController;
import com.zhddk.Springv1.entity.JSONResult;
import com.zhddk.Springv1.entity.UserBasicInfo;
import com.zhddk.Springv1.service.UserService;

@Controller
public class UserController extends BaseController{
	
	@Autowired
	private UserService userService;
	
	
/*	//测试cookie
	@ResponseBody
	@RequestMapping("/loginsuccess")
	public Map<String, String> loginsuccess() {
		Map<String, String> @ResponseBody = new HashMap<String, String>();
		a.put("userName", "zzh");
		a.put("passWord", "123456789");
		return a;
	}*/
	
	//登录页面
	@RequestMapping("/login.html")
	public String login() {
		return "login.html";
	}

	@ResponseBody
	@RequestMapping("/login")
	public JSONResult<UserBasicInfo> login(String username,String userpwd) {
		
		UserBasicInfo user = userService.login(username,userpwd);
		
		return new JSONResult<UserBasicInfo>(STATUE_NUMBER,STATUE_MESSAGE,user);
	}
	
	@ResponseBody
	@RequestMapping("/register")
	public void register(String username,String userpwd,String reuserpwd,Model model) {
		UserBasicInfo userbasicinfo = new UserBasicInfo(username,userpwd);
		userService.reg(userbasicinfo);
	}
}
