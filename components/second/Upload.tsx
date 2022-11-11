import usePdfStore from "../../zustand/store";

export const Upload = () => {
  const { setPdf } = usePdfStore();

  const handleUploadPdf = (e) => {
    if (e?.target?.files.length < 1) return;
    setPdf(e?.target?.files[0]);
  };

  return (
    <input
      type="file"
      accept=".pdf"
      onChange={(e) => handleUploadPdf(e)}
    />
  );
};

export default Upload;
