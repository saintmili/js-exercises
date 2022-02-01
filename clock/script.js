let clock = document.querySelector('.clock')
let date = document.querySelector('.date')

let func = () => {
    let myDate = new Date()
    clock.textContent = `${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
    let myJDate = gregorian_to_jalali(
        myDate.getFullYear(),
        myDate.getMonth() + 1,
        myDate.getDate()
    )
    date.textContent = myJDate
}

setInterval(func, 1000)

