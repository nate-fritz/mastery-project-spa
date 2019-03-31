import Makes from './Makes'

export default function Country(country) {
    return `
    <h2 class="single-country__name">${country.name}</h2>
    <ul class="country__makes">
        <li class="country__make">
            ${Makes(country.makes)}
        </li>
    </ul>

<section class="add-make">
    <input type="text" class="add-make__name" placeholder="Make Name">
    <input type="text" class="add-make__img" placeholder="Image URL for Logo ">
    <button class="add-make__submit">Add Make</button>
</section>
    `
}