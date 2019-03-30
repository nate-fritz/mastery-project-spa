package org.wecancodeit.masteryprojectspaapi.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.masteryprojectspaapi.models.Make;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
//import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;
//import org.wecancodeit.masteryprojectspaapi.repositories.TypeRepository;

@RestController
@CrossOrigin
@RequestMapping("/makes")
public class MakeController {

	@Resource
	MakeRepository makeRepo;
	
//	@Resource
//	ModelRepository modelRepo;
//	
//	@Resource
//	TypeRepository typeRepo;
	
	@CrossOrigin
	@GetMapping("")
	public Collection<Make> getMakes() {
		return (Collection<Make>) makeRepo.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/add")
	public Collection<Make> addMake(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String makeName = json.getString("makeName");
		String makeCountry = json.getString("makeCountry");
		String makeImg = json.getString("makeImg");
		
		makeRepo.save(new Make(makeName, makeCountry, makeImg));
		
		return (Collection<Make>) makeRepo.findAll();
	}
	
}

