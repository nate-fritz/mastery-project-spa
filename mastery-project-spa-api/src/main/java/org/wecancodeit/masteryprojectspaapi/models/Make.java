package org.wecancodeit.masteryprojectspaapi.models;


import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Make {
	
	@Id
	@GeneratedValue
	private Long id;
	private String makeName;
	@Lob
	private String makeImg;
	
	@ManyToOne
	@JsonIgnore
	private Country country;
	
	@OneToMany(mappedBy="make")
	private Collection<Model> models;
	
	public Make() {}

	public Make(String makeName, String makeImg, Country country) {
		super();
		this.makeName = makeName;
		this.makeImg = makeImg;
		this.models = new ArrayList<Model>();
		this.country = country;
	}

	public String getMakeName() {
		return makeName;
	}

	public String getMakeImg() {
		return makeImg;
	}

	public Country getCountry() {
		return country;
	}

	public Collection<Model> getModels() {
		return models;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Make [id=" + id + ", makeName=" + makeName + ", makeImg=" + makeImg + ", country=" + country
				+ ", models=" + models + "]";
	}


	
	


	
}
