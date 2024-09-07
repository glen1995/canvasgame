export class Score {
    private score: number = 0;

    public getScore() {
        return this.score;
    }

    public addScore() {
        this.score++;
    }

    public drawScore(ctx: CanvasRenderingContext2D) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText(`Score: ${this.score}`, 8, 20);
    }
}