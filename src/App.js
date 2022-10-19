import './App.css';
import {Routes, Route} from 'react-router-dom';
import Authentication from './pages/authentication';
import Engineer from './pages/engineer'
import Customer from './pages/customer'
import Admin from './pages/admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication />}/>
        <Route path='/engineer' element={<Engineer />}/>
        <Route path='/customer' element={<Customer />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
    </div>
  );
}

export default App;
