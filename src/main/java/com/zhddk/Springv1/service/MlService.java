package com.zhddk.Springv1.service;

import java.util.Map;

public interface MlService {
	/**
	 * 根据专业代码前缀查找专业
	 * @param mlh 专业代码前缀
	 * @return 同类专业（代码，名称）
	 */
	Map<String, String> searchmlBymlh(String mlh);
}
