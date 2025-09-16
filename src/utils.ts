import {Fruit} from "./class/Fruit";

export function addSelectedFruitToList(selectedFruit: string, fruitList: HTMLUListElement): void
{
    let fruitItemList: HTMLLIElement = document.createElement('li');
    fruitItemList.innerHTML = selectedFruit;
    fruitItemList.classList.add('fruitItem');
    fruitList.appendChild(fruitItemList);
}

export function updateCounter(counter: HTMLParagraphElement): void
{
    let allFruits: NodeListOf<HTMLLIElement> | null = document.querySelectorAll(".fruitItem");
    counter.innerHTML = "Total : " + allFruits.length +" fruit(s)";
}

export function describeChoice(selectedFruit: string): void
{
    let newFruit: Fruit = new Fruit(selectedFruit);
    console.log(newFruit.describe());
}