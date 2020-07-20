package com.zhddk.Springv1.mapper;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zhddk.Springv1.dao.MlMapper;
import com.zhddk.Springv1.entity.Ml;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MlMapperTest {
	@Autowired
	public MlMapper mapper;
	
	
	@Test
	public void search() {
		String zycode = "01";
		List<Ml> result = mapper.searchmlBymlh(zycode);
		System.err.println(result);
	}
}
