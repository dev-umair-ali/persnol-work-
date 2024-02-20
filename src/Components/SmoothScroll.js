import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

var overscrollOptions = {
  renderByPixels: true,
  effect: "glow",
  damping: 0.15,
  maxOverscroll: 150,
};
var options = {
  damping: 0.04,
  Plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = () => {
  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);
  return null;
};

export default SmoothScroll;
