package com.zhddk.Springv1.service.ex;

import com.zhddk.Springv1.commit.ex.UserException;

public class PassWordError extends UserException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5924250108375233670L;

	public PassWordError() {
		super();
	}

	public PassWordError(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public PassWordError(String message, Throwable cause) {
		super(message, cause);
	}

	public PassWordError(String message) {
		super(message);
	}

	public PassWordError(Throwable cause) {
		super(cause);
	}
	
}
