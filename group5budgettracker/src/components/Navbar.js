import { Link, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ margin: "2vw" }}>
      <Link to="/">Home</Link> 
      | 
      <Link to="/spending">SpendingTracker</Link> 
      | 
      <Link to="/budget">ActualBudget</Link>
    </nav>
  );
}
