const moment = require('moment');

function getInputEle() {
    const inputEle = document.createElement('input')
    inputEle.addEventListener('change', (e) => {
        import(/* webpackPrefetch: true */ './' + e.target.value)
            .then(({ default: comp }) => {
            comp()
        })
    })

    moment()
    
    return inputEle
}

document.body.appendChild(getInputEle())


