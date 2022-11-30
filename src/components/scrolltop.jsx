import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from 'nprogress';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.start()
    window.scrollTo(0, 0);
    NProgress.done()
  }, [pathname]);

  return null;
}
