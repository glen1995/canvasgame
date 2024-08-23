const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');
console.log(ctx);
if (!ctx) {
    throw new Error('Canvas not found');
}
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 169, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.fillStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 150, 100, 100);
ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
ctx.fill();
ctx.closePath();