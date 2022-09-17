const textDisplay = document.getElementById('typing')
const phrases = ['Fiction.', 'Poetry.', 'Creative Non-Fiction.', 'Screenwriting.']

let i = 0
let j = 0
let currentPhrase = []
let endP

function loop () {
    if (i < phrases.length) {
        currentPhrase.push(phrases[i][j])
        if (j < phrases[i].length) {
            console.log(phrases[i][j])
            j++
        }
        if (j == phrases[i].length) {
            i++
        }
    }
    setTimeout(loop, 500)
}
