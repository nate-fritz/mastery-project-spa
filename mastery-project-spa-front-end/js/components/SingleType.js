import Models from './Models'

export default function SingleType(type) {
    return `
    <ul class="singleType__list">
        <li>
            <div class="singleType__container">
                <h2 class="singleType__name">${type.typeName}</h2>
            </div> 
        </li>   
    </ul>

            <li class="singleType__models">${Models(type.models)}</li>



        <section class="add-model">
            <input type="text" class="add-model__model-name" placeholder="Model Name">
            <input type="text" class="add-model__model-year" placeholder="Model Year">
            <input type="text" class="add-model__model-price" placeholder="Model Price">
            <input type="text" class="add-model__model-img" placeholder="URL for image">
            <input type="text" class="add-model__type" placeholder="Type">
            <button class="add-model__submit" id="${type.id}">Add Model</button>
        </section>
    
        `;
    }