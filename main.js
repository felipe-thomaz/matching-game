import CardGame from './src/components/CardGame/index.js'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)

$root.insertAdjacentHTML('beforeend', $htmlCardGame)
