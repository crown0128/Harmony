import { useAtom } from "jotai";
import { useCallback } from "react";
import { v4 } from "uuid";
import pagesAtom, { pageSelectedAtom } from "./jotai";

const usePages = () => {
  const [pages, setPages] = useAtom(pagesAtom);
  const [page, setPage] = useAtom(pageSelectedAtom);
  const handleAddPage = () => {
    const newPage = {
      id: v4(),
    };
    setPage(newPage?.id);
    setPages((prev) => [...prev, newPage]);
  };

  const hnadleSelectPage = (id: string) => {
    setPage(id);
  };

  const handleDeletePage = useCallback(
    (pageId: string) => {
      setPages((prev) => {
        const pags = prev?.filter((item) => item?.id !== pageId);
        setPage(pags?.[0]?.id);
        return pags;
      });
    },
    [setPages, setPage]
  );

  return {
    handleAddPage,
    pages,
    hnadleSelectPage,
    handleDeletePage,
    page,
  };
};

export default usePages;
