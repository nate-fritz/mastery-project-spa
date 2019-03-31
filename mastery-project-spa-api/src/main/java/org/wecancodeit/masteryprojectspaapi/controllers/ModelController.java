package org.wecancodeit.masteryprojectspaapi.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

}