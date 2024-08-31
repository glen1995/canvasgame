export class Ball {
    // calculate boundary and ball position variables
    private x: number;
    private y: number;
    private dy: number;
    private dx: number;
    private readonly ballRadius: number;
    private readonly canvasHeight: number;
    private readonly canvasWidth: number;

    constructor(x: number, y: number, dx: number, dy: number, ballRadius: number, canvasWidth: number, canvasHeight: number) {
        this.ballRadius = ballRadius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth
    }

    private moveBall() {
        this.x += this.dx;
        this.y += this.dy;
    }

    public detectCollision(paddleX: number, paddleWidth: number) {
        if (this.x + this.dx > this.canvasWidth - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
        if (this.y + this.dy > this.canvasHeight - this.ballRadius) {
            if (this.x > paddleX && this.x < paddleX + paddleWidth) {
                this.dy = -this.dy;
            } else {
                return true
            }
        }
    }

    public resetBall(canvasWidth: number, canvasHeight: number) {
        this.x = canvasWidth;
        this.y = canvasHeight;
    }

    public drawBall(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
        this.moveBall();
    }

}