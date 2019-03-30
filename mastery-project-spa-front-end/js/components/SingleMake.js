import Types from './Types'

export default function SingleMake(make) {
  
    return `
    <ul class="make__list">
        <li>
            <div class="make__container">
                <img id="${make.id}" class="make__img2" src="${make.makeImg}" alt="Make Image"/>
                <h4 class="make__name">${make.makeName}</h4>
                <h5 class="make__country">${make.makeCountry}</h5>
            </div> 
        </li>
    </ul>

    <ul>
        <li class="make__types">${Types(make.types)}</li>
    </ul>    
        `;
    }