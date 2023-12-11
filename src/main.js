const contactButton = document.getElementById("contactForm")
const cancelButton = document.getElementById("cancel")

const toggleModal = () => {
    document.getElementById('modal').classList.toggle('hidden')
}

contactButton.addEventListener('click', () => {
    toggleModal()
})

cancelButton.addEventListener('click', ()=>{
    toggleModal()
})
