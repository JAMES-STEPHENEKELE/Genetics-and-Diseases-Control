const dropBtn = document.getElementById('dropdown')
dropBtn.addEventListener('click', function () {
    console.log('clicked');
    const open = document.querySelector('.toggle')
    open.classList.toggle('active')
})

function showCard(card) {
    const cards = document.querySelectorAll('.card > div');
    cards.forEach((cardElement) => {
        cardElement.hidden = true;
    });

    const selectedCard = document.getElementById(card);
    selectedCard.removeAttribute('hidden');
};