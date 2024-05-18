const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');
const diceSize = 500;

// Function to draw the dice face
const drawDice=(number)=> {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the dice border
    ctx.strokeRect(10, 10, diceSize - 20, diceSize - 20);
    
    // Function to draw dots
    const drawDot=(x, y) =>{
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Set dot positions for each number
    const dotPositions = {
        1: [[250, 250]],
        2: [[100, 100], [400, 400]],
        3: [[100, 100], [250, 250], [400, 400]],
        4: [[100, 100], [400, 100], [100, 400], [400, 400]],
        5: [[100, 100], [400, 100], [250, 250], [100, 400], [400, 400]],
        6: [[100, 100], [400, 100], [100, 250], [400, 250], [100, 400], [400, 400]],
    };

    // Draw the dots for the current number
    dotPositions[number].forEach(pos => drawDot(...pos));
}

// Function to generate a random number between 1 and 6
const rollDice=()=> {
    return Math.floor(Math.random() * 6) + 1;
}

// Event listener for the space key press
document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        const randomNumber = rollDice();
        drawDice(randomNumber);
    }
});

// Initial draw
drawDice(1);

