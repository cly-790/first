package com.zhddk.Springv1.service.ex;

import com.zhddk.Springv1.commit.ex.UserException;
/**
 * 查找专业不存在
 * @author gegewu
 *
 */
public class MlNotFind extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7768378080720399807L;

	public MlNotFind() {
		super();
	}

	public MlNotFind(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public MlNotFind(String message, Throwable cause) {
		super(message, cause);
	}

	public MlNotFind(String message) {
		super(message);
	}

	public MlNotFind(Throwable cause) {
		super(cause);
	}
	
}
