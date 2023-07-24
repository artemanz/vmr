import React from "react";
import ReactDOM from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

AOS.init({
  once: true,
  delay: 100,
});

import App from "./App";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
