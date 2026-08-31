import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider /*分隔線全域設定*/
      theme={{
        token: { colorSplit: "#483b20" },
        components: { Divider: { lineWidth: 2 } /*線條粗度*/ },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
