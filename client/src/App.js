import Header from './Components/Header/Header.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css';
import AllRoutes from './AllRoutes.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div className='app'>
    <Header/>
    <Navbar/>
    <AllRoutes/>
    </div>
    </Router>
  );
}

export default App;
