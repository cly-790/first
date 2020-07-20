package com.zhddk.Springv1.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zhddk.Springv1.entity.Ml;

import io.lettuce.core.dynamic.annotation.Param;

//@Mapper
public interface MlMapper {
	
	
//	@Select("SELECT * FROM zyinfo  WHERE zycode like #{mlh}")
	/**
	 * 
	 * @param 专业类别编码
	 * @return 相关专业
	 */
	public List<Ml> searchmlBymlh(@Param("zycode")String zycode);

	
	
}
