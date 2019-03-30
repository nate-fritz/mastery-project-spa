import Models from './Models'

export default function SingleType(type) {
    return `
    <ul class="singleType__list">
        <li>
            <div class="singleType__container">
                <h2 class="singleType__name">${type.albumName}</h2>
            </div> 
        </li>   
    </ul>

            <li id="${type.id}" class="singleType__models">${Models(type.models)}</li>
        `;
    }