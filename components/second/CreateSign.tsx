import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export const Canvas = ({ clientX, clientY }) => {
  const [isPainting, setIsPainting] = useState(false);
  const [lineWidth, setLineWidth] = useState("5");
  const [mode, setMode] = useState<"write" | "import">("write");
  const [openPlaceholder, setOpenPlaceholder] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const range = useMemo(() => {
    const modalWidth = 590;
    const modalHeight = 444;
    const rangeX = Math.round((clientX - modalWidth) / 2);
    const rangeY = Math.round((clientY - modalHeight) / 2);
    return { rangeX, rangeY };
  }, [clientX, clientY]);

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isPainting) {
      return;
    }
    const ctx = canvasRef?.current?.getContext("2d");
    const canvasOffsetX = canvasRef?.current?.offsetLeft ?? 0;
    const canvasOffsetY = canvasRef?.current?.offsetTop ?? 0;

    if (ctx) {
      const beautifulAdjustmentX = 20;
      const beautifulAdjustmentY = 160;
      ctx.lineWidth = Number(lineWidth);
      ctx.lineCap = "round";
      ctx.lineTo(
        e.clientX - canvasOffsetX - range.rangeX - beautifulAdjustmentX,
        e.clientY - canvasOffsetY - range.rangeY - beautifulAdjustmentY
      );
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
    setOpenPlaceholder(true);
  };
  const changeColor = (color: string) => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = color ?? "";
    }
  };

  const changeLineWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0 || Number(e.target.value) > 50) {
      alert("請選擇合理的字體大小");
      return;
    }
    setLineWidth(e.target.value);
  };

  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getCities(db) {
    const citiesCol = collection(db, 'sign');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log('cityList',cityList)
    return cityList;
  }

  useEffect(() => {
    getCities(db)
  },[db])

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
            onClick={() => {
              alert("沒時間弄");
              setMode("import");
            }}
          >
            匯入簽名檔
          </button>
        </li>
      </ul>
      <div className="flex justify-between items-center mb-5">
        <ul className="flex">
          <li className="mr-2">
            <button
              type="button"
              onClick={() => {
                changeColor("#000000");
              }}
            >
              <div className="w-8 h-8 rounded-full bg-black"></div>
            </button>
          </li>
          <li className="mr-2">
            <button
              type="button"
              onClick={() => {
                changeColor("#0014C7");
              }}
            >
              <div className="w-8 h-8 rounded-full bg-[#0014C7]"></div>
            </button>
          </li>
          <li className="mr-2">
            <button
              type="button"
              onClick={() => {
                changeColor("#CA0000");
              }}
            >
              <div className="w-8 h-8 rounded-full bg-[#CA0000]"></div>
            </button>
          </li>
        </ul>
        {/* <div className="flex flex-col">
          <label htmlFor="stroke">
            <div className="w-8 h-8 rounded-full bg-black"></div>
          </label>
          <input
            id="stroke"
            name="stroke"
            type="color"
            className="h-0 visible"
            onChange={(e) => changeColor(e)}
          />
        </div> */}
        <div>
          <label htmlFor="lineWidth" className="text-[#1C8B6A] mr-2">
            調整文字寬度
          </label>
          <input
            id="lineWidth"
            name="lineWidth"
            type="number"
            value={lineWidth}
            className="w-16 pl-4"
            onChange={(e) => changeLineWidth(e)}
          />
        </div>
        <button
          type="button"
          className="text-[#1C8B6A]"
          onClick={() => clearCanvas()}
        >
          清除
        </button>
      </div>
      <div className="bg-white w-full h-[200px] rounded-2xl relative mb-4">
        {openPlaceholder && (
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B7B7B7]">
            在此書寫你的簽名
          </p>
        )}
        <canvas
          ref={canvasRef}
          width={570}
          height={200}
          onMouseDown={() => {
            setIsPainting(true);
            setOpenPlaceholder(false);
          }}
          onMouseMove={(e) => draw(e)}
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
      <ul className="flex justify-center">
        <li className="mr-2">
          <button
            className="border border-solid border-[#1C8B6A] rounded-3xl w-[165px] py-4"
            onClick={() => {
              clearCanvas();
            }}
          >
            取消
          </button>
        </li>
        <li>
          <Button
            size="medium"
            className=""
            onClick={() => {
              if (!canvasRef.current) return;
              const sign = canvasRef.current.toDataURL();
              console.log("sign", sign);
            }}
          >
            建立簽名
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Canvas;
