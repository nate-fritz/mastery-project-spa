package org.wecancodeit.masteryprojectspaapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.masteryprojectspaapi.models.Type;

@Repository
public interface TypeRepository extends CrudRepository<Type, Long> {

}
