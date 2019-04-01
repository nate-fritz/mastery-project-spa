

export default function Models(models) {
  return `
  <ul class="flex-list flex-list2">
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

    <section class="add-model">
        <input type="text" class="add-model__name add" placeholder="Model Name">
        <input type="text" class="add-model__year add" placeholder="Model Year">
        <input type="text" class="add-model__price add" placeholder="Model Price">
        <input type="text" class="add-model__img add" placeholder="Image URL">
        <input type="text" class="add-model__make add" placeholder="Model Make">
        <button class="add-model__submit">Add Model</button>
    </section>

  `
  }