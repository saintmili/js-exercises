let form = document.querySelector('.form')
let username = document.querySelector('#username')
let password = document.querySelector('#password')
let seePassword = document.querySelector('#see-password')

form.addEventListener('submit', e => {
    if (!(evaluateUsername && evaluatePassword === 5)) {
        e.preventDefault()

        if (!evaluateUsername) {
            form.username.classList.add('is-invalid')
        }
        if (evaluatePassword !== 5) {
            form.password.classList.add('is-invalid')
        }
    }
})

let usernamePattern = /^[a-zA-Z][a-zA-Z0-9 ._]{3,8}$/
let evaluateUsername = false
let evaluatePassword = function (password) {
    ep = 0
    ep += /[A-Z]/.test(password) ? 1 : 0
    ep += /[a-z]/.test(password) ? 1 : 0
    ep += /[0-9]/.test(password) ? 1 : 0
    ep += /[\W]/.test(password) ? 1 : 0
    ep += password.length >= 6 ? 1 : 0
    return ep
}

form.username.addEventListener('keyup', e => {
    if (e.target.value) {
        username.textContent = e.target.value.toLowerCase()
        if (usernamePattern.test(e.target.value)) {
            evaluateUsername = true
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        } else {
            evaluateUsername = false
            e.target.classList.add('is-invalid')
        }
    } else {
        username.innerHTML = '<i>Please write something!</i>'
    }
})

form.password.addEventListener('keyup', e => {
    if (e.target.value) {
        password.textContent = '*'.repeat(e.target.value.length)
        seePassword.textContent = e.target.value

        if (evaluatePassword(e.target.value) === 5) {
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        } else {
            e.target.classList.add('is-invalid')
        }
    } else {
        password.innerHTML = '<i>Please write something!</i>'
        seePassword.innerHTML = '<i>Please write something!</i>'
    }
})
