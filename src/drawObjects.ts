import { Ball } from "./Ball";
import { Paddle } from "./Paddle";

export class DrawObjects {
    private readonly ballRadius: number;
    private readonly ctx: CanvasRenderingContext2D;
    // canvas variables
    private readonly canvas: HTMLCanvasElement;
    private readonly canvasHeight: number;
    private readonly canvasWidth: number;
    // calculate boundary and ball position variables
    private x: number;
    private y: number;
    private dy: number;
    private dx: number;
    // paddleboard variables
    private readonly paddleHeight: number;
    private readonly paddleWidth: number;

    private paddleX: number;
    private paddleY: number;
    private interval: NodeJS.Timeout;

    private ball: Ball;
    public paddle: Paddle;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, interval: NodeJS.Timeout) {
        this.ballRadius = 10;
        this.ctx = ctx;

        this.canvas = canvas;
        this.canvasHeight = canvas.height;
        this.canvasWidth = canvas.width;

        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 4;
        this.dy = -4;

        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - this.paddleWidth) / 2;
        this.paddleY = canvas.height - this.paddleHeight;
        this.interval = interval;

        this.ball = new Ball(this.x, this.y, this.dx, this.dy, this.ballRadius, this.canvasWidth, this.canvasHeight)
        this.paddle = new Paddle(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight)
    }

    private calculateBoundary() {
        if (this.ball.detectCollision(this.paddleX, this.paddleWidth)) {
            this.ball.resetBall(this.canvasWidth / 2, this.canvasHeight - 30);
            document.location.reload();
            alert("Game Over")
            clearInterval(this.interval);
        }
    }



    public drawBall() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ball.drawBall(this.ctx)
        this.paddle.drawPaddle(this.ctx, this.canvasHeight);
        this.calculateBoundary();
    }

}

