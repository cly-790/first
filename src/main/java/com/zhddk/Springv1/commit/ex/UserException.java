package com.zhddk.Springv1.commit.ex;

public class UserException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2841285458118883103L;

	public UserException() {
		super();
	}

	public UserException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UserException(String message, Throwable cause) {
		super(message, cause);
	}

	public UserException(String message) {
		super(message);
	}

	public UserException(Throwable cause) {
		super(cause);
	}
	
}
