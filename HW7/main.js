const bulbContainer = document.querySelector('.header');
const cardContainer = document.querySelector('.cards-wrapper');
let cardsArr = [];
const nameArr = ['Card name', 'Card name', 'Card name', 'Card name', 'Card name', 'Card name', 'Card name', 'Card name']
const descriptionArr = ['Description', 'Description', 'Description', 'Description', 'Description', 'Description', 'Description', 'Description']
function getCards() {
    return {
        img : `https://random.imagecdn.app/${getRandomNumber(490, 500)}/${getRandomNumber(490, 500)}`,
        name : nameArr[Math.floor(Math.random() * nameArr.length - 1) + 1],
        description : descriptionArr[Math.floor(Math.random() * nameArr.length - 1) + 1],
        id : getRandom(),};}
headerRender();
cardsRender();
const deleteButton = document.querySelector('.delete-btn');
const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', () => {
    cardsArr.push(getCards());
    console.log(cardsArr)
    cardsRender()
});
function removeCard(id){
    cardsArr =   cardsArr.filter(el => el.id !== id);
    cardsRender()
}
function getRandom() {
    return   Math.floor(Math.random() * 10000);
}
function cardsRender() {
    let result = '';
    cardsArr.forEach((card) => {
     result += `<div class="card" >
     <img src="${card.img}" alt="">
     <p class="name">${card.name}</p>
     <p class="description">${card.description}</p>
     <button class="delete-btn" onclick="removeCard(${card.id})"><span class="btn-text">🚮Delete?</span></button></div>`});
    cardContainer.innerHTML = result;}
function getRandomNumber(from, to) {
    from = Math.floor(from);
    to = Math.ceil(to);
    return Math.floor(Math.random() * (to - from)) + from;}
function headerRender() {
    let result = '';
    result += `<div class="bulb b1"></div>
    <div class="bulb b2"></div>
    <div class="bulb b3"></div>
    <div class="bulb b4"></div>
    <div class="bulb b5"></div>
    <div class="bulb b6"></div>
    <div class="bulb b7"></div>
    <div class="bulb b8"></div>
    <div class="bulb b9"></div>
    <div class="bulb b10"></div>
    <button class="add-btn" >generate new <span class="nft">nft</span></button>`
    bulbContainer.innerHTML = result}