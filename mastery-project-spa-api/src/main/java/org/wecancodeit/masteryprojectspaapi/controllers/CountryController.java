package org.wecancodeit.masteryprojectspaapi.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.masteryprojectspaapi.models.Country;
import org.wecancodeit.masteryprojectspaapi.models.Make;
import org.wecancodeit.masteryprojectspaapi.repositories.CountryRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;


@RestController
@CrossOrigin
@RequestMapping("/countries")
public class CountryController {

	@Resource
	CountryRepository countryRepo;
	
	@Resource
	MakeRepository makeRepo;
	
	@CrossOrigin
	@GetMapping("")
	public Collection<Country> getCountries() {
		return (Collection<Country>) countryRepo.findAll();
	}

	@CrossOrigin
	@GetMapping("/{id}")
	public Country viewSingleCountry(@PathVariable Long id) {
		return countryRepo.findById(id).get();
	}
	
	@CrossOrigin
	@PostMapping("/{id}")
	public Country addMakeToCountry(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String makeName = json.getString("makeName");
		String makeImg = json.getString("makeImg");
		Country country = countryRepo.findById(id).get();
		Make makeToAdd = new Make(makeName, makeImg, country);
		makeRepo.save(makeToAdd);
		country.addMake(makeToAdd);
		countryRepo.save(country);
		return country;
	}
	
	
	@CrossOrigin
	@PostMapping("/add")
	public Collection<Country> addCountry(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String name = json.getString("name");		
		countryRepo.save(new Country(name));
		
		return (Collection<Country>) countryRepo.findAll();
	}

}
