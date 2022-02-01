let el = document.createElement('div')
window.addEventListener('online', e =>{
    console.log('online')
    el.className = 'alert'
    el.classList.add('alert-success')
    el.textContent = "Online"
})
window.addEventListener('offline', e =>{
    console.log('offline')
    el.className = 'alert'
    el.classList.add('alert-danger')
    el.textContent = "Offline"
})
// document.querySelector('.container').append(el)
document.querySelector('.container').prepend(el)
