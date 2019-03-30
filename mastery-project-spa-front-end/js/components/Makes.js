
export default function Makes(makes) {
    
    return `
        <ul class="makes">
        ${makes.map(make => {
            return `
                <li class="make">
                <img id="${make.id}" class="make__img" src="${make.makeImg}" alt="Manufacturer's Logo"/>
                <h2>${make.makeName}</h2>
                </li>
            `;
        
        }).join('')}
        </ul>
        <section class="add-make">
            <input type="text" class="add-make__make-name" placeholder="Make Name">
            <input type="text" class="add-make__make-country" placeholder="Country of Origin">
            <input type="text" class="add-make__make-img" placeholder="Logo URL">
            <button class="add-make__submit">Add Make</button>
        </section>
    `;
}