export const createPattern = (color, patternType, backgroundColor, ctx) => {
    const size = 10;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const patternCtx = canvas.getContext("2d");
    patternCtx.fillStyle = backgroundColor;
    patternCtx.fillRect(0, 0, size, size);

    switch (patternType) {
        case "dot":
            patternCtx.fillStyle = color;
            patternCtx.beginPath();
            patternCtx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI);
            patternCtx.fill();
            break;
        case "line":
            patternCtx.strokeStyle = color;
            patternCtx.lineWidth = 1;
            patternCtx.beginPath();
            patternCtx.moveTo(size / 2, 0);
            patternCtx.lineTo(size / 2, size);
            patternCtx.stroke();
            break;
        case "vertical-diagonal":
            patternCtx.strokeStyle = color;
            patternCtx.lineWidth = 1;
            patternCtx.beginPath();
            patternCtx.moveTo(size / 2, 0);
            patternCtx.lineTo(0, size / 2);
            patternCtx.moveTo(size, size / 2);
            patternCtx.lineTo(size / 2, size);
            patternCtx.stroke();
            break;
        default:
            break;
    }

    return ctx.createPattern(canvas, "repeat");
};