package com.zhddk.Springv1.commit.contronller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhddk.Springv1.commit.ex.UserException;
import com.zhddk.Springv1.entity.JSONResult;
import com.zhddk.Springv1.service.ex.PassWordError;
import com.zhddk.Springv1.service.ex.UserBeCreated;
import com.zhddk.Springv1.service.ex.UserNotFound;

public class BaseController {
	public static final Integer STATUE_NUMBER = 0;
	public static final String STATUE_MESSAGE="OK";

	@ExceptionHandler(UserException.class)
	@ResponseBody
	public JSONResult<Void> handleException(Throwable e){
		JSONResult<Void> jr =new JSONResult<Void>();
		if(e instanceof UserNotFound) {
			jr.setNumber(1);
			jr.setMessage("该用户不存在");
		}else if (e instanceof UserBeCreated) {
			jr.setNumber(2);
			jr.setMessage("该用户已删除");
		}else if(e instanceof PassWordError) {
			jr.setNumber(3);
			jr.setMessage("密码错误");
		}
		
		return jr;
	}
}
