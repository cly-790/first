package com.zhddk.Springv1.service.ex;

import com.zhddk.Springv1.commit.ex.UserException;

/**
 * 用户名已经存在
 * @author gegewu
 *
 */
public class UserBeCreated extends UserException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3947481391511676046L;

	public UserBeCreated() {
		super();
	}

	public UserBeCreated(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserBeCreated(String message, Throwable cause) {
		super(message, cause);
	}

	public UserBeCreated(String message) {
		super(message);
	}

	public UserBeCreated(Throwable cause) {
		super(cause);
	}
	
}
