import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SpendingTracker from './components/SpendingTracker';
import ActualBudget from './components/ActualBudget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';     
import Login from './components/Login';            
import Register from './components/Register';   
import Dashboard from './components/Dashboard';   

// MaterialUI date adapter
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />            {/* Added Features route */}
          <Route path="/login" element={<Login />} />                  {/* Added Login route */}
          <Route path="/register" element={<Register />} />            {/* Added Register route */}
          
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
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
