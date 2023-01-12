
// Typewriter Loop
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Developer...", "Web Designer...", "Programmer."];
const typewriter = document.getElementById("typed");

let sleepTime = 100;
let currentIndex = 0;

const typeLoop = async () => {
    while (true) {
        let currentWord = phrases[currentIndex]; //sets current typed word to first index[0] phrase in array
        for (let i = 0; i < currentWord.length; i++) { //loops through first phrase characters
            typewriter.innerText = currentWord.substring(0, i + 1); //types characters and increments starting from 0 to i++
            await sleep(sleepTime); //timer for typing
        }
        await sleep(sleepTime * 10); //delay timer

        for (let i = currentWord.length; i > 0; i--) { //delete typed text
            typewriter.innerText = currentWord.substring(0, i - 1); //removes characters
            await sleep(sleepTime); //timer for deletion
        }
        await sleep(sleepTime * 5); //wait time in between

        if (currentIndex === phrases.length - 1) { //array checker
            currentIndex = 0;
        }
        else {
            currentIndex++;
        }
    }
};

typeLoop();


// Cursor animation

let cursor = document.getElementById('cursor');

document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
}

// TAB toggle

function toggleTab(switchTab) {
    switch(switchTab) {
        case 'skills':
            document.getElementById('skills').style.display = 'block';
            document.getElementById('education').style.display = 'none';
            break;
          case 'education':
            document.getElementById('skills').style.display = 'none';
            document.getElementById('education').style.display = 'block';
            break;
          default:
            document.getElementById('skills').style.display = 'block';
    }
    
}

toggleTab();