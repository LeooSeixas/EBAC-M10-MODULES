
const getElement = (id) => document.getElementById(id);
const formatValue = (value) => value.toFixed(2).replace('.', ',');

export const negative = (value) => value < 0;

const mCategoryLabels = {
    "food" : "Alimentação",
    "transport":"Transporte",
    "hobby":"Lazer",
    "others":"Outros",
    "total":"Total",
}

export const attInterface = (listCategory) => {

    const categories = listCategory.category;

    categories.forEach(({name, value}) => {
        const element = getElement(name);
        element.textContent = `
            ${mCategoryLabels[name]}: R$${formatValue(value)}
        `
    })

    const total = getElement("total");
    total.textContent = `Total: R$${formatValue(listCategory.getTotal())}`;
}



