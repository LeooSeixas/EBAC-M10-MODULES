export class Category {
    #name;
    #value;
    constructor(catName){
        this.#name = catName;
        this.#value = 0;
    }

    get name() { return this.#name; }

    get value(){ return this.#value; }

    attValue(value){
        this.#value += parseFloat(value);
    }
}

export class ListCategory{
    #category
    constructor(...category){
        this.#category = category;
    }

    get category(){
        return this.#category;
    }

    getCategoryName(catName){
        return this.#category.find((category) => category.name == catName);
    }

    getTotal(){
        return this.#category.reduce((total, category) => 
            total + category.value, 0
        )
    }
}