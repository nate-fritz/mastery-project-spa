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
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.CountryRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class MakeTest {

	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	private CountryRepository countryRepo;
	
	@Resource
	private MakeRepository makeRepo;
	
	@Test
	public void shouldDisplayMakeName() {
		Country country = countryRepo.save(new Country("Country"));
		Make make = makeRepo.save(new Make("Make", null, country));
		
		entityManager.persist(make);
		entityManager.flush();
		entityManager.clear();
		
		Make h2Make = makeRepo.findByMakeName("Make");
		
		assertThat(h2Make.getMakeName(), is("Make"));
	
	}
}
