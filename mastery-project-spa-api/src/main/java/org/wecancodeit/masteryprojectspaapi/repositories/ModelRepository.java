package org.wecancodeit.masteryprojectspaapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.masteryprojectspaapi.models.Model;

@Repository
public interface ModelRepository extends CrudRepository<Model, Long> {

	Model findByModelName(String string);

}
