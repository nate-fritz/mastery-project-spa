export default function Models(models) {

    return `
    <ul class="models__list">   
  ${models.map(model => {
    return `
      <li>
        <div class="model_container">
            <h2 class="model__name" id="${model.id}">${model.modelName}</h2>
        </div>
      </li>
    `;

    }).join('')}
    </ul>
`}