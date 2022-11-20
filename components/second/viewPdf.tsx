import { useState, useRef, useEffect } from "react";
import { pdfjs } from "react-pdf";
import usePdfStore, { PdfState } from "../../zustand/store";
import { fabric } from "fabric";
import produce from "immer";

const PdfItem = ({ pdf, pages }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [updatePage, setUpdatePage] = useState(false);

  const handleUploadPdf = pdfDoc => {
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
                  produce<PdfState>(store => {
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
  }, [pdf, canvas]);

  useEffect(() => {
    if (!canvasRef?.current) return;
    setCanvas(new fabric.Canvas(canvasRef.current));
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef]);

  useEffect(() => {
    usePdfStore.setState(
      produce<PdfState>(store => {
        store.pageImage.set(pages, canvas?.toDataURL() ?? "");
      })
    );
  }, [updatePage]);

  const sign1 =
    "data:image/png;base64,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";

  return (
    <div
      onMouseDown={e => {
        if (!canvas || e.button !== 0) return;
        fabric.Image.fromURL(sign1, img => {
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
  const { pdf, totalPage, setTotalPage } = usePdfStore();

  const [currentPages, setCurrentPages] = useState(1);

  const divRef = useRef<HTMLDivElement | null>(null);
  const butterRef = useRef(true);

  const clientHeight = divRef.current?.clientHeight ?? 0;

  useEffect(() => {
    if (!pdf) return;
    handleUploadPdf(pdf);
  }, [pdf]);

  useEffect(() => {
    const illegalCondition =
      !divRef.current || setPage > (totalPage ?? 0) || setPage < 1;
    if (illegalCondition) return;
    butterRef.current = true;
    divRef?.current?.scrollTo(0, clientHeight * (setPage - 1));
    setCurrentPages(setPage);
    butterRef.current = false;
  }, [setPage]);

  const handleUploadPdf = (pdfDoc: File) => {
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
  };

  return (
    <div
      className="w-full h-screen overflow-scroll bg-[#f0f0f0] scroll-smooth pb-24"
      ref={divRef}
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
          <PdfItem key={index} pdf={pdf} pages={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default ViewPdf;
