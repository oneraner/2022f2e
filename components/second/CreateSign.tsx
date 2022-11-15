import React, { useRef, useState } from "react";

export const Canvas = () => {
  const [isPainting, setIsPainting] = useState(false);
  const [lineWidth, setLineWidth] = useState("5");
  const [mode, setMode] = useState<"write" | "import">("write");

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
    <section className="flex flex-col w-[590px] px-2.5 py-6">
      <ul className="flex justify-center mb-6">
        <li className={`${mode === "write" && "z-10"}`}>
          <button
            className={`w-[130px] h-10 ${
              mode === "write"
                ? "bg-[#35A483] text-white"
                : "bg-white text-[#1C8B6A]"
            }  rounded-2xl -mr-4`}
            type="button"
            onClick={() => setMode("write")}
          >
            手寫簽名
          </button>
        </li>
        <li className={`${mode === "import" && "z-10"}`}>
          <button
            className={`w-[130px] h-10 ${
              mode === "import"
                ? "bg-[#35A483] text-white"
                : "bg-white text-[#1C8B6A]"
            }  rounded-2xl -mr-4`}
            type="button"
            onClick={() => setMode("import")}
          >
            匯入簽名檔
          </button>
        </li>
      </ul>
      <div className="flex mb-5">
        <button type="button" onClick={() => {}}>
          <div className="w-8 h-8 rounded-full bg-black"></div>
        </button>
        <div className="flex flex-col">
          <label htmlFor="stroke">
            <div className="w-8 h-8 rounded-full bg-black"></div>
          </label>
          <input
            id="stroke"
            name="stroke"
            type="color"
            className="h-0 visible"
            onChange={e => changeColor(e)}
          />
        </div>
        {/* <label htmlFor="lineWidth">Line Width</label>
        <input
          id="lineWidth"
          name="lineWidth"
          type="number"
          value={lineWidth}
          onChange={e => changeLineWidth(e)}
        /> */}
        <button
          type="button"
          className="text-[#1C8B6A]"
          onClick={() => clearCanvas()}
        >
          清除
        </button>
      </div>
      <div className="bg-white w-full h-[200px] rounded-2xl">
        <canvas
          ref={canvasRef}
          onMouseDown={() => {
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
