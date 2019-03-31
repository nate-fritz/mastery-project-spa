//package org.wecancodeit.masteryprojectspaapi.controllers;
//
//import java.util.Collection;
//
//import javax.annotation.Resource;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.wecancodeit.masteryprojectspaapi.models.Type;
//import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
//import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;
//import org.wecancodeit.masteryprojectspaapi.repositories.TypeRepository;
//
//@RestController
//@CrossOrigin
//@RequestMapping("/type")
//public class TypeController {
//
//	
//	@Resource
//	MakeRepository makeRepo;
//	
//	@Resource
//	ModelRepository modelRepo;
//	
//	@Resource
//	TypeRepository typeRepo;
//	
//	@CrossOrigin
//	@GetMapping("")
//	public Collection<Type> getAllTypes() {
//		return (Collection<Type>) typeRepo.findAll();
//	}
//	
//	@CrossOrigin
//	@GetMapping("/{id}")
//    public Type getSingleType(@PathVariable Long id) {
//        return typeRepo.findById(id).get();
//    }
//}
