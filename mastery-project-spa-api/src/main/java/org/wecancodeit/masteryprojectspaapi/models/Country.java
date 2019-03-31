package org.wecancodeit.masteryprojectspaapi.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class Country {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	
	@OneToMany(mappedBy = "country")
	private Collection<Make> makes;

	public Country(){
		}
		
	public Country(String name) {
		this.name = name;
		this.makes = new ArrayList<Make>();
	}

	public Collection<Make> getMakes() {
		return makes;
	}
	
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void addMake(Make make) {
		makes.add(make);
	}


	
}
