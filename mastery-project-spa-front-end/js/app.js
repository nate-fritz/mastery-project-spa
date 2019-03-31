import events from './utils/events/event-actions'
import api from './utils/api/api-actions';
import Makes from './components/Makes';
import Models from './components/Models';
import Types from './components/Types';
import SingleMake from './components/SingleMake';
import SingleType from './components/SingleType';

main()

function main() {
    api.getRequest('http://localhost:8080/makes', makes => {
        getAppContext().innerHTML = Makes(makes);
    })

    events.on(getAppContext(), 'click', () => {
      if(event.target.classList.contains('make__img')) {
          api.getRequest(`http://localhost:8080/makes/${event.target.id}`, make => {
              getAppContext().innerHTML = SingleMake(make)
          })
      }
  })

  events.on(getAppContext(), 'click', () => {
    if(event.target.classList.contains('typeName')) {
        api.getRequest(`http://localhost:8080/type/${event.target.id}`, type => {
            getAppContext().innerHTML = SingleType(type)
        })
    }
})

    // Add a Make //
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-make__submit')) {
          const makeName = document.querySelector('.add-make__make-name').value
          const makeCountry = document.querySelector('.add-make__make-country').value
          const makeImg = document.querySelector('.add-make__make-img').value
    
          api.postRequest('http://localhost:8080/makes/add', {
            makeName: makeName,
            makeCountry: makeCountry,
            makeImg: makeImg
          }, (makes) => getAppContext().innerHTML = Makes(makes))
        }
      })
    }

    // Add a Model //
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-model__submit')) {
            const modelName = document.querySelector('.add-model__model-name').value
            const modelYear = document.querySelector('.add-model__model-year').value
            const modelPrice = document.querySelector('.add-model__model-price').value
            const modelImg = document.querySelector('.add-model__model-img').value
            const type = document.querySelector('.add-model__type').value
            
            api.postRequest(`http://localhost:8080/models/add`, {
                modelName: modelName,
                modelYear: modelYear,
                modelPrice: modelPrice,
                modelImg: modelImg,
                type: type
            }, (type) => getAppContext().innerHTML = SingleType(type))
            
        }
        
    })

    function getAppContext() {
        return document.querySelector("#app")
    }