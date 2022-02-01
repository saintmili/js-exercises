let slideshow = document.querySelector('.slideshow')
let slides = document.querySelectorAll('.slide')
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
let points = document.querySelectorAll('.points > span')
let active = 0

let classSwitcher = () => {
    slides[active].classList.add('active')
    slides.forEach(slide => slide.classList.remove('active'))
    slides[active].classList.add('active')
    points.forEach(point => point.classList.remove('active'))
    points[active].classList.add('active')
}

let goNext = () => {
    active = (active == slides.length -1) ? active = 0 : active + 1
    classSwitcher()
}

let goPrev = () => {
    active = (active == 0) ?  slides.length-1 : active - 1
    classSwitcher()
}

let runSlideshow = setInterval(goNext, 3000)

next.addEventListener('click', goNext)
previous.addEventListener('click', goPrev)

points.forEach((point, index) => {
    point.addEventListener('click', e => {
        active = index 
        classSwitcher()
    })
})

slideshow.addEventListener('mouseover', e => clearInterval(runSlideshow))
slideshow.addEventListener('mouseleave', e => runSlideshow = setInterval(goNext, 3000))