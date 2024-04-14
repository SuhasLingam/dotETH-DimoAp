import LandingPage from "./components/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./components/pages/userDashboard";
import BuyNow from "./components/pages/buyNow";
import "@rainbow-me/rainbowkit/styles.css";
import { http, createConfig } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { walletConnect } from "wagmi/connectors";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { xdcTestnet } from "viem/chains";
import DesignerDashboard from "./components/pages/designerDashboard";
import Popup from "./components/popup";

const queryClient = new QueryClient();
export const config = getDefaultConfig({
  appName: "Vit-ap",
  projectId: "1ac4ef6af51b824c238d75abeb8487e7",
  chains: [xdcTestnet],
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/buy" element={<BuyNow />} />
              <Route path="/designer" element={<DesignerDashboard />} />
              <Route path="/popup" element={<Popup />} />
            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
