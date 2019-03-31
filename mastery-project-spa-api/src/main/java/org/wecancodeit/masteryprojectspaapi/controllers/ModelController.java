package org.wecancodeit.masteryprojectspaapi.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.masteryprojectspaapi.models.Make;
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;

@RestController
@CrossOrigin
@RequestMapping("/models")
public class ModelController {

	@Resource
	MakeRepository makeRepo;

	@Resource
	ModelRepository modelRepo;

	@CrossOrigin	
	@GetMapping("")
	public Collection<Model> getModels() {
		return (Collection<Model>) modelRepo.findAll();
	}

	@CrossOrigin
	@GetMapping("/{id}")
	public Model viewSingleModel(@PathVariable Long id) {
		return modelRepo.findById(id).get();
	}
	
	@CrossOrigin
	@PostMapping("/add")
	public Collection<Model> addModel(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String modelName = json.getString("modelName");
		String modelYear = json.getString("modelYear");
		String modelPrice = json.getString("modelPrice");
		String modelImg = json.getString("modelImg");
		Make make = makeRepo.findByMakeName(json.getString("make"));
		modelRepo.save(new Model(modelName, modelYear, modelImg, modelPrice, make));
		return (Collection<Model>) modelRepo.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/edit/{id}")
	public Model editModel(@PathVariable Long id, @RequestBody String body) throws JSONException {
		Model modelToEdit = modelRepo.findById(id).get();
		JSONObject replaceName = new JSONObject(body);
		String newName = replaceName.getString("newName");
		modelToEdit.editName(newName);
		modelRepo.save(modelToEdit);
		return modelToEdit;
	}
	
	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public Make deleteModel(@PathVariable Long id) {
		Model modelToDelete = modelRepo.findById(id).get();
		Make make = modelToDelete.getMake();
		modelRepo.delete(modelToDelete);
		return make;
	}
		
	

}