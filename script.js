//#region Data source

class Game {
    constructor(name, price, imageUrl, hasSpecialOffer, discount) {
        this.name = name
        this.price = price
        this.imageUrl = imageUrl
        this.hasSpecialOffer = hasSpecialOffer,
        this.discount = discount
    }
}

const DevilMayCry5 = new Game('Devil May Cry 5', 99.90, 'Images/DMC5.jpg', false)
const GodOfWar = new Game('God Of War', 199.90, 'Images/GOW.jpg', true, 50)
const Bayonetta = new Game('Bayonetta', 36.99, 'Images/Bayonetta.jpg', true, 60)
const NieRAutomata = new Game('NieR:Automata', 107.00, 'Images/NieR.jpg', false)
const FinalFantasyXV = new Game('Final Fantasy XV', 125.00, 'Images/FFXV.jpg', false)
const ResidentEvilVillage = new Game('Resident Evil Village', 139.00, 'Images/REVIII.jpg', true, 20)

const allGames = [
    NieRAutomata,
    DevilMayCry5,
    FinalFantasyXV,
    Bayonetta,
    ResidentEvilVillage,
    GodOfWar,
]
//#endregion

//#region Load data
const featuredSlider = document.querySelector('.fr-slider')
function loadFeaturedGames() {
    for (var i = 0; i < 4; ++i) {
        const newFeaturedGame = document.querySelector('.fr-item').cloneNode(true)
        newFeaturedGame.querySelector('img').src = allGames[i].imageUrl
        newFeaturedGame.querySelector('div span').textContent = allGames[i].name
        newFeaturedGame.querySelector('div h5').textContent = 'R$' + allGames[i].price.toFixed(2)
        newFeaturedGame.classList.remove('model')
        featuredSlider.appendChild(newFeaturedGame)
    }
} loadFeaturedGames()

const specialOffersSlider = document.querySelector('.so-slider')
function loadSpecialOffers() {
    allGames.forEach(game => {
        if (game.hasSpecialOffer) {
            const newSpecialOffer = document.querySelector('.so-item.model').cloneNode(true)
            newSpecialOffer.querySelector('div img').src = game.imageUrl
            newSpecialOffer.querySelector('.offer-details-2 h1').textContent = '-' + game.discount + '%'
            newSpecialOffer.querySelector('.offer-details-2 h2').textContent = 'R$' + (game.price - (game.price / 100) * game.discount).toFixed(2)
            newSpecialOffer.querySelector('.offer-details-2 span').textContent = 'R$' + game.price.toFixed(2)
            newSpecialOffer.classList.remove('model')
            specialOffersSlider.appendChild(newSpecialOffer)
        }
    })
} loadSpecialOffers()
//#endregion

//#region Sliders

// Featured & Recommended slider
const frSlider = document.querySelector('.fr-slider')
const frSliderArrows = document.querySelectorAll('#featured-recommended .arrows span')

const widthToMove = frSlider.getBoundingClientRect()
const frSliderPositions = [0, -widthToMove.width / 4, -widthToMove.width / 2, -widthToMove.width / 1.364]

var currentFrSliderPosition = 0
frSliderArrows.forEach(arrow => {
    arrow.onclick = function() {
        if (arrow.textContent === 'arrow_back_ios') {
            if (currentFrSliderPosition === 0) return
            currentFrSliderPosition -= 1
        }
        
        if (arrow.textContent === 'arrow_forward_ios') {
            if (currentFrSliderPosition === 3) return
            currentFrSliderPosition += 1
        }

        frSlider.style.translate = frSliderPositions[currentFrSliderPosition] + 'px'
    }
})


// Special Offers slider
const soSlider = document.querySelector('.so-slider')
const soSliderArrows = document.querySelectorAll('#special-offers .arrows span')

const widthToMoveSo = soSlider.getBoundingClientRect()
const soSliderPositions = [0, -widthToMoveSo.width / 2.75]

var currentSoSliderPosition = 0
soSliderArrows.forEach(arrow => {
    arrow.onclick = function() {
        if (arrow.textContent === 'arrow_back_ios') {
            if (currentSoSliderPosition === 0) return
            currentSoSliderPosition -= 1
        }
        
        if (arrow.textContent === 'arrow_forward_ios') {
            if (currentSoSliderPosition === 1) return
            currentSoSliderPosition += 1
        }

        soSlider.style.translate = soSliderPositions[currentSoSliderPosition] + 'px'
    }
})

//#endregion

//#region Menu

const menuArea = document.querySelector('#menu')
const menuButton = document.querySelector('[data-menu-button]')

menuButton.onclick = () => {
    menuArea.style.translate = '0'
}

const backToPageButton = document.querySelector('[data-back-menu-button]')

backToPageButton.onclick = () => {
    menuArea.style.opacity = 0
    menuArea.style.translate = '-100%'
    setTimeout(() => menuArea.style.opacity = 1, 450)
}

//#endregion

// Select animation
const bottomNavButtons = document.querySelectorAll('#bottom-nav li')
bottomNavButtons.forEach(button => {
    button.onclick = () => {
        bottomNavButtons.forEach(btn => { btn.classList.remove('active') })
        button.classList.add('active')
    }
})
