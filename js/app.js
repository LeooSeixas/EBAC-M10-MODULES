import { negative, attInterface } from "./utils.js";
import { Category, ListCategory } from "./classes.js";

const listCategory = new ListCategory(
    new Category("food"),
    new Category("transport"),
    new Category("hobby"),
    new Category("others")
)

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const valueInfo = parseFloat(form.elements.value.value);
    const categoryInfo = form.elements.category.value;

    if(negative(valueInfo) || form.elements.value.value === ''){
        alert ("Valor informado é negativo ou nulo!");
        form.reset();
        return;
    }

    const category = listCategory.getCategoryName(categoryInfo);

    category.attValue(valueInfo);
    attInterface(listCategory);
    
    form.reset();
})
