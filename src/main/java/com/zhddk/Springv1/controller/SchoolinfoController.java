package com.zhddk.Springv1.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhddk.Springv1.commit.contronller.BaseController;
import com.zhddk.Springv1.entity.JSONResult;
import com.zhddk.Springv1.entity.SchInfo;
import com.zhddk.Springv1.service.SchinfoService;

@Controller
public class SchoolinfoController extends BaseController{
	
	@Autowired
	private SchinfoService schinfoService;
	
	//院校库主界面
	@RequestMapping("/schoolinfo.html")
	public String schoolinfo() {
		return "schoolinfo.html";
	}
	
	@ResponseBody
	@PostMapping("/schoolinfo.html/action")
	public JSONResult<List> FindSchinfoaction(@RequestParam String schpro,String schtypename,String schlevelname){
		List<SchInfo> schinfomap =  schinfoService.searchschinfoByjson(schpro,schtypename,schlevelname+"%");
		
		return new JSONResult<List>(STATUE_NUMBER,STATUE_MESSAGE,schinfomap);
	}
	
}
