package org.wecancodeit.masteryprojectspaapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Model {

	@Id
	@GeneratedValue
	private Long id;
	private String modelName;
	private String modelYear;
	private String modelPrice;
	@Lob
	private String modelImg;
	
	
	@ManyToOne
	@JsonIgnore
	private Make make;
	
	
	public Model() {}

	public Model(String modelName, String modelYear,  String modelPrice, String modelImg,  Make make) {
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.modelPrice = modelPrice;
		this.modelImg = modelImg;
		this.make = make;
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

	public void editName(String newName) {
		this.modelName = newName;
	}

	public Make getMake() {
		return make;
	}

	@Override
	public String toString() {
		return "Model [id=" + id + ", modelName=" + modelName + ", modelYear=" + modelYear + ", modelPrice="
				+ modelPrice + ", modelImg=" + modelImg + ", make=" + make + "]";
	}
	


}
