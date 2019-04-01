export default function Model(model) {
    return `
    <div class="list2">
    <h2 class="single-model__name">${model.modelName}</h2>
    <h4 class="single-model__year">Year: ${model.modelYear}</h4>
    <h4 class="single-model__price">MSRP: ${model.modelPrice}</h4>
    <img class="single-model__img" src="${model.modelImg}" alt="Picture of this model">
    </div>

    <div class="list3">
        <input type="text" class="edit__model--content" placeholder="${model.modelName}">
        <button class="edit__model--submit" id="${model.id}">Replace Model</button>

        <button class="delete-model__submit" id="${model.id}">Delete Model</button>
    </div>

    `
}