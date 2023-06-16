import Footer from "./components/Footer";
import Happenings from "./components/Happenings";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import NewListing from "./components/NewListing";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* New Listing */}
      <NewListing />
      {/* Happenings */}
      <Happenings />
      {/* Trends */}
      <Trends />
      {/* Info */}
      <Info />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
