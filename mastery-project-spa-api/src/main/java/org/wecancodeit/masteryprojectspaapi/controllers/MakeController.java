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
@RequestMapping("/makes")
public class MakeController {

	@Resource
	MakeRepository makeRepo;
	
	@Resource
	CountryRepository countryRepo;
	
	@CrossOrigin
	@GetMapping("")
	public Collection<Make> getMakes() {
		return (Collection<Make>)makeRepo.findAll();
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Make viewSingleMake(@PathVariable Long id) {
		return makeRepo.findById(id).get();
	}
	

	
	@CrossOrigin
	@PostMapping("/add")
	public Collection<Country> addMakeToCountry(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String makeName = json.getString("makeName");
		String makeImg = json.getString("makeImg");
		Country country = countryRepo.findByName(json.getString("country"));
		makeRepo.save(new Make(makeName, makeImg, country));
		return (Collection<Country>) countryRepo.findAll();
	}
}
	


