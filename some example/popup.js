let popup_btns = document.querySelectorAll('.popup-btn')

if (popup_btns) {
    var popup_wrapper = document.createElement('div')
    popup_wrapper.className = 'popup-wrapper'
    document.body.prepend(popup_wrapper)
}

popup_btns.forEach( popup_btn => {
    let popup = popup_btn.nextElementSibling
    popup_btn.addEventListener('click', e => {
        popup.classList.add('show')
        popup_wrapper.classList.add('show')
        let popup_closes = popup.querySelectorAll('.popup-close')
        popup_closes.forEach(popup_close => {
            popup_close.addEventListener('click', e => {
                popup.classList.remove('show')
                popup_wrapper.classList.remove('show')
            })
        });
        popup_wrapper.addEventListener('click', e => {
            popup.classList.remove('show')
            popup_wrapper.classList.remove('show')
        })
    })
})