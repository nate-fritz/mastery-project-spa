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
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.models.Type;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.TypeRepository;


@RestController
@CrossOrigin
@RequestMapping("/models")
public class ModelController {
	
		@Resource
		MakeRepository makeRepo;
		
		@Resource
		ModelRepository modelRepo;
		
		@Resource
		TypeRepository typeRepo;
		
		@CrossOrigin
		@GetMapping("")
		public Collection<Model> getAllModels() {
			return (Collection<Model>) modelRepo.findAll();
		}
	
		@CrossOrigin
		@PostMapping("/add")
		public Collection<Make> addModel(@RequestBody String body) throws JSONException {
			JSONObject json = new JSONObject(body);
			String modelName = json.getString("modelName");
			String modelYear = json.getString("modelYear");
			String modelPrice = json.getString("modelPrice");
			String modelImg = json.getString("modelImg");
			Type type = typeRepo.findByTypeName(json.getString("type"));
			modelRepo.save(new Model(modelName, modelYear, modelImg, modelPrice, type));
			return (Collection<Make>) makeRepo.findAll();
		}
}
