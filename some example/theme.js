let themes = document.querySelector('.themes')
let selectedTheme = document.querySelector('#selected-theme')
let themeLS = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'

selectedTheme.textContent = themeLS
document.body.className = themeLS
Array.from(themes.children).forEach(theme => {
    theme.addEventListener('click', e => {
        let color = e.target.dataset.color
        document.body.className = color
        selectedTheme.textContent = color
        localStorage.setItem('theme', color)
    })
})