package org.wecancodeit.masteryprojectspaapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Model {

	@Id
	@GeneratedValue
	private Long id;
	private String modelName;
	private String modelYear;
	private String modelImg;
	private String modelPrice;
	
	@ManyToOne
	private Type type;
	
	public Model() {}

	public Model(String modelName, String modelYear, String modelImg, String modelPrice) {
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.modelImg = modelImg;
		this.modelPrice = modelPrice;
	}

	public Long getId() {
		return id;
	}

	public String getModelName() {
		return modelName;
	}

	public String getModelYear() {
		return modelYear;
	}

	public String getModelImg() {
		return modelImg;
	}

	public String getModelPrice() {
		return modelPrice;
	}

	@Override
	public String toString() {
		return "Model [modelName=" + modelName + ", modelYear=" + modelYear + ", modelImg=" + modelImg + ", modelPrice="
				+ modelPrice + "]";
	}
	
	
}
