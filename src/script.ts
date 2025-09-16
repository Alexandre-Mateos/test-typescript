import {addSelectedFruitToList, describeChoice} from "./utils";
import {isADuplicate} from "./utils";

let addButton: HTMLButtonElement | null = document.querySelector("#addBtn");
let selectInput: HTMLSelectElement | null = document.querySelector("#fruitSelect");
let fruitList: HTMLUListElement | null = document.querySelector("#fruitList");
let counter: HTMLParagraphElement | null = document.querySelector("#counter");


if (addButton) {
    addButton.addEventListener('click', () => {
        if (selectInput && fruitList && counter) {
            let selectedFruit: string = selectInput.value;
            if (!isADuplicate(selectedFruit)) {
                addSelectedFruitToList(selectedFruit, fruitList, counter);
            }
            describeChoice(selectedFruit);
        }
    })
}
