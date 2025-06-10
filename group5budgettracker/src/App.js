import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SpendingTracker from './components/SpendingTracker';
import ActualBudget from './components/ActualBudget';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav style={{margin: "2vw"}}>
          <Link to="/">Home</Link> 
          | 
          <Link to="/spending">SpendingTracker</Link> 
          | 
          <Link to="/budget">ActualBudget</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/spending" element={<SpendingTracker />}></Route>
        <Route path="/budget" element={<ActualBudget />}></Route>
      </Routes>

    </div>
  );
}

export default App;
