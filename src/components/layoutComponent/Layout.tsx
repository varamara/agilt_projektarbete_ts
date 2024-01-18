import "./layout.scss"
import { ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const setMinHeight = () => {
        const mainContent = document.querySelector(".main-content") as HTMLElement | null;
      const footer = document.querySelector(".footer") as HTMLElement | null;

      if (mainContent && footer) {
        const windowHeight = window.innerHeight;
        const mainContentHeight = mainContent.offsetHeight;
        const footerHeight = footer.offsetHeight;

        if (mainContentHeight + footerHeight < windowHeight) {
          mainContent.style.minHeight = windowHeight - footerHeight + "px";
        }
      }
    };

    setMinHeight();
    window.addEventListener("resize", setMinHeight);

    return () => {
      window.removeEventListener("resize", setMinHeight);
    };
  }, []);

  return <div className="layout">{children}</div>;
};

export default Layout;
