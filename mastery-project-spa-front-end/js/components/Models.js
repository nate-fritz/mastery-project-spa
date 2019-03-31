

export default function Models(models) {
  return `
  <ul class="flex-list">
    ${models.map(model => {
      return `
        <li class="flex-list__item">
          <div class="flex-item-container">
            <h4 id="${model.id}" class="model__name"">${model.modelName}<h4>
        </div>
      </li>
    `;
  }).join('')}
  </ul>
 
  `
  }