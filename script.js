const messageElement = document.getElementById('message');
const messageLines = [
    "dearest kate -- \n",
    "you have my heart, even when you are far.\n", 
    "but, if you need a reminder. \n",
    "love, \n",
    "-aaru"

];

function typeMessage() {
    messageElement.textContent = ""; // Clear existing text
    let lineIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        if (lineIndex < messageLines.length) {
            const line = messageLines[lineIndex];
            messageElement.textContent += line[charIndex];
            charIndex++;

            if (charIndex === line.length) {
                // Move to the next line
                lineIndex++;
                charIndex = 0;
            }
        } else {
            // All lines have been typed, stop the interval
            clearInterval(typingInterval);
        }
    }, 150); // Adjust the typing speed between characters
}

window.onload = typeMessage;
