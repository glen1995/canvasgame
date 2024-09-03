import { DrawObjects } from "./drawObjects";

const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');

const startButton = document.getElementById('start-button') as HTMLButtonElement;
const pauseButton = document.getElementById('pause-button') as HTMLButtonElement;
let interval: NodeJS.Timeout;
if (!ctx) {
    throw new Error('Canvas not found');
}

startButton.addEventListener('click', () => {
    startGame();
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
});

let drawObject: DrawObjects;
const startGame = () => {
    drawObject = new DrawObjects(canvas, ctx, interval);
    interval = setInterval(() => drawObject.drawBall(), 10);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e: KeyboardEvent) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        drawObject.paddle.rightPressed = true;
        drawObject.paddle.movePaddle(canvas.width);
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        drawObject.paddle.leftPressed = true;
        drawObject.paddle.movePaddle(canvas.width);
    }
}

function keyUpHandler(e: KeyboardEvent) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        drawObject.paddle.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        drawObject.paddle.leftPressed = false;
    }
}