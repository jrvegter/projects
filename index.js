import { firstName, secondName, buttonText } from './data.js'

const genName = document.querySelector("#screen-name");
const generateBtn = document.querySelector("#generate-btn");
const flairCheck = document.querySelector('#flair')

generateBtn.addEventListener("click", renderName)

function renderName() {
    const finalName = generateName()
    flairCheck.checked ? genName.textContent = `xX${finalName}Xx`
        : genName.textContent = finalName
    btnChange()
}

function generateName() {
    let nameOne = ''
    let nameTwo = ''
    do {
        nameOne = firstName[getRandomNum(firstName)]
        nameTwo = secondName[getRandomNum(secondName)]
    } while (nameOne === nameTwo)
    return nameOne + nameTwo
}

function btnChange() {
    const newBtnText = buttonText[getRandomNum(buttonText)]
    generateBtn.textContent = newBtnText
}

function getRandomNum(arr) {
    return Math.floor(Math.random() * arr.length)
}