package org.wecancodeit.masteryprojectspaapi.repositories;


import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.masteryprojectspaapi.models.Country;
import org.wecancodeit.masteryprojectspaapi.models.Make;
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.CountryRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class ModelTest {

	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	private CountryRepository countryRepo;
	
	@Resource
	private MakeRepository makeRepo;
	
	@Resource
	private ModelRepository modelRepo;
	
	@Test
	public void shouldDisplayModelName() {
		Country country = countryRepo.save(new Country("Country"));
		Make make = makeRepo.save(new Make("Make", null, country));
		Model model = modelRepo.save(new Model("Model", "null", "null", "null", make));
	
		entityManager.persist(model);
		entityManager.flush();
		entityManager.clear();
		
		Model h2Model = modelRepo.findByModelName("Model");
		
		assertThat(h2Model.getModelName(), is("Model"));
	
	}


}
