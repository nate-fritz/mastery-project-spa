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
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.models.Type;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.TypeRepository;



@RestController
@CrossOrigin
@RequestMapping("/type")
public class TypeController {

	
	@Resource
	MakeRepository makeRepo;
	
	@Resource
	ModelRepository modelRepo;
	
	@Resource
	TypeRepository typeRepo;
	
	@CrossOrigin
	@GetMapping("")
	public Collection<Type> getAllTypes() {
		return (Collection<Type>) typeRepo.findAll();
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
    public Type getSingleType(@PathVariable Long id) {
        return typeRepo.findById(id).get();
    }
	
	@CrossOrigin
	@PostMapping("/{id}")
	public Type addModelToType(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String modelName = json.getString("modelName");
		String modelYear = json.getString("modelYear");
		String modelPrice = json.getString("modelPrice");
		String modelImage = json.getString("modelImage");
		
		Type type = typeRepo.findById(id).get();
		Model modelToAdd = new Model(modelName, modelYear, modelPrice, modelImage, type);
		modelRepo.save(modelToAdd);
		type.addModel(modelToAdd);
		typeRepo.save(type);
		return type;
	}
	
}
