// import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import View from './components/View';
import { Link, Route, Routes } from 'react-router-dom';
import ViewList from './components/ViewList';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>

          <li className="float-style"><Link to="/">Home</Link></li>
          <li className="float-style"><Link to="/Login">Login</Link></li>
          <li className="float-style"><Link to="/Register">Register</Link></li>
          {/* <li className="float-style">
            <Link to="/create">Create</Link>
          </li>

          <li className="float-style">
            <Link to="/viewAll">View</Link>
          </li> */}
        </ul>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:collegeCode' element={<Update />} />
          <Route path='/viewAll' element={<ViewList />} />
          <Route path='/view/:collegeCode' element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
