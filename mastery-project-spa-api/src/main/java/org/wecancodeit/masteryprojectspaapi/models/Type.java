package org.wecancodeit.masteryprojectspaapi.models;



import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Type {
	
	@Id
	@GeneratedValue
	private Long id;
	private String typeName;
	
	@ManyToMany (mappedBy="types")
	@JsonIgnore
	private Collection<Make> makes;
	
	@OneToMany
	private Collection<Model> models;
	
	public Type() {}

	public Type(String typeName, Make...makes) {
		this.typeName = typeName;
		this.makes =Arrays.asList(makes);
		this.models = new ArrayList<Model>();
	}

	public Long getId() {
		return id;
	}

	public String getTypeName() {
		return typeName;
	}
	
	public Collection<Make> getMakes() {
		return makes;
	}

	public Collection<Model> getModels() {
		return models;
	}

	@Override
	public String toString() {
		return "Type [typeName=" + typeName + "]";
	}

	public void addModel(Model model) {
		models.add(model);
	}
	
	
	

}
