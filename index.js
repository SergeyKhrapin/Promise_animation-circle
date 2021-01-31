'use strict'

const showBtn = document.getElementById('show')

showBtn.addEventListener('click', () => {
    showCicle(150, 150, 100)
})

function showCicle(x, y, r) {
    const circle = document.createElement('div')

    circle.classList = 'circle'
    circle.style.left = x + 'px'
    circle.style.top = y + 'px'

    document.body.append(circle)

    const keyframes = [
        {
            width: 0,
            height: 0,
        },
        {
            width: r*2 + 'px',
            height: r*2 + 'px',
        }
    ]

    const options = {
        delay: 30,
        duration: 3000,
        fill: 'forwards'
    }

    const animation = circle.animate(keyframes, options)
    const animationPromise = animation.finished

    animationPromise.then(promise => {
        showMessage(promise.effect.target, 'Hello ;)')
    })
}

function showMessage(el, msg) {
    el.innerText = msg
}
