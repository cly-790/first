package com.zhddk.Springv1.mapper;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zhddk.Springv1.dao.SchinfoMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SchInfoTest {
	@Autowired
	SchinfoMapper mapper;
	
	@Test
	public void searchschinfo() {
		
		String schpro ="不限";
		String schtypename = "政法院校";
		String schlevelname ="本科%";
		System.out.println(mapper.searchschinfoByjson(schpro, schtypename, schlevelname));
	}
	
}
