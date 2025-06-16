import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SpendingTracker from './components/SpendingTracker';
import ActualBudget from './components/ActualBudget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
<<<<<<< Updated upstream

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

=======
import Features from './components/Features';     
import Login from './components/Login';            
import Register from './components/Register';   
import Dashboard from './components/Dashboard';
import BudgetPlanner from './components/BudgetPlanner';

// MaterialUI date adapter
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="App-header">
        <Navbar />
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/spending"
            element={
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SpendingTracker />
              </LocalizationProvider>
            }
          />
          <Route path="/budget" element={<ActualBudget />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planner" element={<BudgetPlanner />} />
        </Routes>
      </main>

      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;