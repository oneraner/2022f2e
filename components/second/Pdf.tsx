import { useState } from "react";
import usePdfStore from "../../zustand/store";
import { Document, Page,pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Pdf = () => {
  const { pdf } = usePdfStore();
  const [numPages, setNumPages] = useState(null);

  return (
    <>
      <Document file={pdf} onLoadSuccess={() => console.log("onLoadSuccess")}>
        <Page
          key={1}
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </>
  );
};

export default Pdf;
