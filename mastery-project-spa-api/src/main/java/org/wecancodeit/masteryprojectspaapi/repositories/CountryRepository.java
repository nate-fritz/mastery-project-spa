package org.wecancodeit.masteryprojectspaapi.repositories;

import org.springframework.stereotype.Repository;
import org.wecancodeit.masteryprojectspaapi.models.Country;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long> {
	
	Country findByName(String string);

}
