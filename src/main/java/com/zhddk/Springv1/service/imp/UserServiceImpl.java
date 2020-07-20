package com.zhddk.Springv1.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zhddk.Springv1.dao.UserBasicInfoMapper;
import com.zhddk.Springv1.entity.UserBasicInfo;
import com.zhddk.Springv1.service.UserService;
import com.zhddk.Springv1.service.ex.PassWordError;
import com.zhddk.Springv1.service.ex.UserBeCreated;
import com.zhddk.Springv1.service.ex.UserNotFound;

@Component
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserBasicInfoMapper userBasicInfoMapper;
	
	
	@Override
	public void reg(UserBasicInfo userbasicinfo) {
		String username = userbasicinfo.getUsername();
		UserBasicInfo user = userBasicInfoMapper.searchUserByusername(username);
		if(user!=null) {
			throw new UserBeCreated("用户已存在");
		}
		userBasicInfoMapper.addUser(userbasicinfo);

	}


	@Override
	public UserBasicInfo login(String username, String pwd) {
		UserBasicInfo user =userBasicInfoMapper.searchUserByusername(username);
		if(user == null) {
			throw new UserNotFound();
		}else if(user.getDelect()==1) {
			throw new UserNotFound();
		}
		String inputPwd = user.getUserpwd();
		if(!pwd.equals(inputPwd)) {
			throw new PassWordError();
		}
		return user;
		
	}
	
}
