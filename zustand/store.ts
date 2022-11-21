import create from "zustand";

export interface PdfState {
  pdf?: File;
  totalPage?: number;
  pageImage: Map<number, string>;
  currentSign:string
  setPdf: (pdf: File) => void;
  setTotalPage: (totalPage: number) => void;
  setCurrentSign:(sign: string) => void
}

export const usePdfStore = create<PdfState>(set => ({
  pdf: undefined,
  totalPage: 0,
  pageImage: new Map(),
  currentSign:'',
  setPdf: (pdf: File) => set(() => ({ pdf })),
  setTotalPage: (totalPage: number) => set(() => ({ totalPage })),
  setCurrentSign: (currentSign: string) => set(() => ({ currentSign }))
}));

export default usePdfStore;
