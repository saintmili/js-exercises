var x = 1
let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')

let doSomething = () => {
    let set = document.querySelector('#set')
    set.textContent = `My counter: ${x++} seconds.`
}

let myInterval = setInterval(doSomething, 1000);
let timer = true

setTimeout(
    () => {
        clearInterval(myInterval)
    }, 50000
)

startBtn.addEventListener('click', e => {
    if (!timer) {
        myInterval = setInterval(doSomething, 1000);
        timer = true
    }  
})

stopBtn.addEventListener('click', e => {
    if (timer) {
        clearInterval(myInterval)
        timer = false
    }
})