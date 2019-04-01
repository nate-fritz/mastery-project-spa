export default function Types(types) {
    return `
        <ul id="type">
            ${types.map(type => {
        return `
                    <li class="type__list">
                        <h3 id="${type.id}" class="typeName">${type.typeName}</h3>
                    </li>
                `;
    }).join('')}
        </ul>
        
        `} 