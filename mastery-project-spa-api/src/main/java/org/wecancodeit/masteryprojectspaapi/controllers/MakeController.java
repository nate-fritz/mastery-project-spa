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
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.repositories.CountryRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;


@RestController
@CrossOrigin
@RequestMapping("/makes")
public class MakeController {

	@Resource
	MakeRepository makeRepo;
	
	@Resource
	CountryRepository countryRepo;
	@Resource
	ModelRepository modelRepo;
	
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
	
	@PostMapping("/{id}")
	public Make addModelToMake(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String modelName = json.getString("modelName");
		String modelYear = json.getString("modelYear");
		String modelPrice = json.getString("modelPrice");
		String modelImg = json.getString("modelImg");	
		Make make = makeRepo.findById(id).get();
		Model modelToAdd = new Model(modelName, modelYear, modelPrice, modelImg, make);
		modelRepo.save(modelToAdd);
		make.addModel(modelToAdd);
		makeRepo.save(make);
		return make;
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
	


