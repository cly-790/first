package com.zhddk.Springv1.entity;

public class JSONResult<T> {
	private Integer number ;
	private String message;
	private T data;
	
	public JSONResult() {
		super();
	}
	public JSONResult(Integer number, String message, T data) {
		super();
		this.number = number;
		this.message = message;
		this.data = data;
	}
	public Integer getNumber() {
		return number;
	}
	public void setNumber(Integer number) {
		this.number = number;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "JSONResult [number=" + number + ", message=" + message + ", data=" + data + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((data == null) ? 0 : data.hashCode());
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((number == null) ? 0 : number.hashCode());
		return result;
	}

}
