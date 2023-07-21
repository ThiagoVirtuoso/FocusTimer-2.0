import Sounds from "./sounds.js"
import Controls from "./controls.js"

const sounds = Sounds()

const getSound = {
    'forest': sounds.forest,
    'rain': sounds.rain,
    'coffee_shop': sounds.coffee_shop,
    'fireplace': sounds.fireplace
}

export default function(timer, playButton, pauseButton, stopButton, plusButton, minusButton, soundButtons) {
    for (const soundButton of soundButtons) {
        soundButton.onclick  = () => {
            Controls().switchButtons(soundButton, soundButtons)
        }
    }
    
    playButton.onclick = () => {
        Controls().toggleControls()
        timer.countdown()
        sounds.buttonPress.play()
    }
    
    pauseButton.onclick = () => {
        Controls().toggleControls()
        timer.hold()
        sounds.buttonPress.play()
    }
    
    stopButton.onclick = () => {
        timer.reset()
        Controls().resetControls()
        sounds.buttonPress.play()
    }
    
    plusButton.onclick = () => {
        timer.set('+')
        sounds.buttonPress.play()
    }
    
    minusButton.onclick = () => {
        timer.set('-')
        sounds.buttonPress.play()
    }
}