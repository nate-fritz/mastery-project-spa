import Models from './Models'

export default function Make(make) {
    return `
    <img class="single-make__img" src="${make.makeImg}" alt="Company Logo">
    <h2 class="single-make__name">${make.makeName}</h2>
    ${Models(make.models)}
    
    `
}