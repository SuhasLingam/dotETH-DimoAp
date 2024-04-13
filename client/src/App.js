import Navbar from "./components/navbar";
import LandingPage from "./components/landing";
import UserDashboard from "./components/pages/userDashboard";
import BuyNow from "./components/pages/buyNow";

function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <LandingPage />
      <UserDashboard />
      <BuyNow />
    </div>
  );
}

export default App;
