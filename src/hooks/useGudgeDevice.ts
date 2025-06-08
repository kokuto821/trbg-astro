import { useEffect } from "react";
import { isMobileAtom } from "../store/mobileAtom";
import { useSetAtom } from "jotai";

/** カスタムフックでウィンドウ幅を監視してatomを更新 */
export const useGudgeDevice = () => {
  const setIsMobile = useSetAtom(isMobileAtom);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [setIsMobile]);
};
