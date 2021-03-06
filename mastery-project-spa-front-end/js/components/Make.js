import Models from './Models'

export default function Make(make) {
    return `
    <div class="single-make__div2">
        <img class="single-make__img2" src="${make.makeImg}" alt="Company Logo">
        <h2 class="single-make__name">${make.makeName}</h2>
    </div>
    ${Models(make.models)}
    

    <section class="add-model">
        <input type="text" class="add-model__name" placeholder="Model Name">
        <input type="text" class="add-model__year" placeholder="Model Year">
        <input type="text" class="add-model__price" placeholder="Model Price">
        <input type="text" class="add-model__img" placeholder="Image URL">
        <button class="add-model__submit" id="${make.id}">Add Model</button>
    </section>

    `
}