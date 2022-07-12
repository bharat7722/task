import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Drug from './pages/Drug';
import PatientList from './pages/PatientList';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Drug/>}/>
      <Route path='patient-list' element={<PatientList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
