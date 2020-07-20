package com.zhddk.Springv1.service;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zhddk.Springv1.entity.SchInfo;
import com.zhddk.Springv1.service.imp.SchinfoServiceImp;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SchInfoSeviceTest {
	@Autowired
	public SchinfoServiceImp sevice;
	
	@Test
	public void searchschinfo() {
		String schpro ="浙江省";
		String schtypename="综合院校";
		String schlevelname="%本科%";
		List<SchInfo> nihao = sevice.searchschinfoByjson(schpro, schtypename, schlevelname);
		System.err.println(nihao);
	}
}
