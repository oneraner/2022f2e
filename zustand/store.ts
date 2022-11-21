import create from "zustand";

export interface PdfState {
  pdf?: File;
  totalPage?: number;
  pageImage: Map<number, string>;
  setPdf: (pdf: File) => void;
  setTotalPage: (totalPage: number) => void;
}

export const usePdfStore = create<PdfState>(set => ({
  pdf: undefined,
  totalPage: 0,
  pageImage: new Map(),
  setPdf: (pdf: File) => set(() => ({ pdf })),
  setTotalPage: (totalPage: number) => set(() => ({ totalPage })),
}));

export default usePdfStore;
