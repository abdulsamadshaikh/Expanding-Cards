const cardsPanel = document.querySelectorAll('.card')

cardsPanel.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
        
    })
})

function removeActiveClasses() {
    cardsPanel.forEach(card => {
        card.classList.remove('active')
    
    })
}