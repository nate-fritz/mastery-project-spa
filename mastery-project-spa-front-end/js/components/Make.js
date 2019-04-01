import Models from './Models'

export default function Make(make) {
    return `
    <div class="single-make__div2">
        <img class="single-make__img2" src="${make.makeImg}" alt="Company Logo">
        <h2 class="single-make__name">${make.makeName}</h2>
    </div>
    ${Models(make.models)}
    `
}