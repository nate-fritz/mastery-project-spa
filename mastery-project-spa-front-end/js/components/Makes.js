
export default function Makes(makes) {

    return `
      <ul class="list">
      ${makes.map(make => {
        return `
          <li class="list__item">
            <div class="item-container">
            <img id="${make.id}" class="single-make__img" src="${make.makeImg}" alt="Company Logo">
            <h3 class="make__name">${make.makeName}</h3>
          </div>
        </li>
      `;

    }).join('')}
    </ul>
    
    
    
    `

    }