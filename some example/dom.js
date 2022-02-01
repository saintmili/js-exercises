// let header = document.getElementById('header')
// console.log(header)
// header.style.color = 'red'

// let contents = document.getElementsByClassName('content')
// for (let i=0; i<contents.length; i++) {
//     console.log(content[i])
// }
// content[1].style.fontSize = '25px'

// let paragraphs = document.getElementsByTagName('p')
// console.log(paragraphs)
// paragraphs[0].innerText = 'paragraph edited!'

// let header = document.querySelector('#header')
// console.log(header)
// header.style.color = 'red'

// let content = document.querySelector('.content')
// content.style.fontSize = '25px'

// let contents = document.querySelectorAll('.content')

// let paragraph = document.querySelector('p')
// paragraph.innerText = 'paragraph edited!'

// let paragraphs = document.querySelectorAll('p')
// paragraphs.forEach( paragraph => {
//     paragraph.style.color = 'green';
// })

// let lists = document.querySelectorAll('li')
// lists.forEach( list => {
//     console.log(list.innerText)
//     list.innerHTML += ' <span class="badge badge-danger">new</span>'
//     console.log(list.textContent)
// })

// let createLists = function (list) {
//     let ul = document.querySelector('ul')
//     ul.innerHTML = ''
//     list.forEach( item => {
//         ul.innerHTML += `<li>${item}</li>`
//     })
// }

// let colors = ['orange', 'purple', 'white']
// createLists(colors)

// let header = document.querySelector('#header')
// console.log(header.getAttribute('id'))
// header.setAttribute('title', 'This is header title')

// let links = document.querySelectorAll('a')
// links.forEach(link => {
//     href = link.href
//     link.href = href.replace('http://', 'https://')
//     link.dataset.protocol = 'SSL'
//     link.style.color = 'blue'
//     link.setAttribute('style', link.getAttribute('style') + 'font-size: 20px;')
// })

// let header = document.querySelector('#header')
// console.log(header.classList)
// header.classList.add('mt-5')
// header.classList.remove('btn-success')
// header.classList.add('btn-danger')

// // remove if exist, add if not
// header.classList.toggle('btn-success')

// let ul = document.querySelector('ul')
// Array.from(ul.children).forEach((li, index) =>{
//     if (index % 2 == 0) {
//         li.style.color = 'brown'
//     } else {
//         li.style.color = 'orange'
//     }
// })
// ul.parentElement.style.fontSize = '25px'
// ul.nextElementSibling.style.color = 'purple'
// ul.previousElementSibling.style.color = 'tomato'

// let btn = document.querySelector('button')
// btn.addEventListener("click", e => {
//     e.target.textContent = 'Clicked!'
//     e.target.classList.add('btn-danger')
//     alert('You clicked the button!')
// })