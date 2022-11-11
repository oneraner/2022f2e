import create from "zustand";

interface PdfState {
  pdf?: File;
  setPdf: (pdf: File) => void;
}

export const usePdfStore = create<PdfState>((set) => ({
  pdf: undefined,
  setPdf: (pdf: any) => set(() => ({ pdf })),
}));

export default usePdfStore;
