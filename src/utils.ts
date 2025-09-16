import {Fruit} from "./class/Fruit";

export function addSelectedFruitToList(selectedFruit: string, fruitList: HTMLUListElement, counter: HTMLParagraphElement): void
{
    let fruitItemList: HTMLLIElement = document.createElement('li');
    let fruitItemPara: HTMLParagraphElement = document.createElement('p');
    let removeButton: HTMLButtonElement = document.createElement('button');
    removeButton.innerHTML = 'X';
    removeButton.classList.add('remove');
    fruitItemPara.innerHTML = selectedFruit;
    fruitItemPara.classList.add('fruitItem');
    fruitItemList.appendChild(fruitItemPara);
    fruitItemList.appendChild(removeButton);
    fruitList.appendChild(fruitItemList);

    removeButton.addEventListener('click', () => {
        fruitItemList.remove();
        updateCounter(counter);
    })
    updateCounter(counter);
}

function updateCounter(counter: HTMLParagraphElement): void
{
    // Not optimal for performances but necessary to be sure to have an up-to-date list of addedFruits
    // Pass addedFruits in function parameters may cause to use a list not up-to-date,
    // and so a gap of 1 in in the counter

    let addedFruits: NodeListOf<HTMLParagraphElement> | null = document.querySelectorAll(".fruitItem");
    counter.innerHTML = "Total : " + addedFruits.length + " fruit(s)";
}

export function describeChoice(selectedFruit: string): void
{
    let newFruit: Fruit = new Fruit(selectedFruit);
    console.log(newFruit.describe());
}

export function isADuplicate(selectedFruit: string): boolean
{
    // Not optimal for performances but necessary to be sure to have an up-to-date list of addedFruits
    // Pass addedFruits in function parameters may cause to use a list not up-to-date

    let addedFruits: NodeListOf<HTMLParagraphElement> | null = document.querySelectorAll(".fruitItem");
    let isADuplicate: boolean = false;
    addedFruits.forEach((fruit: HTMLParagraphElement) => {
        if (fruit.innerHTML === selectedFruit) {
            isADuplicate = true;
        }
    })
    return isADuplicate;
}