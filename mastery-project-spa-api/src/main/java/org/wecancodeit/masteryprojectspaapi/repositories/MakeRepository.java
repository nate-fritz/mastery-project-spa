package org.wecancodeit.masteryprojectspaapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.masteryprojectspaapi.models.Make;

@Repository
public interface MakeRepository extends CrudRepository<Make, Long> {
	
	Make findByMakeName(String string);

}
