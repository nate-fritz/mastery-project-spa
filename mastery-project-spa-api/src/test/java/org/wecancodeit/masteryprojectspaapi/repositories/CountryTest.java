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

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class CountryTest {

	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	private CountryRepository countryRepo;
	
	@Test
	public void shouldDisplayCountryName() {
		Country country = countryRepo.save(new Country("Country"));
		
		entityManager.persist(country);
		entityManager.flush();
		entityManager.clear();
		
		Country h2Country = countryRepo.findByName("Country");
		
		assertThat(h2Country.getName(), is("Country"));
	
	}
}
