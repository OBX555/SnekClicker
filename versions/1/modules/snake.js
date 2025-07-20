const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');
const tips = [
    "Click to earn money and XP!",
    "Upgrade your snake for better performance!",
    "Reach higher levels to unlock new features!",
    "Rank up to increase your earnings!",
    "Keep clicking to maximize your income!",
    "I DO NOT FORGIVE",
    "Have fun playing!",
    "Did you know you can reset your upgrades? JK, you can't.",
    "Good luck with the snake!",
    "Remember to refresh the page to reset your progress!",
    "This is a simple DVD clicker game, but it can be addictive!",
    "Clicking is the key to success!",
    "Try to reach the highest rank possible!",
    "Every click counts towards your progress!",
    "Don't forget to check your upgrades!",
    "The snake will keep moving, so stay alert!",
    "Clicking faster will earn you more money!",
    "You can earn money even when you're not clicking!",
    "I SEE ALL",
    "The snake is always watching you!",
    "Clicking is the way to go!",
    "Keep an eye on your money and XP!",
    "The snake loves your clicks!",
    "Clicking is the secret to success!",
    "The more you click, the more you earn!",
    "Clicking is the path to greatness!",
    "The snake is your friend, click it!",
    "THE SNAKE IS COMING,THE SNAKE IS THE CHEESE, THE SYSTEM SHALL STOP THE SNAKE",
    "For every click, the snake grows stronger!",
    "The snake is always watching you!"
];
let tip = "Click to earn money and XP!";

const snake = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    vx: Math.floor(Math.random() * 2) === 0 ? -1 : 1,
    vy: Math.floor(Math.random() * 2) === 0 ? -1 : 1,
    length: 50,
    color: 'green'
};

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = snake.color;
    ctx.fillRect(snake.x, snake.y, snake.length, snake.length);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeRect(snake.x, snake.y, snake.length, snake.length);
    ctx.fillStyle = 'gray';
    ctx.font = '1px';
    ctx.fillText(tip, snake.x + 3, snake.y + 10);
    ctx.fillStyle = 'white';
    ctx.font = '5px';
    ctx.fillText(formatNumber(getMoney()), snake.x + 3, snake.y + 30);
    ctx.fillText(rankCalc(rank), snake.x + 3, snake.y + 40);
}

function updateSnake() {
    if (Math.random() < 0.01) {
        tip = tips[Math.floor(Math.random() * tips.length)];
    }
    snake.x += snake.vx;
    snake.y += snake.vy;

    if (snake.x < 0 || snake.x > canvas.width - snake.length) {
        snake.vx *= -1;
    }
    if (snake.y < 0 || snake.y > canvas.height - snake.length) {
        snake.vy *= -1;
    }
}

function animate() {
    drawSnake();
    updateSnake();
    requestAnimationFrame(animate);
}

animate();