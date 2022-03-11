/** help */
function log(message) {
    //console.log('> ' + message)
}

/** app */
const cards = document.querySelectorAll('.card')
const dropzones = [document.getElementById("ingredients"),document.getElementById("mixer-board")]
const recipe = ["permanganate-pilule", "water" ]
dropzones[1].addEventListener('drop',handleOpenModal)
console.log(dropzones)	

/** our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(event) {
    
    // log('CARD: Start dragging ')
    //dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    // this = card
    this.classList.add('is-dragging')
}

function drag(event) {
    
    
    // log('CARD: Is dragging ')
}

function dragend(event) {
    
    // log('CARD: Stop drag! ')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    // this = card
    this.classList.remove('is-dragging')

    
}

/** place where we will drop cards */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(event) {
    
    // log('DROPZONE: Enter in zone ')
}

function dragover(event ) {
    event.preventDefault()
    

    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave(event) {
    
    // log('DROPZONE: Leave ')
    // this = dropzone
    this.classList.remove('over')

}

function drop(event) {
    event.preventDefault()
    // log('DROPZONE: dropped ')
    this.classList.remove('over');
    

}

function verifyRecipe(recipe,ingredients){
    return ingredients.every(item=>recipe.some(ingredient=>item===ingredient))
}

function openModal(mn) {
    let modal = document.getElementById(mn);
    console.log(modal)

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.location.reload()
}
 

function handleOpenModal(){
    const hasMixerModal = !!document.getElementById("modal-mixer-container")
    hasMixerModal?handleOpenMixModal():mixRecipe1()
}

function mixRecipe1(){
    const mixer = document.querySelector("#mixer-board")
    const ingredients = Array.from(mixer.children).map(ingredient=>ingredient.id)
    console.log(ingredients)
    const isRecipeCorrect = verifyRecipe(recipe, ingredients)
    isRecipeCorrect? openModal("modal-true"):openModal("modal-false")

}

function handleOpenMixModal(){
    openModal("modal-mixer")
    const slider = document.getElementById("quantity")
    const displayValue = document.getElementById("slider-value")
    slider.oninput = function() {
        console.log(this.value)
        displayValue.innerHTML = this.value;
    }
}

function mixRecipe2(){
    const recipeQuantity = 20
    const slider = document.getElementById("quantity")
    const currentQuantity = slider.value
    const mixer = document.querySelector("#mixer-board")
    const ingredients = Array.from(mixer.children).map(ingredient=>ingredient.id)
    const isRecipeCorrect = verifyRecipe(recipe, ingredients)
    isRecipeCorrect && recipeQuantity == currentQuantity? openModal("modal-true"):openModal("modal-false")
    
   
}
function mixRecipe3(){
    const recipeQuantity = 20
    const slider = document.getElementById("quantity")
    const currentQuantity = slider.value
    const mixer = document.querySelector("#mixer-board")
    const ingredients = Array.from(mixer.children).map(ingredient=>ingredient.id)
    const isRecipeCorrect = verifyRecipe(recipe, ingredients)
    isRecipeCorrect && recipeQuantity == currentQuantity? openModal("modal-true"):openModal("modal-false")
    
   
}