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
 
    <section class="add-model">
        <input type="text" class="add-model__name" placeholder="Model Name">
        <input type="text" class="add-model__year" placeholder="Model Year">
        <input type="text" class="add-model__price" placeholder="Model Price">
        <input type="text" class="add-model__img" placeholder="Image URL">
        <input type="text" class="add-model__make" placeholder="Model Make">
        <button class="add-model__submit">Add Model</button>
    </section>
  `
  }