import { Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SpendingTracker from './components/SpendingTracker';
import ActualBudget from './components/ActualBudget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/spending" element={<SpendingTracker />}></Route>
        <Route path="/budget" element={<ActualBudget />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
