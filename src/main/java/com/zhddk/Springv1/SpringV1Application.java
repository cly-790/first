package com.zhddk.Springv1;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.zhddk.Springv1.dao")
public class SpringV1Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringV1Application.class, args);
	}

}
