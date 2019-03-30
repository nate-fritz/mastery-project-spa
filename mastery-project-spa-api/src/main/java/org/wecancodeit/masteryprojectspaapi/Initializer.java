package org.wecancodeit.masteryprojectspaapi;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.masteryprojectspaapi.models.Make;
import org.wecancodeit.masteryprojectspaapi.models.Model;
import org.wecancodeit.masteryprojectspaapi.models.Type;
import org.wecancodeit.masteryprojectspaapi.repositories.MakeRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.ModelRepository;
import org.wecancodeit.masteryprojectspaapi.repositories.TypeRepository;

@Service
public class Initializer implements CommandLineRunner {

	@Resource
	MakeRepository makeRepo;

	@Resource
	TypeRepository typeRepo;
	
	@Resource
	ModelRepository modelRepo;

	@Override
	public void run(String... args) throws Exception {

		Type truck = typeRepo.save(new Type("Truck"));
		Type sedan = typeRepo.save(new Type("Sedan"));
		Type coupe = typeRepo.save(new Type("Coupe"));
		Type van = typeRepo.save(new Type("Van"));
		Type suv = typeRepo.save(new Type("SUV"));
		Type hatchback = typeRepo.save(new Type("Hatchback"));
		Type motorcycle = typeRepo.save(new Type("Motorcycle"));

		Make ford = makeRepo.save(new Make("Ford", "USA", "https://seeklogo.net/wp-content/uploads/2013/01/ford-emblem-logo-vector-400x400.png", truck, coupe, hatchback, suv));
		Make chevy = makeRepo.save(new Make("Chevrolet", "USA", "https://seeklogo.net/wp-content/uploads/2013/01/chevrolet-auto-logo-vector-400x400.png", truck, sedan));
		Make dodge = makeRepo.save(new Make("Dodge", "USA", "https://seeklogo.net/wp-content/uploads/2013/01/dodge-transport-logo-vector.png", truck));
		Make kia = makeRepo.save(new Make("Kia", "South Korea", "https://seeklogo.net/wp-content/uploads/2011/05/kia-motors-logo-vector.png", sedan));
		Make jeep = makeRepo.save(new Make("Jeep", "USA", "https://www.gfxmag.com/wp-content/uploads/2016/07/jeep-vector-logo.png", truck, suv));
		Make volkswagen = makeRepo.save(new Make("Volkswagen", "Germany", "https://seeklogo.net/wp-content/uploads/2011/08/volkswagen-logo-vector.png", sedan, coupe, suv));
		Make ferrari = makeRepo.save(new Make("Ferrari", "Italy", "http://freevectorlogo.net/wp-content/uploads/2014/10/Ferrari-logo-vector-400x400.png", coupe));
		Make toyota = makeRepo.save(new Make("Toyota", "Japan", "https://seeklogo.net/wp-content/uploads/2013/05/toyota-3d-vector-logo.png", coupe, sedan, truck, suv, hatchback));
		Make honda = makeRepo.save(new Make("Honda", "Japan", "https://seeklogo.net/wp-content/uploads/2013/05/toyota-3d-vector-logo.png", coupe, sedan, truck, suv, hatchback, van, motorcycle));
		Make volvo = makeRepo.save(new Make("Volvo", "Sweden", "https://logoeps.com/wp-content/uploads/2013/06/volvo-cars-vector-logo.png", sedan));
		Make maserati = makeRepo.save(new Make("Maserati", "Italy", "https://seeklogo.net/wp-content/uploads/2016/01/maserati-logo-vector-download.jpg", coupe));
		Make bmw = makeRepo.save(new Make("BMW", "Germany", "https://www.clipartmax.com/png/small/183-1837795_bmw-bmw-logo.png", coupe, sedan, suv));
		Make mercedes = makeRepo.save(new Make("Mercedes-Benz", "Germany", "https://seeklogo.net/wp-content/uploads/2013/03/mercedes-benz-vector-logo.png", coupe, sedan, suv));
		
		
		// Ford Models
		Model fordF150 = modelRepo.save(new Model("F-150", "2019", "https://www.performancefordclinton.com/static/dealer-14632/1019612.jpg", "$28,155", truck));
		Model fordMustang = modelRepo.save(new Model("Mustang", "2019", "https://st.motortrend.com/uploads/sites/10/2018/01/2019-Ford-Mustang-Bullitt-rear-side-view-against-curb.jpg", "$26,395", coupe));
		Model fordFocus = modelRepo.save(new Model("Focus", "2019", "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2019-Ford-Focus-ST-Line-Wagon-Silver-Press-Image-RB-1001x565p-1.jpg", "$19,920", hatchback));
		Model fordExplorer = modelRepo.save(new Model("Explorer", "2020", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ford-explorer-limited-lead-1547052486.jpg", "$36,675", suv));
		Model fordTransitConnect = modelRepo.save(new Model("Transit Connect", "2019", "https://cdn.motor1.com/images/mgl/vvjAv/s1/2019-ford-transit-connect-wagon.jpg", "$24,100", van));
		
		// Chevy Models
		Model chevyCorvetteStingrayZR1 = modelRepo.save(new Model("Corvette Stingray ZR1", "2019", "https://st.motortrend.com/uploads/sites/5/2017/11/2019-Chevrolet-Corvette-ZR1-front-side-view-on-stage.jpg", "$119,995", coupe));
		
		
		
	}
}
