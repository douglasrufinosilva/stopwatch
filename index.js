const minutesElements = document.querySelector('#minutes')
const secondsElements = document.querySelector('#seconds')
const millisecondsElements = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10

            if (milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesElements.textContent = formatTime(minutes)
            secondsElements.textContent = formatTime(seconds)
            millisecondsElements.textContent = formatMilliseconds(milliseconds)
        }
    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

function resumeTimer() {
    isPaused = false
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
}

function resetTimer() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesElements.textContent = '00'
    secondsElements.textContent = '00'
    millisecondsElements.textContent = '00'

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'

    isPaused = false
    }

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time
}