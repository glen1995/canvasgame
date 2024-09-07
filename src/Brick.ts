export class Brick {
    public readonly brickRowCount: number = 0;
    public readonly brickColumnCount: number = 0;
    private readonly brickWidth: number = 0;
    private readonly brickHeight: number = 0;
    private readonly brickPadding: number = 0;
    private readonly brickOffsetTop: number = 0;
    private readonly brickOffsetLeft: number = 0;
    private bricks: { x: number; y: number; status?: boolean }[][] = [];
    constructor(
        brickRowCount: number,
        brickColumnCount: number,
        brickWidth: number,
        brickHeight: number,
        brickPadding: number,
        brickOffsetTop: number,
        brickOffsetLeft: number
    ) {
        this.brickRowCount = brickRowCount;
        this.brickColumnCount = brickColumnCount;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickPadding = brickPadding;
        this.brickOffsetTop = brickOffsetTop;
        this.brickOffsetLeft = brickOffsetLeft;
        for (let i = 0; i < this.brickColumnCount; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.brickRowCount; j++) {
                this.bricks[i][j] = { x: 0, y: 0, status: true };
            }
        }

    }

    public drawBricks(ctx: CanvasRenderingContext2D) {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                const brick = this.bricks[c][r]
                if (brick.status) {
                    const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft
                    const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop
                    brick.x = brickX;
                    brick.y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                    ctx.fillStyle = "red";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    public detectBrickCollision(x: number, y: number) {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                const brick = this.bricks[c][r];
                if (x > brick.x && x < brick.x + this.brickWidth && y > brick.y && y < (brick.y + this.brickHeight)) {
                    brick.status = false
                    return true;
                }
            }
        }
    }
}