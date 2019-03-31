import Makes from './Makes'

export default function Countries(countries) {
    return `
      <ul class="list">
      ${countries.map(country => {
        return `
          <li class="list__item">
            <div class="item-container">
              <h2 class="country__name" id="${country.id}">${country.name}</h2>
              ${Makes(country.makes)}
          </div>
        </li>
      `;
    }).join('')}
    </ul>

    <section class="add-country">
        <input type="text" class="add-country__name" placeholder="Country Name">
        <button class="add-country__submit">Add Country</button>
    </section>
    `
    }