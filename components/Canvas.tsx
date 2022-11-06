import React, { useRef, useState } from "react";

export const Canvas = () => {
  const [isPainting, setIsPainting] = useState(false);
  const [lineWidth, setLineWidth] = useState("5");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isPainting) {
      return;
    }
    const ctx = canvasRef?.current?.getContext("2d");
    const canvasOffsetX = canvasRef?.current?.offsetLeft ?? 0;
    const canvasOffsetY = canvasRef?.current?.offsetTop ?? 0;
    if (ctx) {
      ctx.lineWidth = Number(lineWidth);
      ctx.lineCap = "round";
      ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
      ctx.stroke();
    }
  };

  const clearCanvas = () => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) {
      ctx.clearRect(
        0,
        0,
        canvasRef?.current?.width ?? 0,
        canvasRef?.current?.height ?? 0
      );
    }
  };
  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = e?.target?.value ?? "";
    }
  };
  const changeLineWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLineWidth(e.target.value);
  };

  return (
    <section className="flex">
      <div className="flex flex-col">
        <h1>Draw.</h1>
        <label htmlFor="stroke">Stroke</label>
        <input
          id="stroke"
          name="stroke"
          type="color"
          onChange={e => changeColor(e)}
        />
        <label htmlFor="lineWidth">Line Width</label>
        <input
          id="lineWidth"
          name="lineWidth"
          type="number"
          value={lineWidth}
          onChange={e => changeLineWidth(e)}
        />
        <button onClick={() => clearCanvas()}>Clear</button>
      </div>
      <div className="border border-solid border-black">
        <canvas
          ref={canvasRef}
          onMouseDown={e => {
            setIsPainting(true);
          }}
          onMouseMove={e => draw(e)}
          onMouseUp={() => {
            setIsPainting(false);
            const ctx = canvasRef?.current?.getContext("2d");
            if (ctx) {
              ctx.stroke();
              ctx.beginPath();
            }
          }}
        />
      </div>
    </section>
  );
};

export default Canvas;
