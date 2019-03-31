export default function Model(model) {
    return `
    <h2 class="single-model__name">${model.modelName}</h2>
    <h4 class="single-model__year">${model.modelYear}</h4>
    <h4 class="single-model__price">${model.modelPrice}</h4>
    <img class="single-model__img" src="${model.modelImg}" alt="Picture of this model">

    <section class="edit__model">
    <h3>Edit this Model</h3>
    <input type="text" class="edit__model--content" placeholder="${model.modelName}">
    <button class="edit__model--submit" id="${model.id}">Replace Model</button>
</section> 

<section class="delete__model">
    <button class="delete__model--comment" id="${model.id}">Delete Model</button>
</section>

    `
}