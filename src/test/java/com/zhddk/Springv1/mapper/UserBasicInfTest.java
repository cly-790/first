package com.zhddk.Springv1.mapper;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zhddk.Springv1.dao.UserBasicInfoMapper;
import com.zhddk.Springv1.entity.UserBasicInfo;


@RunWith(SpringRunner.class)
@SpringBootTest
public class UserBasicInfTest {
	@Autowired
	private UserBasicInfoMapper mapper;
	
	@Test
	public void findAll() {
		System.err.println(mapper.searchAllUsers());
	}
	
	@Test
	public void find() {
		String username = "钟正";
		System.err.println(mapper.searchUserByusername(username));
	}
	
	@Test
	public void insert() {
		UserBasicInfo user = new UserBasicInfo() ;
		user.setUsername("admin");
		user.setUserpwd("123456");
		System.err.println(mapper.addUser(user));
	}
	
	@Test
	public void delect() {
		UserBasicInfo user = mapper.searchUserByusername("admin");
		System.out.println(mapper.deleteUserById(user.getUserid()));
	}
	
}
