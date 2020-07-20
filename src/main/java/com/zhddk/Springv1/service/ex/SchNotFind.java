package com.zhddk.Springv1.service.ex;

import com.zhddk.Springv1.commit.ex.SchException;
/**
 * 根据三种选择学校找不到
 * @author gegewu
 *
 */
public class SchNotFind extends SchException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4599501139578726968L;

	public SchNotFind() {
		super();
	}

	public SchNotFind(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public SchNotFind(String message, Throwable cause) {
		super(message, cause);
	}

	public SchNotFind(String message) {
		super(message);
	}

	public SchNotFind(Throwable cause) {
		super(cause);
	}

}
