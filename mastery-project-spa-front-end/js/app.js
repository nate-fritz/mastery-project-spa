import events from './utils/events/event-actions'
import api from './utils/api/api-actions';
import Makes from './components/Makes';
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

    function getAppContext() {
        return document.querySelector("#app")
    }



