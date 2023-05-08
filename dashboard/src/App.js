import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Mainlayout from "./components/Mainlayout";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}/> 
        <Route path="/reset-password" element={<Resetpassword />} /> 
        <Route path="/forgot-password" element={<Forgotpassword />} />
         <Route path="/admin" element={<Mainlayout />} /> 
         <Route index element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
