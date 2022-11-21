import { useState, useRef, useEffect, useCallback } from "react";
import { pdfjs } from "react-pdf";
import usePdfStore, { PdfState } from "../../zustand/store";
import { fabric } from "fabric";
import produce from "immer";
import NextImage from "next/image";

const PdfItem = ({ pdf, pages, currentSign }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [updatePage, setUpdatePage] = useState(false);

  const handleUploadPdf = (pdfDoc) => {
    const file = pdfDoc;
    if (file?.type === "application/pdf") {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        const pdfData = new Uint8Array(fileReader.result as ArrayBufferLike);
        // Using DocumentInitParameters object to load binary data.
        const loadingTask = pdfjs.getDocument({ data: pdfData });
        loadingTask.promise.then(
          function (pdf) {
            pdf.getPage(pages).then(function (page) {
              const scale = 1;
              const viewport = page.getViewport({ scale: scale });
              if (!canvas) return;
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              const renderContext = {
                canvasContext: ctx,
                viewport: viewport,
              };
              const renderTask = page.render(renderContext);
              renderTask.promise.then(function () {
                const background = canvasRef?.current?.toDataURL() ?? "";
                fabric.Image.fromURL(background, function (img) {
                  img.scaleToHeight(viewport.height);
                  canvas?.setHeight(viewport.height);
                  canvas?.setWidth(viewport.width);
                  canvas?.setBackgroundImage(img, () => {});
                });
                canvas?.renderAll();
                console.log("Page rendered");
                usePdfStore.setState(
                  produce<PdfState>((store) => {
                    store.pageImage.set(pages, canvas.toDataURL());
                  })
                );
              });
            });
          },
          function (reason) {
            console.error(reason);
          }
        );
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  useEffect(() => {
    if (!canvas) return;
    handleUploadPdf(pdf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf, canvas]);

  useEffect(() => {
    if (!canvasRef?.current) return;
    setCanvas(new fabric.Canvas(canvasRef.current));
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef]);

  useEffect(() => {
    usePdfStore.setState(
      produce<PdfState>((store) => {
        store.pageImage.set(pages, canvas?.toDataURL() ?? "");
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePage]);

  return (
    <div
      onMouseDown={(e) => {
        if (!canvas || e.button !== 0) return;
        fabric.Image.fromURL(currentSign, (img) => {
          const imgPositon = img.set({
            left: e.clientX - (canvas as any)._offset.left - 120,
            top: e.clientY - 150,
            width: 240,
            height: 100,
          });
          img.scaleToWidth(100);
          img.scaleToHeight(100);
          canvas.add(imgPositon).renderAll();
          setUpdatePage(!updatePage);
        });
      }}
    >
      <canvas ref={canvasRef} width={615} height={800} />
    </div>
  );
};

export const ViewPdf = ({ setPage }) => {
  const { pdf, totalPage, currentSign, setTotalPage, setCurrentSign } =
    usePdfStore();

  const [currentPages, setCurrentPages] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const divRef = useRef<HTMLDivElement | null>(null);
  const butterRef = useRef(true);

  const clientHeight = divRef.current?.clientHeight ?? 0;

  const handleUploadPdf = useCallback(
    (pdfDoc: File) => {
      const file = pdfDoc;
      if (file?.type === "application/pdf") {
        let fileReader = new FileReader();
        fileReader.onload = function () {
          const pdfData = new Uint8Array(fileReader.result as ArrayBufferLike);

          const loadingTask = pdfjs.getDocument({ data: pdfData });
          loadingTask.promise.then(
            function (pdf: { _pdfInfo: { numPages: number } }) {
              setTotalPage(pdf._pdfInfo.numPages);
            },
            function (reason: any) {
              console.error(reason);
            }
          );
        };
        fileReader.readAsArrayBuffer(file);
      }
    },
    [setTotalPage]
  );

  useEffect(() => {
    if (!pdf) return;
    handleUploadPdf(pdf);
  }, [handleUploadPdf, pdf]);

  useEffect(() => {
    const illegalCondition =
      !divRef.current || setPage > (totalPage ?? 0) || setPage < 1;
    if (illegalCondition) return;
    butterRef.current = true;
    divRef?.current?.scrollTo(0, clientHeight * (setPage - 1));
    setCurrentPages(setPage);
    butterRef.current = false;
  }, [clientHeight, setPage, totalPage]);

  return (
    <div
      className="w-full h-screen overflow-scroll bg-[#f0f0f0] scroll-smooth pb-24"
      ref={divRef}
      onMouseMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
      onClick={() => setCurrentSign("")}
      // onScroll={e => {
      //   if (!butterRef.current) return;
      //   const currentPositon = (e.target as Element).scrollTop;
      //   const readedQuantity = pagePosition.filter(
      //     item => item < currentPositon
      //   );
      //   if (readedQuantity.length === 0) {
      //     // setCurrentPages(1);
      //     return;
      //   }
      //   setCurrentPages(readedQuantity.length);
      // }}
    >
      <div className="flex flex-col items-center justify-center">
        {Array.from({ length: totalPage ?? 0 }, (_, index) => (
          <PdfItem
            key={index}
            pdf={pdf}
            pages={index + 1}
            currentSign={currentSign}
          />
        ))}
        {currentSign && (
          <div
            className="w-[256px] h-16 absolute bg-white pointer-events-none"
            style={{
              top: `${mousePosition.y - 32}px`,
              left: `${mousePosition.x - 128}px`,
            }}
          >
            <NextImage
              src={currentSign}
              alt="currentSign"
              fill
              className=" object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPdf;
