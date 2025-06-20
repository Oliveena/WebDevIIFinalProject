import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SpendingTracker from './components/SpendingTracker';
import ActualBudget from './components/ActualBudget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';     
import Login from './components/Login';            
import Register from './components/Register';   
import Dashboard from './components/Dashboard';
import BudgetPlanner from './components/BudgetPlanner';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ColorModeProvider } from './context/ColorModeContext'; 
function App() {
  return (
    <ColorModeProvider> 
      <div className="min-h-screen flex flex-col">
        <header>
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
      </div>
    </ColorModeProvider>
  );
}

export default App;