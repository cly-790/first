package com.zhddk.Springv1.service.imp;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

import com.zhddk.Springv1.dao.SchinfoMapper;
import com.zhddk.Springv1.entity.SchInfo;
import com.zhddk.Springv1.service.SchinfoService;
import com.zhddk.Springv1.service.ex.SchNotFind;

@Component
public class SchinfoServiceImp implements SchinfoService {

	@Autowired
	private SchinfoMapper schinfoMapper;
	@Autowired
    private RedisTemplate redisTemplate;
	
	@Override
	public List<SchInfo> searchschinfoByjson(String schpro, String schtypename, String schlevelname) {
		
		//从缓存中获取筛选条件
        String key = schpro + schtypename+schlevelname;
        ValueOperations<String, List<SchInfo>> operations = redisTemplate.opsForValue();
		
        // 缓存存在
        boolean hasKey = redisTemplate.hasKey(key);
        if (hasKey) {
        	List<SchInfo> schinfolist = operations.get(key);
            return schinfolist;
        }
        
		List<SchInfo> schinfolist = schinfoMapper.searchschinfoByjson(schpro,schtypename,schlevelname);
		if(schinfolist == null) {
			throw new SchNotFind();
		}
		// 插入缓存
		operations.set(key, schinfolist, 10, TimeUnit.SECONDS);
		
		return schinfolist;
	}

}
