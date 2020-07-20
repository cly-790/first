package com.zhddk.Springv1.service;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zhddk.Springv1.service.imp.MlServiceImp;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MlSeviceTest {
	@Autowired
	public MlServiceImp sevice;
	
	@Test
	public void searchml() {
		String mlh ="01";
		Map<String,String> map = sevice.searchmlBymlh(mlh);
		System.err.println(map);
	}
}
