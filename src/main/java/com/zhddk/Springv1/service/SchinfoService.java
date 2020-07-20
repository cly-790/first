package com.zhddk.Springv1.service;

import java.util.List;
import java.util.Map;
import com.zhddk.Springv1.entity.SchInfo;

public interface SchinfoService {
	List<SchInfo> searchschinfoByjson(String schpro,String schtypename,String schlevelname);
}
