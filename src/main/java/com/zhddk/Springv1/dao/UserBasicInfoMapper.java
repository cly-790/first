package com.zhddk.Springv1.dao;

import java.util.List;

import com.zhddk.Springv1.entity.UserBasicInfo;

import io.lettuce.core.dynamic.annotation.Param;


public interface UserBasicInfoMapper {
	
	//查所有用户
//	@Select("select * from userbasicinfo")
	public List<UserBasicInfo> searchAllUsers();
	
	//查单个用户
//	@Select("SELECT * FROM userbasicinfo  WHERE username = #{username}")
	public UserBasicInfo searchUserByusername(@Param("username")String username);
	
	//添加用户
//	@Insert("INSERT INTO userbasicinfo values(#{userid},#{username},#{userpwd},#{usersex},#{userphone},#{useremail},#{useradmin})")
	public int addUser(@Param("userbasicinfo")UserBasicInfo userbasicinfo);

/*	@InsertProvider(type = UserBasicInfoProvider.class, method = "addUser" )
	public int addUser(UserBasicInfo userbasicinfo);*/
	
	//删
//	@Delete("delete from userbasicinfo where userid = #{userid}")
	int deleteUserById(@Param("userid")int userid);	
	
	//改
//	@Update("update userbasicinfo set username=#{username},userpwd=#{userpwd},usersex=#{usersex},userphone=#{userphone},useremail=#{useremail},useradmin=#{useradmin} where userid=#{userid}")
	int updateUser(@Param("userbasicinfo")UserBasicInfo userbasicinfo);
	
	
}
