import Header from './components/Header'
import Countries from './components/Countries'
import Country from './components/Country'
import Makes from './components/Makes'
import Make from './components/Make'
import Models from './components/Models'
import Model from './components/Model'

    
import events from './utils/events/event-actions'
import api from './utils/api/api-actions';


header()
main()

function header() {
  getHeaderContext().innerHTML = Header()

  viewAllCountries()
  viewAllMakes()
  viewAllModels()

}

function main() {
  api.getRequest('http://localhost:8080/countries', countries => {
    getAppContext().innerHTML = Countries(countries);
  })

  viewSingleCountry()
  viewSingleMake()
  viewSingleModel()
  addCountry()
  addMake()
  addModel()
}

function viewAllCountries() {
  events.on(getHeaderContext(), 'click', () => {
		if(event.target.classList.contains('view__all-countries')) {
			api.getRequest(`http://localhost:8080/countries`, countries => {
				getAppContext().innerHTML = Countries(countries)
			})
		}
	})
}

function viewSingleCountry() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('country__name')) {
			api.getRequest(`http://localhost:8080/countries/${event.target.id}`, country => {
				getAppContext().innerHTML = Country(country)
			})
		}
	})
}

function viewAllMakes() {
  events.on(getHeaderContext(), 'click', () => {
		if(event.target.classList.contains('view__all-makes')) {
			api.getRequest(`http://localhost:8080/makes`, makes => {
				getAppContext().innerHTML = Makes(makes)
			})
		}
	})
}

function viewSingleMake() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('single-make__img')) {
			api.getRequest(`http://localhost:8080/makes/${event.target.id}`, make => {
				getAppContext().innerHTML = Make(make)
			})
		}
	})
}

function viewAllModels() {
  events.on(getHeaderContext(), 'click', () => {
		if(event.target.classList.contains('view__all-models')) {
			api.getRequest(`http://localhost:8080/models`, models => {
				getAppContext().innerHTML = Models(models)
			})
		}
	})
}

function viewSingleModel() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('model__name')) {
			api.getRequest(`http://localhost:8080/models/${event.target.id}`, model => {
				getAppContext().innerHTML = Model(model)
			})
		}
	})
}

function addCountry() {
    events.on(getAppContext(), 'click', () => {
      if(event.target.classList.contains('add-country__submit')) {
        const name = event.target.parentElement.querySelector('.add-country__name').value
  
        api.postRequest('http://localhost:8080/countries/add', {
          name: name
        }, (countries) => getAppContext().innerHTML = Countries(countries))
      }
    })
  }

  function addMake() {
    events.on(getAppContext(), 'click', () => {
      if(event.target.classList.contains('add-make__submit')) {
        console.log("hi")
        const makeName = event.target.parentElement.querySelector('.add-make__name').value
        const makeImg = event.target.parentElement.querySelector('.add-make__img').value
  
        api.postRequest(`http://localhost:8080/countries/${event.target.id}`, {
            makeName: makeName,
            makeImg: makeImg
        }, (country) => getAppContext().innerHTML = Country(country))
      }
    })
  }

  function addModel() {
    events.on(getAppContext(), 'click', () => {
      if(event.target.classList.contains('add-model__submit')) {
        const modelName = event.target.parentElement.querySelector('.add-model__name').value
        const modelYear = event.target.parentElement.querySelector('.add-model__year').value
        const modelPrice = event.target.parentElement.querySelector(".add-model__price").value
        const modelImg = event.target.parentElement.querySelector('.add-model__img').value
  
        api.postRequest(`http://localhost:8080/makes/${event.target.id}`, {
            modelName: modelName,
            modelYear: modelYear,
            modelPrice: modelPrice,
            modelImg: modelImg,
        }, (make) => getAppContext().innerHTML = Make(make))
      }
    })
  }


function getHeaderContext() {
  return document.querySelector("#header")
}

function getAppContext() {
  return document.querySelector("#app")
}
