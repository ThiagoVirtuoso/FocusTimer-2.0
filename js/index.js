import { minutesDisplay, secondsDisplay, playButton, pauseButton, stopButton, plusButton, minusButton, soundButtons } from "./elements.js"
import Timer from "./timer.js"
import Events from "./events.js"

const timer = Timer(minutesDisplay, secondsDisplay)
Events(timer, playButton, pauseButton, stopButton, plusButton, minusButton, soundButtons)