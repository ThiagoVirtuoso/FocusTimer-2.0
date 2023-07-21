import { playButton, pauseButton } from "./elements.js"
import Sounds from "./sounds.js"

const sounds = Sounds()

const getSound = {
    'forest': sounds.forest,
    'rain': sounds.rain,
    'coffee_shop': sounds.coffee_shop,
    'fireplace': sounds.fireplace
}

export default function() {
    function toggleControls() {
        playButton.classList.toggle('hide')
        pauseButton.classList.toggle('hide')
    }
    
    function resetControls() {
        if(playButton.classList.contains('hide')) {
            toggleControls(playButton, pauseButton)
        }
    }
    
    function toggleMusicButton(button) {
        if(button.classList.contains('playing')) {
            button.classList.toggle('playing')
            getSound[button.classList[0]].pause()
        } else {
            button.classList.toggle('playing')
            getSound[button.classList[0]].play()
        }
    }
    
    function switchButtons(button, buttons) {
        let activeButton
        for (const Button of buttons) {
            if(Button.classList.contains('playing')) {
                activeButton = Button
            }
        }
        
        if(activeButton && (activeButton != button)) {
            toggleMusicButton(activeButton)
        }
        toggleMusicButton(button)
    }
    return { toggleControls, resetControls, switchButtons }
}
