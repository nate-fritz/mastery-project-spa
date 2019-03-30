package org.wecancodeit.masteryprojectspaapi.models;


import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;


@Entity
public class Make {
	
	@Id
	@GeneratedValue
	private Long id;
	private String makeName;
	private String makeCountry;
	@Lob
	private String makeImg;
	
	@ManyToMany
	private Collection<Type> types;
	
	public Make() {}

	public Make(String makeName, String makeCountry, String makeImg, Type ...types) {
		this.makeName = makeName;
		this.makeCountry = makeCountry;
		this.makeImg = makeImg;
		this.types = Arrays.asList(types);
	}

	public Long getId() {
		return id;
	}

	public String getMakeName() {
		return makeName;
	}

	public String getMakeCountry() {
		return makeCountry;
	}

	public String getMakeImg() {
		return makeImg;
	}

	public Collection<Type> getTypes() {
		return types;
	}

	@Override
	public String toString() {
		return "Make [makeName=" + makeName + ", makeCountry=" + makeCountry + ", makeImg=" + makeImg + ", types="
				+ types + "]";
	}

	
}
