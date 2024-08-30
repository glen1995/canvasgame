export class Paddle {
    // calculate boundary and ball position variables
    private paddleX: number;
    private paddleY: number;
    private paddleWidth: number;
    private paddleHeight: number;
    // paddle movement variables
    public rightPressed: boolean;
    public leftPressed: boolean;

    constructor(paddleX: number, paddleY: number, paddleWidth: number, paddleHeight: number,) {
        this.paddleX = paddleX;
        this.paddleY = paddleY;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    public movePaddle(canvasWidth: number) {
        if (this.rightPressed && this.paddleX < canvasWidth - this.paddleWidth) {
            this.paddleX = this.paddleX + 7;
        } else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX = this.paddleX - 7;
        }
    }

    public drawPaddle(ctx: CanvasRenderingContext2D, canvasHeight: number) {
        ctx.beginPath();
        ctx.rect(this.paddleX, canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
}