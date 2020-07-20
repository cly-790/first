package com.zhddk.Springv1.service;

import com.zhddk.Springv1.entity.UserBasicInfo;

public interface UserService {

	void reg(UserBasicInfo userbasicinfo);
	
	UserBasicInfo login(String username, String pwd);
}
