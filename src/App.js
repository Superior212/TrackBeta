// import logo from "./logo.svg";
// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Teams from "./components/Teams/Teams";
import Benefit from "./components/Benefits/Benefit";
import GettingStarted from "./components/GettingStarted/GettingStarted";
import TrackingDashboard from "./components/TrackingDashboard/TrackingDashboard";
import CustomerBtn from "./components/CustomerBtn/CustomerBtn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Teams />
      <Benefit />
      <GettingStarted />
      <TrackingDashboard />
      {/* <CustomerBtn /> */}
    </div>
  );
}

export default App;
