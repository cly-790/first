package com.zhddk.Springv1.entity;

//门类号/学科号相同数据类型，共用一个实体
public class Ml {
	private String zycode;
	private String zyname;
	public String getzycode() {
		return zycode;
	}
	public void setzycode(String zycode) {
		this.zycode = zycode;
	}
	public String getzyname() {
		return zyname;
	}
	public void setzyname(String zyname) {
		this.zyname = zyname;
	}
	@Override
	public String toString() {
		return "Ml [zycode=" + zycode + ", zyname=" + zyname + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((zycode == null) ? 0 : zycode.hashCode());
		result = prime * result + ((zyname == null) ? 0 : zyname.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ml other = (Ml) obj;
		if (zycode == null) {
			if (other.zycode != null)
				return false;
		} else if (!zycode.equals(other.zycode))
			return false;
		if (zyname == null) {
			if (other.zyname != null)
				return false;
		} else if (!zyname.equals(other.zyname))
			return false;
		return true;
	}
	
	
	
	
	
	
}
