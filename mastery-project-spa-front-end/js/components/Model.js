export default function Model(model) {
    return `
    <h2 class="single-model__name">${model.modelName}</h2>
    <img class="single-model__img" src="${model.modelImg}">

    `
}