package com.zhddk.Springv1.service;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zhddk.Springv1.entity.UserBasicInfo;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserSeviceTest {
	
	@Autowired
	private UserService userService;
	
	@Test
	public void login() {
		String username="钟正";
		String userpwd = "123456789";
		UserBasicInfo user = userService.login(username,userpwd);
		System.err.println(user);
	}
}
