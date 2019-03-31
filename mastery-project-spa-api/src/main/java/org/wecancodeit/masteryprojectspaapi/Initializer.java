package org.wecancodeit.masteryprojectspaapi;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.masteryprojectspaapi.models.Country;
import org.wecancodeit.masteryprojectspaapi.models.Make;
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.repositories.CountryRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;

@Service
public class Initializer implements CommandLineRunner {

	@Resource
	CountryRepository countryRepo;
	
	@Resource
	MakeRepository makeRepo;
	
	@Resource
	ModelRepository modelRepo;

	@Override
	public void run(String... args) throws Exception {

//		Type truck = typeRepo.save(new Type("Truck"));
//		Type sedan = typeRepo.save(new Type("Sedan"));
//		Type coupe = typeRepo.save(new Type("Coupe"));
//		Type van = typeRepo.save(new Type("Van"));
//		Type suv = typeRepo.save(new Type("SUV"));
//		Type hatchback = typeRepo.save(new Type("Hatchback"));
//		Type motorcycle = typeRepo.save(new Type("Motorcycle"));

		Country usa = countryRepo.save(new Country("USA"));
		Country japan = countryRepo.save(new Country("Japan"));
		Country italy = countryRepo.save(new Country("Italy"));
		Country sweden = countryRepo.save(new Country("Sweden"));
		Country germany = countryRepo.save(new Country("Germany"));
		Country southKorea = countryRepo.save(new Country("South Korea"));
		
		Make ford = makeRepo.save(new Make("Ford", "https://seeklogo.net/wp-content/uploads/2013/01/ford-emblem-logo-vector-400x400.png", usa));
		Make chevy = makeRepo.save(new Make("Chevrolet", "https://seeklogo.net/wp-content/uploads/2013/01/chevrolet-auto-logo-vector-400x400.png", usa));
		Make dodge = makeRepo.save(new Make("Dodge", "https://seeklogo.net/wp-content/uploads/2013/01/dodge-transport-logo-vector.png", usa));
		Make kia = makeRepo.save(new Make("Kia", "https://seeklogo.net/wp-content/uploads/2011/05/kia-motors-logo-vector.png", southKorea));
		Make jeep = makeRepo.save(new Make("Jeep", "https://i.pinimg.com/originals/95/68/45/9568451d05ba6ad8940b3503a149c649.jpg", usa));
		Make volkswagen = makeRepo.save(new Make("Volkswagen", "https://seeklogo.net/wp-content/uploads/2011/08/volkswagen-logo-vector.png", germany));
		Make ferrari = makeRepo.save(new Make("Ferrari", "http://freevectorlogo.net/wp-content/uploads/2014/10/Ferrari-logo-vector-400x400.png", italy));
		Make toyota = makeRepo.save(new Make("Toyota", "https://seeklogo.net/wp-content/uploads/2013/05/toyota-3d-vector-logo.png", japan));
		Make honda = makeRepo.save(new Make("Honda", "https://seeklogo.net/wp-content/uploads/2013/05/toyota-3d-vector-logo.png", japan));
		Make volvo = makeRepo.save(new Make("Volvo", "https://logoeps.com/wp-content/uploads/2013/06/volvo-cars-vector-logo.png", sweden));
		Make maserati = makeRepo.save(new Make("Maserati", "https://seeklogo.net/wp-content/uploads/2016/01/maserati-logo-vector-download.jpg", italy));
		Make bmw = makeRepo.save(new Make("BMW", "https://www.clipartmax.com/png/small/183-1837795_bmw-bmw-logo.png", germany));
		Make mercedes = makeRepo.save(new Make("Mercedes-Benz", "https://seeklogo.net/wp-content/uploads/2013/03/mercedes-benz-vector-logo.png", germany));
		
		
		// Ford Models
		Model fordF150 = modelRepo.save(new Model("F-150", "2019", "https://www.performancefordclinton.com/static/dealer-14632/1019612.jpg", "$28,155", ford));
		Model fordMustang = modelRepo.save(new Model("Mustang", "2019", "https://st.motortrend.com/uploads/sites/10/2018/01/2019-Ford-Mustang-Bullitt-rear-side-view-against-curb.jpg", "$26,395", ford));
		Model fordFocus = modelRepo.save(new Model("Focus", "2019", "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2019-Ford-Focus-ST-Line-Wagon-Silver-Press-Image-RB-1001x565p-1.jpg", "$19,920", ford));
		Model fordExplorer = modelRepo.save(new Model("Explorer", "2020", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ford-explorer-limited-lead-1547052486.jpg", "$36,675", ford));
		Model fordTransitConnect = modelRepo.save(new Model("Transit Connect", "2019", "https://cdn.motor1.com/images/mgl/vvjAv/s1/2019-ford-transit-connect-wagon.jpg", "$24,100", ford));
		
		// Chevy Models
		Model chevyCorvetteStingrayZR1 = modelRepo.save(new Model("Corvette Stingray ZR1", "2019", "https://st.motortrend.com/uploads/sites/5/2017/11/2019-Chevrolet-Corvette-ZR1-front-side-view-on-stage.jpg", "$119,995", chevy));
		
		
		
	}
}
