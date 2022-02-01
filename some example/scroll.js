let scroll = document.querySelector('.scroll')

window.addEventListener('scroll', e => {
    if (window.scrollY > 100) {
        scroll.classList.add('show')
    } else {
        scroll.classList.remove('show')
    }
})

scroll.addEventListener('click', e => {
    if (scroll.classList.contains('show')){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
})