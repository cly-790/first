package com.zhddk.Springv1.service.ex;

import com.zhddk.Springv1.commit.ex.UserException;

/**
 * 用户不存在或者已删除
 * @author gegewu
 *
 */
public class UserNotFound extends UserException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6585445837611096404L;

	public UserNotFound() {
		super();
	}

	public UserNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserNotFound(String message, Throwable cause) {
		super(message, cause);
	}

	public UserNotFound(String message) {
		super(message);
	}

	public UserNotFound(Throwable cause) {
		super(cause);
	}
	
}
